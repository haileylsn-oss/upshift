import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg'

const Hero = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Navigation */}
            <div className="flex items-center space-x-8">
              <span className="text-xl font-semibold"><img src={logo} alt="" /></span>
              <nav className="hidden md:flex items-center space-x-6">
                {['Deposit', 'Stake', 'Portfolio', 'Points', 'Referrals'].map((item) => (
                  <button
                    key={item}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Right side - Network & Connect */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <Link to="/wallet">  <span className="text-sm">Ethereum</span> </Link>
              </div>
              <Link to="/wallet"> <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
                Connect
              </button>
              </Link>
             
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Announcement Banner */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-800 rounded-xl p-4 mb-8">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-5 h-5 border-2 border-blue-400 rounded-full flex items-center justify-center mt-0.5">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-200">
                <span className="font-semibold">Earn 5x Upshift points</span> for depositing your upUSDC on Morpho.  
                upUSDC holders can now borrow USDC and loop into the Upshift USDC vault.{' '}
                <Link to="/wallet">  <button className="text-blue-400 hover:text-blue-300 underline transition-colors">
                  View ways to earn points.
                </button> </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-6">Discover Vaults</h1>

        {/* Info Section */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8 border border-gray-700">
          <p className="text-gray-300 mb-6 leading-relaxed">
            Upshift is powered by August, Defi prime services infrastructure with $78 monthly volume.  
            Upshift deposits over $500k can borrow against their position on August. Reach out{' '}
            
          </p>
          
          {/* Total Deposited Card */}
          <div className="bg-gray-900 rounded-lg p-6 max-w-xs">
            <p className="text-gray-400 text-sm mb-2">Total Deposited</p>
            <p className="text-3xl font-bold">$436,570,698</p>
          </div>
        </div>

        {/* Vaults Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Vault Card 1 */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">U</span>
                </div>
                <div>
                  <h3 className="font-semibold">USDC Vault</h3>
                  <p className="text-gray-400 text-sm">Stablecoin</p>
                </div>
              </div>
              <span className="bg-green-900/30 text-green-400 px-2 py-1 rounded text-xs font-medium">
                Active
              </span>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">APY</span>
                <span className="font-semibold">8.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">TVL</span>
                <span>$124.5M</span>
              </div>
            </div>
             <Link to="/wallet">
            <button className="w-full bg-black border    py-3 rounded-lg transition-colors duration-200 font-medium">
              Deposit
            </button></Link>
          </div>

          {/* Vault Card 2 */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">E</span>
                </div>
                <div>
                  <h3 className="font-semibold">ETH Vault</h3>
                  <p className="text-gray-400 text-sm">Liquid Staking</p>
                </div>
              </div>
              <span className="bg-green-900/30 text-green-400 px-2 py-1 rounded text-xs font-medium">
                Active
              </span>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">APY</span>
                <span className="font-semibold">12.7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">TVL</span>
                <span>$89.2M</span>
              </div>
            </div>
            <Link to="/wallet">
            <button className="w-full bg-black border    py-3 rounded-lg transition-colors duration-200 font-medium">
              Deposit
            </button></Link>
          </div>

          {/* Vault Card 3 */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">B</span>
                </div>
                <div>
                  <h3 className="font-semibold">BTC Vault</h3>
                  <p className="text-gray-400 text-sm">Yield Farming</p>
                </div>
              </div>
              <span className="bg-green-900/30 text-green-400 px-2 py-1 rounded text-xs font-medium">
                Active
              </span>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">APY</span>
                <span className="font-semibold">15.3%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">TVL</span>
                <span>$156.8M</span>
              </div>
            </div>
            <Link to="/wallet">
            <button className="w-full bg-black border    py-3 rounded-lg transition-colors duration-200 font-medium">
              Deposit
            </button></Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;