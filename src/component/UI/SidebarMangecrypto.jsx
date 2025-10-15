import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export function SidebarMangecrypto() {
  const [isOpen, setIsOpen] = useState(true);

  const cryptoMenu = [
    { label: "Earn", path: "/earn" },
    { label: "MetaMask Card", path: "/metamask-card" },
    { label: "Move crypto", path: "/move-crypto" },
    { label: "NFTs", path: "/nfts" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Tax Hub", path: "/tax-hub" },
    { label: "Tokens", path: "/tokens" },
    { label: "Trade", path: "/trade" },
    { label: "Transactions", path: "/transactions" },
  ];

  return (
    <aside className="h-screen w-72 bg-white border-r border-gray-200 p-4 overflow-y-auto">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center px-3 py-2 rounded-md font-semibold text-sm text-left text-gray-900 hover:bg-gray-100"
        >
          <span>Manage crypto</span>
          {isOpen ? (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-500" />
          )}
        </button>

        {isOpen && (
          <nav className="mt-1 space-y-1">
            {cryptoMenu.map(({ label,  }, index) => (
              <button
                key={index}
                className={`w-full flex justify-between items-center px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition ${
                  index === 0 ? "bg-gray-100" : ""
                }`}
              >
                <span>{label}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            ))}
          </nav>
        )}
      </div>
    </aside>
  );
}
