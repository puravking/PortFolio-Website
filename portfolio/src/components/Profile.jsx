import React from 'react';
import { FaEdit, FaEnvelope, FaPhone } from 'react-icons/fa';
import profilepicture from '../images/profilepicture.jpg';
import { motion } from "framer-motion";

function Profile() {
    return (
        <motion.div 
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white transition-all duration-1000 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
        >
            {/* Animated Heading */}
            <motion.h1
                className="text-5xl font-extrabold text-white drop-shadow-lg mb-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.1, rotate: 3, color: "#FDE047" }}
                whileTap={{ scale: 0.9, rotate: -3 }}
            >
                Welcome to My Portfolio ✨
            </motion.h1>

            {/* Profile Card */}
            <motion.div 
                className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl p-8 w-[420px] transform transition hover:scale-105 hover:shadow-xl duration-500"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.6)" }}
            >
                
                {/* Profile Image with Edit Button */}
                <div className="relative flex justify-center">
                    <img 
                        src={profilepicture} 
                        alt="Profile" 
                        className="w-40 h-40 rounded-full object-cover border-4 border-blue-400 shadow-lg transition hover:border-yellow-400"
                    />
                    <motion.button 
                        className="absolute bottom-2 right-6 bg-blue-500 text-white p-2 rounded-full hover:bg-yellow-400 transition"
                        whileHover={{ scale: 1.2 }}
                    >
                        <FaEdit />
                    </motion.button>
                </div>

                {/* User Info */}
                <div className="text-center mt-6">
                    <h1 className="text-3xl font-bold text-white">Purav</h1>
                    <p className="text-gray-400">Full Stack Developer</p>
                </div>

                {/* Contact Info */}
                <div className="mt-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-gray-300 transition hover:text-blue-400">
                        <FaEnvelope className="text-blue-500" />
                        <a href="mailto:kumarpurav59@gmail.com" className="hover:text-blue-400 transition">
                            kumarpurav59@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300 transition hover:text-green-400">
                        <FaPhone className="text-green-500" />
                        <span>+91 9548553251</span>
                    </div>
                </div>

                {/* Button to About Section */}
                <div className="mt-8 text-center">
                    <a href="/about-me" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-md transform hover:scale-105">
                        Learn More About Me →
                    </a>
                </div>
            </motion.div>

        </motion.div>
    );
}

export default Profile;
