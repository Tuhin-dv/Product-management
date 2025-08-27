"use client"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { useState } from "react"

export default function Navbar() {
  const { data: session } = useSession()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white shadow-lg backdrop-blur-lg">
      <div className="max-w-[1700px] mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              className="text-purple-400"
            >
              <circle cx="12" cy="12" r="10" fill="currentColor" />
              <text
                x="12"
                y="16"
                textAnchor="middle"
                fontSize="10"
                fill="#fff"
              >
                MS
              </text>
            </svg>
            <h1 className="text-2xl font-extrabold tracking-tight">MyShop</h1>
          </div>
        </Link>

        {/* Hamburger for mobile/tablet */}
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded-md hover:bg-purple-800 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menu */}
        <ul
          className={`flex-col lg:flex-row gap-6 lg:gap-8 text-lg font-medium items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 lg:bg-none shadow-lg lg:shadow-none transition-all duration-300 ${
            menuOpen
              ? "flex"
              : "hidden lg:flex"
          }`}
        >
          <li>
            <Link href="/" className="block px-4 py-2 hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="block px-4 py-2 hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="block px-4 py-2 hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
          </li>

          {/* Login link if not logged in */}
          {!session && (
            <li>
              <Link href="/login" className="block px-4 py-2 hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </li>
          )}

          {/* User info & Sign out if logged in */}
          {session && (
            <li className="flex flex-col lg:flex-row items-center gap-3 px-4 py-2">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt="avatar"
                  className="w-8 h-8 rounded-full border border-white"
                />
              )}
              <span className="font-semibold text-center lg:text-left">
                {session.user?.name || session.user?.email}
              </span>
              <button
                onClick={() => {
                  setMenuOpen(false)
                  signOut()
                }}
                className="mt-2 lg:mt-0 px-4 py-1 bg-purple-600 rounded-xl text-white font-semibold hover:bg-purple-700 transition"
              >
                Sign out
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}