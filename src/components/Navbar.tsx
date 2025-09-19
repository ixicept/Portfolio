import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center z-50">
      <div className="bg-stone-900 rounded-xl px-4 py-2 mt-3 shadow-md inline-block sm:px-6 sm:py-3 sm:mt-4">
        <div className="flex space-x-2 sm:space-x-4">
          <Link
            to="/about-me"
            className="text-lime-300 hover:text-white px-2 py-1 rounded-md text-xs font-medium sm:px-3 sm:py-2 sm:text-sm"
          >
            About Me
          </Link>
          <Link
            to="/experience"
            className="text-lime-300 hover:text-white px-2 py-1 rounded-md text-xs font-medium sm:px-3 sm:py-2 sm:text-sm"
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className="text-lime-300 hover:text-white px-2 py-1 rounded-md text-xs font-medium sm:px-3 sm:py-2 sm:text-sm"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
