// src/components/ui/sidebar.jsx
import React, { useState } from "react"
import { Link} from "react-router-dom"
// import { ChevronDown, ChevronRight } from "lucide-react"
import { FaChevronDown, FaChevronRight } from "react-icons/fa"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const navItems = [
    { label: "Getting started with Bridge Key", path: "/getting-started-with-Criptiva" },
    { label: "Creating a new wallet", path: "/create-wallet" },
    { label: "Using an existing wallet", path: "/using-existing-wallet" },
    { label: "How to transfer assets from a centralized exchange to Bridge Key", path: "/transfer-assets" },
    { label: "Bridge Key is a self-custodial wallet", path: "/self-custodial" },
    { label: "User Guide: Secret Recovery Phrase, password, and private keys", path: "/user-guide" },
    { label: "How to contact Bridge Key Support", path: "/contact-support" },
    { label: "Can I use Bridge Key in my country?", path: "/country-usage" },
    { label: "What is a 'Secret Recovery Phrase', and how to keep your crypto wallet safe", path: "/secret-recovery-phrase" },
    { label: "Privacy Best Practices", path: "/privacy-best-practices" },
    { label: "Will Bridge Key ever ask me to verify my account?", path: "/verify-account" },
  ]

  return (
    <aside className="h-screen w-72 bg-white border-r border-gray-200 p-4 overflow-y-auto">
      <div>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center px-3 py-2 rounded-md font-semibold text-xl text-left hover:bg-gray-100"
        >start
          {isOpen ? <FaChevronDown className="w-4 h-4" /> : <FaChevronRight className="w-4 h-4" />}
        </button>

        {isOpen && (
          <nav className="mt-2 space-y-2">
            {navItems.map(({ label, path }, index) => (
              <Link
                key={index}
                to={path}
                className="block text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md px-3 py-2 transition"
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </aside>
  )
}
