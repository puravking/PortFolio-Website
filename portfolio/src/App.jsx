import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import Card from "./components/Card";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
function App() {
    return (
      <div>
        <Router>
            <div className='flex flex-col min-h-screen bg-gray-100'>
                <NavBar />

                {/* Route Definitions */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<Profile />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/card" element={<Card />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path='/resume' element= {<Resume></Resume>}></Route>
                </Routes>
            </div>

        </Router>
        
        

      </div>
        
    );
}

export default App;
