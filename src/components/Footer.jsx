"use client"
import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-indigo-900 border-t border-purple-500 to-purple-900 text-gray-300  py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-purple-400">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">PM</text>
          </svg>
          <span className="text-xl font-bold text-white">Product Management</span>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm">
          <a href="/" className="hover:text-purple-400 transition">Home</a>
          <a href="/products" className="hover:text-purple-400 transition">Products</a>
          <a href="/login" className="hover:text-purple-400 transition">Login</a>
          <a href="/register" className="hover:text-purple-400 transition">Register</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" aria-label="Twitter" className="hover:text-purple-400 transition">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 19c7.732 0 11.946-6.409 11.946-11.946 0-.182 0-.364-.012-.545A8.548 8.548 0 0022 4.59a8.19 8.19 0 01-2.357.646A4.118 4.118 0 0021.448 3.2a8.224 8.224 0 01-2.605.996A4.107 4.107 0 0015.448 3c-2.266 0-4.104 1.838-4.104 4.104 0 .322.036.637.106.938A11.654 11.654 0 013 4.1a4.104 4.104 0 001.27 5.477A4.073 4.073 0 012.8 9.1v.052A4.106 4.106 0 004.1 13.2a4.093 4.093 0 01-1.852.07A4.108 4.108 0 007.8 16.1a8.233 8.233 0 01-5.096 1.757c-.332 0-.66-.02-.984-.058A11.616 11.616 0 008 19z" />
            </svg>
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-purple-400 transition">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.174 22 16.426 22 12.012 22 6.484 17.523 2 12 2z" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-purple-400 transition">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.533-2.513-1.534 0-1.769 1.198-1.769 2.435v4.682h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v4.729z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Product Management. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;