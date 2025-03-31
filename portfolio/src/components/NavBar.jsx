import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="flex justify-center gap-9 flex-wrap bg-gray-900 text-white py-4">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>
            <Link to="/about-me" className="hover:text-blue-400 transition">About Me</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>
    );
}

export default NavBar;
