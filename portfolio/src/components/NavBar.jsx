import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="flex justify-center gap-9 flex-wrap bg-gray-900 text-white py-4">
            
            {/* Navigation Links */}
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>
            <Link to="/about-me" className="hover:text-blue-400 transition">About Me</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
            
            {/* Resume Link */}
            <Link 
                to="/resume" 
                className="hover:text-yellow-400 transition"
            >
                Resume
            </Link>
        </div>
    );
}

export default NavBar;
