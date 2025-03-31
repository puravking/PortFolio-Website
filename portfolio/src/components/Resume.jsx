import React from 'react';
import image from "../images/image.png";

function Resume() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            
            <div className="bg-white rounded-lg shadow-lg p-8 w-[90%] max-w-4xl transition hover:scale-105 duration-300">
                {/* <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6"> My Resume</h1> */}
                
                {/* Image Display */}
                <div className="flex justify-center">
                    <img 
                        src={image} 
                        alt="Resume" 
                        className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition"
                    />
                </div>

                <div className="text-center mt-6">
                    <a 
                        href={image} 
                        download="Resume.png"
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Download Resume 📥
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Resume;
