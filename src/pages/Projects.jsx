import React, { useState, useEffect } from 'react';
import Project from '../components/Project';


function Projects() {
    const [projects, setProjects] = useState([
        

    ]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
//TODO: Add the projects here
      setProjects([
        {
            id:1,
            img:"../assets/projectImages/portfolio.png",
            title:"Portfolio Website",
            subtitle:"Web Application",
            description:"My personal portfolio website with React and TailwindCSS. It also exist a UI for backend",
            github:"https://github.com/devtunahan/portfolio",
            demo:"https://tunahan.at"
        },
        {
            id:2,
            img:"../assets/projectImages/todoflow.png",
            title:"Todoflow",
            subtitle:"Web Application",
            description:"Simple Todo Application, build with MERN stack, local development",
            github:"https://github.com/devtunahan/todoflow",
            demo:""
        },
        {
            id:3,
            img:"../assets/projectImages/techaid.png",
            title:"Techaid",
            subtitle:"Web Application",
            description:"market research form to see where companies stand in terms of technology. It was developed using the MERN Stack. The form is in german for now",
            github:"",
            demo:""
        },
      ])
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
                    {/*add correct image from assets*/}
                    <Project
                        img={project.img}
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