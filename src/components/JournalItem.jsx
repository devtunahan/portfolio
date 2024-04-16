import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function JournalItem({ img, title, tag, date, slug }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust threshold as needed
        };

        // Set initial state on component mount
        handleResize();

        // Add event listener to update state on window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const desktopVariant = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            className='mt-8 px-4'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {isMobile ? (
                // Mobile view
                <div className="p-4">
                    <Link to={`/journal/${slug}`} className="journal-item-link">
                        <img src={img} className="h-auto w-full rounded-lg" alt="Project Image" />
                        <h2 className='text-xl text-white mt-2'>{title}</h2>
                        <div className='text-sm flex-row text-gray-500 mt-1 block'>
                            <h2>{tag} • {date}</h2>
                        </div>
                    </Link>
                </div>
            ) : (
                // Desktop view
                <motion.div
                    className='flex flex-col pt-10 ml-16' // Add ml-16 class for margin-left
                    variants={desktopVariant}
                >
                    <div className='text-white flex flex-col justify-center items-center'>
                        <div className="w-full md:w-2/4 rounded-lg hover:opacity-90">
                            <Link to={`/journal/${slug}`} className="journal-item-link">
                                <img src={img} className="h-auto w-full rounded-lg" alt="Project Image" />
                            </Link>
                        </div>
                        <div className='text-white w-full md:w-2/4'>
                            <Link to={`/journal/${slug}`} className="journal-item-link">
                                <h2 className='text-xl pt-4'>{title}</h2>
                            </Link>
                            <div className='text-sm flex-row text-gray-500 mt-1 hidden md:block'>
                                <h2>{tag} • {date}</h2>
                            </div>
                        </div>
                    </div>
                </motion.div >
            )}
        </motion.div >
    )
}

export default JournalItem;
