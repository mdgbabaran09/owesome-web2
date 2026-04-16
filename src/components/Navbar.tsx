import { Link } from "@tanstack/react-router"
import logo from "../assets/owesome-logo.svg"
import { useState } from "react"
import { HugeiconsIcon } from '@hugeicons/react';
import { Menu, X } from '@hugeicons/core-free-icons';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full shadow-md fixed top-0 bg-[#fffcf9] z-50" >
        <div className="max-w-6xl mx-auto min-h-16 px-4 flex items-center justify-between">
          {/* Logo Container
        shrink-0 so that it does not shrink less than the necessary width
      */}
          <Link to="/" className="flex gap-2 items-center shrink-0">
            <img className="h-12 w-auto" src={logo} />
            <h1 className="text-xl font-semibold text-amber-700">
              owe<span className="text-amber-600">some</span>
            </h1>
          </Link>
          {/* Links */}
          <div className="hidden md:inline">
            <NavLinks />
          </div>

          {/* Buttons */}
          <div className="flex gap-2 shrink-0 ml-auto mr-3 md:ml-0 md:mr-0">
            <Link to="/login" className="btn-secondary px-2 py-0.5 text-md md:px-4 md:py-1 md:text-lg">
              Login
            </Link>
            <Link to="/signup" className="btn-primary px-2 py-0.5 text-md md:px-4 md:py-1 md:text-lg">
              Signup
            </Link>
          </div>
          {
            isMenuOpen ?
              <HugeiconsIcon icon={X} className="md:hidden text-gray-700 hover:text-gray-900 transition-colors" onClick={() => { setIsMenuOpen(false) }} size={32} />
              :
              <HugeiconsIcon icon={Menu} className="md:hidden text-gray-700 hover:text-gray-900 transition-colors" onClick={() => { setIsMenuOpen(false) }} size={32} />
          }
          <div className={`${isMenuOpen ? 'flex' : "hidden"} md:hidden flex-col absolute top-17 rounded-md drop-shadow-lg font-semibold text-xl text-center py-4 min-w-2xs h-fit bg-[var(--default-bg-color)]`}>
            <NavLinks />
          </div>
        </div>
      </nav>
      <div className="mt-16"></div>
    </>
  )
}

function NavLinks() {
  return (
    <ul className="flex flex-col gap-8 justify-center flex-2 text-2xl md:text-lg md:flex-row">
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  )
}

export default Navbar