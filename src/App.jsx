import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Journal from "./pages/Journal";
import JournalPost from "./pages/JournalPost"; // Import JournalPost component
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
    return (
        <>
        <AnimatedBackground />
            <div className="app">
                <BrowserRouter>
                    <div className="flex">
                        <Navbar />
                        <div className="flex-grow">
                            <div className="flex flex-col">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/projects" element={<Projects />} />
                                    <Route path="/journal" element={<Journal />} />
                                    <Route path="/journal/:slug" element={<JournalPost />} /> {/* Dynamic route for JournalPost */}
                                    <Route path="/contact" element={<Contact />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
