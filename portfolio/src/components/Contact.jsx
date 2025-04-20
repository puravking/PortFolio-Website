import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white">
            
            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-10 max-w-4xl w-full flex flex-col md:flex-row">
                
                {/* Left Section */}
                <div className="md:w-1/2 pr-8">
                    <motion.h1
                        className="text-4xl font-bold mb-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Get in Touch 📞
                    </motion.h1>
                    
                    <p className="mb-6 text-lg">
                        Let's collaborate and create something amazing! Contact me through the form or via my social profiles.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-blue-500 text-2xl" />
                            <a href="mailto:kumarpurav59@gmail.com" className="hover:text-blue-600 transition">kumarpurav59@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhone className="text-green-500 text-2xl" />
                            <span>+91 9548553251</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-8 flex gap-6">
                        <motion.a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            className="text-blue-700 text-3xl hover:text-blue-500 transition"
                        >
                            <FaLinkedin />
                        </motion.a>
                        
                        <motion.a 
                            href="https://github.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            className="text-gray-800 text-3xl hover:text-gray-600 transition"
                        >
                            <FaGithub />
                        </motion.a>

                        <motion.a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            className="text-blue-400 text-3xl hover:text-blue-300 transition"
                        >
                            <FaTwitter />
                        </motion.a>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <motion.form
                        className="flex flex-col space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-lg font-medium">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-lg font-medium">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Write your message here..."
                                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="w-full bg-blue-500 text-white rounded-lg p-3 font-bold text-lg hover:bg-blue-600 transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message 🚀
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
