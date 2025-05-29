'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { useAuth } from '@/context/auth.context';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Orders', href: '/orders' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="shadow bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center py-4 px-6 sm:px-8 lg:h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-orange-500 tracking-tight">
          🍕 Foodie
        </Link>

        {/* Hamburger icon (Mobile only) */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`transition-all duration-300 ${
                pathname === href ? 'text-orange-600' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              {name}
            </Link>
          ))}

          {mounted && isAuthenticated ? (
            <button
              onClick={logout}
              className="ml-2 px-4 py-1 border border-red-500 text-red-600 rounded-md text-sm bg-red-200"
            >
              Logout
            </button>
          ) : mounted ? (
            <>
              <Link href="/login">
                <button className="px-4 py-1 border border-orange-500 text-orange-500 rounded-md text-sm">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="px-4 py-1 bg-orange-500 text-white rounded-md text-sm">
                  Register
                </button>
              </Link>
            </>
          ) : null}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-3 text-sm font-semibold bg-white">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block ${
                pathname === href ? 'text-orange-600' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              {name}
            </Link>
          ))}

          {mounted && (
            <div className="flex gap-4 pt-4 items-center">
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="text-red-500 text-sm font-semibold ml-2"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link href="/login" onClick={() => setMenuOpen(false)} className="text-orange-500">
                    Login
                  </Link>
                  <Link href="/register" onClick={() => setMenuOpen(false)} className="text-orange-500">
                    Register
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
