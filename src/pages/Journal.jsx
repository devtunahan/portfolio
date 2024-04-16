import React, { useState, useEffect } from 'react';
import JournalItem from '../components/JournalItem';
import axios from 'axios';

function Journal() {
    const [journalData, setJournalData] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fetchJournalData = async () => {
            try {
                // Fetch journal data from your backend API using Axios
                const response = await axios.get('http://localhost:3000/api/journals');
                // Check if response status is OK
                if (response.status !== 200) {
                    throw new Error('Failed to fetch journal data');
                }
                const data = response.data; // Axios automatically parses JSON response
                setJournalData(data); // Update state with fetched journal data
            } catch (error) {
                console.error('Error fetching journal data:', error);
                // If fetching fails, set journal data to an empty array
                setJournalData([]);
            }
        };

        fetchJournalData(); // Call the fetch function
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const projectsElement = document.getElementById("journals");
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
        <div id="journals" className="text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl pt-10">Journal</h1>
            <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
                {journalData.length > 0 ? (
                    journalData.map((post, index) => (
                        <JournalItem 
                            key={index}
                            img={post.img}
                            title={post.title}
                            tag={post.tag}
                            date={post.date.split('T')[0]}
                            slug={post.slug}
                        />
                    ))
                ) : (
                    <p className='pt-20'>No journals available</p>
                )}
            </div>
        </div>
    );
}

export default Journal;
