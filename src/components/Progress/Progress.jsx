import  { useState } from 'react';

const Progress = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedChains, setSelectedChains] = useState([]);
  const [selectedTokens, setSelectedTokens] = useState([]);
  const [isChainOpen, setIsChainOpen] = useState(false);
  const [isTokenOpen, setIsTokenOpen] = useState(false);

  const tabs = ['All', 'Lending', 'DeFi', 'Pre-deposit'];
  const chains = ['Ethereum', 'Polygon', 'Arbitrum', 'Optimism', 'Base'];
  const tokens = ['USDC', 'USDT', 'ETH', 'BTC', 'DAI', 'MATIC'];

  const toggleChain = (chain) => {
    setSelectedChains(prev =>
      prev.includes(chain)
        ? prev.filter(c => c !== chain)
        : [...prev, chain]
    );
  };

  const toggleToken = (token) => {
    setSelectedTokens(prev =>
      prev.includes(token)
        ? prev.filter(t => t !== token)
        : [...prev, token]
    );
  };

  const getDisplayText = (items, defaultText) => {
    if (items.length === 0) return defaultText;
    if (items.length === 1) return items[0];
    return `${items.length} selected`;
  };

  return (
    <div className="w-full space-y-6">
      {/* Enhanced Tabs */}
      <div className="relative">
        <div 
          role="tablist" 
          aria-label="Segmented tabs"
          className="flex space-x-1 bg-gray-800 rounded-lg p-1 border border-gray-700"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`
                relative flex-1 px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200
                ${activeTab === tab 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Active Tab Background */}
        <div 
          className="absolute top-1 bottom-1 bg-blue-600 rounded-md transition-all duration-300 shadow-lg"
          style={{
            width: `calc(25% - 8px)`,
            left: `calc(${tabs.indexOf(activeTab) * 25}% + 4px)`,
          }}
        />
      </div>

      {/* Enhanced Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Chains Multi-select Dropdown */}
        <div className="flex-1 relative">
          <button
            onClick={() => setIsChainOpen(!isChainOpen)}
            className="
              w-full px-3 py-2.5 pr-10 
              bg-gray-800 border border-gray-600 rounded-lg
              text-white text-sm text-left
              hover:border-gray-500 focus:border-blue-500 focus:outline-none
              transition-colors duration-200
              flex items-center justify-between
            "
          >
            <span className={selectedChains.length === 0 ? 'text-gray-400' : 'text-white'}>
              {getDisplayText(selectedChains, 'All chains')}
            </span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
              className={`transform transition-transform duration-200 ${isChainOpen ? 'rotate-180' : ''}`}
            >
              <path 
                d="M15 8.5L10 13.5L5 8.5" 
                stroke="currentColor" 
                strokeWidth="1.7" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isChainOpen && (
            <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-lg max-h-60 overflow-auto">
              {chains.map((chain) => (
                <div
                  key={chain}
                  onClick={() => toggleChain(chain)}
                  className={`
                    px-3 py-2 text-sm cursor-pointer transition-colors duration-150
                    ${selectedChains.includes(chain)
                      ? 'bg-blue-600/20 text-blue-300'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }
                  `}
                >
                  <div className="flex items-center">
                    <div className={`
                      w-4 h-4 border rounded mr-3 flex items-center justify-center
                      ${selectedChains.includes(chain)
                        ? 'bg-blue-500 border-blue-500'
                        : 'border-gray-500'
                      }
                    `}>
                      {selectedChains.includes(chain) && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    {chain}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tokens Multi-select Dropdown */}
        <div className="flex-1 relative">
          <button
            onClick={() => setIsTokenOpen(!isTokenOpen)}
            className="
              w-full px-3 py-2.5 pr-10 
              bg-gray-800 border border-gray-600 rounded-lg
              text-white text-sm text-left
              hover:border-gray-500 focus:border-blue-500 focus:outline-none
              transition-colors duration-200
              flex items-center justify-between
            "
          >
            <span className={selectedTokens.length === 0 ? 'text-gray-400' : 'text-white'}>
              {getDisplayText(selectedTokens, 'All tokens')}
            </span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
              className={`transform transition-transform duration-200 ${isTokenOpen ? 'rotate-180' : ''}`}
            >
              <path 
                d="M15 8.5L10 13.5L5 8.5" 
                stroke="currentColor" 
                strokeWidth="1.7" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isTokenOpen && (
            <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-lg max-h-60 overflow-auto">
              {tokens.map((token) => (
                <div
                  key={token}
                  onClick={() => toggleToken(token)}
                  className={`
                    px-3 py-2 text-sm cursor-pointer transition-colors duration-150
                    ${selectedTokens.includes(token)
                      ? 'bg-blue-600/20 text-blue-300'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }
                  `}
                >
                  <div className="flex items-center">
                    <div className={`
                      w-4 h-4 border rounded mr-3 flex items-center justify-center
                      ${selectedTokens.includes(token)
                        ? 'bg-blue-500 border-blue-500'
                        : 'border-gray-500'
                      }
                    `}>
                      {selectedTokens.includes(token) && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    {token}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Progress;