"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Orders", href: "/orders" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-orange-500 tracking-tight">
          🍕 Foodie
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {name}
            </Link>
          ))}
          <Link
            href="/login"
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition text-sm font-semibold"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-base font-medium ${
                pathname === href
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {name}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition text-base font-semibold"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
