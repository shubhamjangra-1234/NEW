
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-zinc-800 shadow-md sticky top-0 z-50">
      <div className="w-full px-4 flex justify-between items-center py-2">
        {/* Logo and Name */}
        <div className="flex items-center">
          <img
            src="/Images/logo.png"
            alt="Logo"
            className="h-14 w-14 mr-2" // Replace with your logo
          />
          <span className="text-xl  text-gray-100">
            National Engineering Works
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <a href="/" className="text-gray-200 hover:border-b ">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-200 hover:border-b ">
              About Us
            </a>
          </li>
          <li className="relative">
            <a href="/services" >
             <button
              className="text-gray-200  hover:border-b flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Services
          
            </button> 
           
            </a>
          </li>
          <li>
            <a href="/machines" className="text-gray-100  hover:border-b">
              Machineries
            </a>
          </li>
          <li>
            <a
              href="/quote"
              className="bg-zinc-800 border text-white px-4 py-2 rounded-lg hover:bg-zinc-700"
            >
              Get Quote
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <ul className="md:hidden p-2 bg-zinc-800 border-t shadow-md duration:500">
          <li>
            <a
              href="/"
              className="block px-4 py-2 text-gray-200 hover:bg-zinc-600"
              >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block px-4 py-2 text-gray-200 hover:bg-zinc-600"
              >
              About
            </a>
          </li>
          <li>
            <a href="/services" >
            <button
              className="block px-4 py-2 text-gray-200 hover:bg-zinc-600 w-full text-left"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Services
            
            </button>
            </a>
          </li>
          <li>
            <a
              href="/machines"
              className="block px-4 py-2 text-gray-200 hover:bg-zinc-600"
              >
              Machineries
            </a>
          </li>
          <li>
            <a
              href="/quote"
              className="block px-4 py-2 bg-zinc-800 text-white border rounded hover:bg-zinc-700"
            >
              Get Quote
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
