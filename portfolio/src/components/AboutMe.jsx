import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black text-white p-8">
            
            <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-10 max-w-4xl transition hover:scale-105 hover:shadow-lg duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
            >
                {/* Section Title */}
                <h1 className="text-4xl font-bold text-blue-400 mb-6">
                    About Me 🌟
                </h1>

                {/* Description */}
                <p className="leading-relaxed text-gray-300 text-lg transition-all duration-300 hover:text-gray-200">
                    I am a passionate Full Stack Developer with experience in building robust, scalable, and responsive web applications. 
                    Skilled in JavaScript, React.js, Express.js, and MongoDB, I love creating elegant solutions to complex problems. 
                    My goal is to continuously learn and contribute to impactful projects. 🚀
                </p>

                {/* Expanded Skills Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                        Skills 💻
                    </h2>
                    
                    {/* Skill Categories */}
                    <div className="grid grid-cols-2 gap-8">
                        
                        {/* Frontend Skills */}
                        <div>
                            <h3 className="text-xl font-bold text-blue-300 mb-3">Frontend</h3>
                            <div className="flex flex-wrap gap-4">
                                <motion.div 
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg transition hover:bg-yellow-400 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    React.js
                                </motion.div>
                                <motion.div 
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg transition hover:bg-purple-500 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Tailwind CSS
                                </motion.div>
                                <motion.div 
                                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg transition hover:bg-pink-500 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    HTML & CSS
                                </motion.div>
                                <motion.div 
                                    className="bg-pink-500 text-white px-4 py-2 rounded-lg transition hover:bg-red-400 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    JavaScript (ES6+)
                                </motion.div>
                            </div>
                        </div>

                        {/* Backend Skills */}
                        <div>
                            <h3 className="text-xl font-bold text-green-300 mb-3">Backend</h3>
                            <div className="flex flex-wrap gap-4">
                                <motion.div 
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg transition hover:bg-blue-400 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Node.js
                                </motion.div>
                                <motion.div 
                                    className="bg-purple-500 text-white px-4 py-2 rounded-lg transition hover:bg-green-400 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Express.js
                                </motion.div>
                                <motion.div 
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg transition hover:bg-pink-400 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    MongoDB
                                </motion.div>
                                <motion.div 
                                    className="bg-teal-500 text-white px-4 py-2 rounded-lg transition hover:bg-yellow-400 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    REST APIs
                                </motion.div>
                            </div>
                        </div>

                        {/* Tools & Technologies */}
                        <div>
                            <h3 className="text-xl font-bold text-purple-300 mb-3">Tools & Technologies</h3>
                            <div className="flex flex-wrap gap-4">
                                <motion.div 
                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg transition hover:bg-blue-500 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Git & GitHub
                                </motion.div>
                                <motion.div 
                                    className="bg-blue-700 text-white px-4 py-2 rounded-lg transition hover:bg-green-400 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Docker
                                </motion.div>
                                <motion.div 
                                    className="bg-orange-500 text-white px-4 py-2 rounded-lg transition hover:bg-yellow-400 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Postman
                                </motion.div>
                                <motion.div 
                                    className="bg-pink-400 text-white px-4 py-2 rounded-lg transition hover:bg-indigo-400 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    VS Code
                                </motion.div>
                            </div>
                        </div>

                        {/* Programming Languages */}
                        <div>
                            <h3 className="text-xl font-bold text-yellow-300 mb-3">Languages</h3>
                            <div className="flex flex-wrap gap-4">
                                <motion.div 
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg transition hover:bg-green-400 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    C++
                                </motion.div>
                                <motion.div 
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg transition hover:bg-blue-400 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    JavaScript
                                </motion.div>
                                <motion.div 
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg transition hover:bg-purple-400 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Python
                                </motion.div>
                                <motion.div 
                                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg transition hover:bg-yellow-400 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    SQL
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>

        </div>
    );
}

export default AboutMe;
