// src/components/ui/sidebar.jsx
import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  ChevronDown,
  ChevronRight,
  CreditCard,
  DollarSign,
  Package,
  BarChart,
  FileText,
  Layers,
  List,
  User,
} from "lucide-react"

const navData = [
  {
    label: "Earn",
    icon: <DollarSign className="w-5 h-5" />,
    children: [
      {
        label: "Lend stablecoins",
        children: [
          { label: "How to lend tokens", path: "/lend-tokens" },
          { label: "How do rewards work?", path: "/rewards" },
          { label: "What are the risks?", path: "/risks" },
          { label: "What are aTokens?", path: "/atokens" },
          { label: "What is lending?", path: "/lending" },
          { label: "Why should I lend?", path: "/why-lend" },
          { label: "Withdraw loaned tokens", path: "/withdraw" },
        ],
      },
      { label: "Stake crypto", path: "/stake-crypto" },
    ],
  },
  {
    label: "Cryptiva Card",
    icon: <CreditCard className="w-5 h-5" />,
    path: "/cryptiva-card",
  },
  {
    label: "Move crypto",
    icon: <Package className="w-5 h-5" />,
    path: "/move-crypto",
  },
  {
    label: "NFTs",
    icon: <Layers className="w-5 h-5" />,
    path: "/nfts",
  },
  {
    label: "Portfolio",
    icon: <BarChart className="w-5 h-5" />,
    path: "/portfolio",
  },
  {
    label: "Tax Hub",
    icon: <FileText className="w-5 h-5" />,
    path: "/tax-hub",
  },
  {
    label: "Tokens",
    icon: <List className="w-5 h-5" />,
    path: "/tokens",
  },
  {
    label: "Transactions",
    icon: <User className="w-5 h-5" />,
    path: "/transactions",
  },
]

function NavItem({ label, icon, children, path }) {
  const [open, setOpen] = useState(false)

  if (children) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-md"
        >
          <div className="flex items-center space-x-2">
            {icon && <span>{icon}</span>}
            <span className="font-medium">{label}</span>
          </div>
          {open ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>

        {open && (
          <div className="ml-6 mt-1 space-y-1">
            {children.map((child, i) =>
              child.children ? (
                <NavItem key={i} {...child} />
              ) : (
                <Link
                  key={i}
                  to={child.path}
                  className="block px-3 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md text-sm"
                >
                  {child.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      to={path}
      className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md space-x-2"
    >
      {icon && <span>{icon}</span>}
      <span className="font-medium">{label}</span>
    </Link>
  )
}

export function Sidebar() {
  return (
    <aside className="h-screen w-72 bg-white border-r border-gray-200 p-4 overflow-y-auto">
      <h2 className="mb-4 px-3 text-sm font-semibold text-gray-500 uppercase">
        Manage Crypto
      </h2>
      <nav className="space-y-1">
        {navData.map((item, i) => (
          <NavItem key={i} {...item} />
        ))}
      </nav>
    </aside>
  )
}
