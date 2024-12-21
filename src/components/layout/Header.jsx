
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-indigo-600">
          Architecture
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-indigo-600">
            Home
          </Link>
          <Link to="/productPage" className="text-gray-600 hover:text-indigo-600">
            Product
          </Link>
          <Link to="/login" className="text-gray-600 hover:text-indigo-600">
            Login
          </Link>
          {/* <Link to="/contact" className="text-gray-600 hover:text-indigo-600">
            Contact
          </Link> */}
        </div>




      </nav>
    </header>
  );
}
