import React, { useState, useEffect } from 'react';
import Project from '../components/Project';
import axios from 'axios';

const baseUrl = 'http://localhost:3000'; // Base URL for both API and image

function Projects() {
    const [projects, setProjects] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/projects`); // Fetch data from the server
                setProjects(response.data); // Set projects state with fetched data
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchData(); // Call fetchData function on component mount
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const projectsElement = document.getElementById("projects");
            if (projectsElement) {
                const top = projectsElement.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight * 0.75) {
                    setIsVisible(true);
                    window.removeEventListener("scroll", handleScroll);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check if element is visible on initial render

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div id="projects" className="text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl p-10">Projects</h1>
            {projects.map((project, index) => (
                <div key={index} className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
                    <Project
                        img={`${baseUrl}${project.image}`} // Concatenate base URL with image URL
                        title={project.title}
                        subtitle={project.subtitle}
                        description={project.description}
                        github={project.github}
                        demo={project.demo}
                    />
                </div>
            ))}
        </div>
    );
}

export default Projects;
