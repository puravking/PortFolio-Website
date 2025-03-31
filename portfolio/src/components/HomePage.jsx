import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Profile from "./Profile";

function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-white">
            
            {/* Animated Heading */}
            <motion.h1
                className="text-6xl font-extrabold drop-shadow-lg mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
            >
                {/* Welcome to My Portfolio 🚀 */}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="text-lg mb-10 max-w-2xl text-center leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                Explore my projects, skills, and experience. Get in touch for collaboration opportunities!
                
            </motion.p>
            <Profile/>

            {/* CTA Buttons */}
            <div className="flex gap-6">
                <Link to="/about">
                    <motion.button
                        className="px-8 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition shadow-lg font-semibold text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        About Me
                    </motion.button>
                </Link>

                <Link to="/contact">
                    <motion.button
                        className="px-8 py-3 rounded-lg bg-green-500 hover:bg-green-600 transition shadow-lg font-semibold text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Contact
                    </motion.button>
                </Link>
            </div>

            {/* Animated Features Section */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
                {/* Feature 1 */}
                <motion.div
                    className="bg-white text-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transition"
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-2xl font-bold mb-3">🚀 Projects</h2>
                    <p>Explore my full-stack, React, and Node.js projects.</p>
                    <div className="mt-6">
                    <Link to="/projects">
                        <motion.button
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            View Projects 🔥
                        </motion.button>
                    </Link>
                </div>
                </motion.div>

                {/* Feature 2 */}

                <motion.div
                    className="bg-white text-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transition"
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-2xl font-bold mb-3">💻 Skills</h2>
                    <p>Proficient in React, Node.js, MongoDB, and Tailwind CSS.</p>
                    <div className="mt-8 flex">
                                        <Link to="/about-me">
                                            <motion.button
                                                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                View Skills 🔥
                                            </motion.button>
                                        </Link>
                    </div>
                </motion.div>

                {/* Feature 3 */}
                <motion.div
                    className="bg-white text-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transition"
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-2xl font-bold mb-3">📞 Contact</h2>
                    <p>Get in touch for collaboration or freelance opportunities.</p>
                    <div className="mt-8 flex">
                                        <Link to="/contact">
                                            <motion.button
                                                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                Contact Me 🔥
                                            </motion.button>
                                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <footer className="mt-20 text-center text-sm text-gray-300">
                © 2025 Pranav Tiwari | Built with React.js, Tailwind CSS, and Framer Motion
            </footer>
        </div>
    );
}

export default HomePage;
