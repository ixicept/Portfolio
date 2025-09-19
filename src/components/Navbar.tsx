import React from "react"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

const Navbar: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-1 py-1 text-xs font-thin sm:px-0 sm:py-2 sm:text-sm
   text-lime-300 hover:text-lime-500 transition-colors duration-500 ease-in-out
   after:content-[''] after:absolute after:left-0 after:bottom-0.5
   after:h-0.5 after:bg-lime-500 after:w-0 hover:after:w-full after:transition-all after:duration-500 after:ease-in-out
   ${isActive ? "text-lime-500 after:w-full" : ""}`

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full flex justify-center z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1, ease: "easeOut" }}
    >
      <div className="bg-stone-900 rounded-xl px-4 py-2 mt-3 shadow-md inline-block sm:px-6 sm:py-3 sm:mt-4 opacity-80">
        <div className="flex space-x-2 sm:space-x-4">
          <NavLink to="/about-me" className={linkClass}>
            About Me
          </NavLink>
          <NavLink to="/experience" className={linkClass}>
            Experience
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
