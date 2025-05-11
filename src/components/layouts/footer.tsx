"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 mt-10 ">
      <div className="max-w-7xl mx-auto px-3 py-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Tagline */}
        <div>
          <h1 className="text-2xl font-bold text-orange-500 mb-2">🍔 Foodie</h1>
          <p className="text-sm text-gray-600">
            Delivering happiness to your doorstep. Hot, fast, and delicious!
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="font-semibold text-gray-700 mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-orange-500 transition">Home</Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-orange-500 transition">Menu</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500 transition">Contact</Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-orange-500 transition">Login</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="font-semibold text-gray-700 mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="hover:text-orange-500 transition" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="hover:text-orange-500 transition" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="hover:text-orange-500 transition" />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <Youtube className="hover:text-orange-500 transition" />
            </Link>
            <Link href="mailto:support@foodie.com">
              <Mail className="hover:text-orange-500 transition" />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t">
        &copy; {new Date().getFullYear()} Foodie. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
