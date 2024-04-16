import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Project({ img, title, subtitle, description, github, demo }) {
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
                    <img src={img}
                        className="h-auto w-full rounded-lg" alt="Project Image" />
                    <h2 className='text-xl text-white mt-2'>{title}</h2>
                </div>
            ) : (
                // Desktop view
                <motion.div
                    className='flex flex-row pt-20'
                    variants={desktopVariant}
                >
                    <div className='md:w-64 md:mr-8 text-white hover:opacity-90'>
                        <motion.img
                            src={img}
                            className="h-auto w-full rounded-lg"
                            alt="Project Image"
                            whileHover={{ scale: 2.1 }}
                            transition={{ duration: 0.2 }}
                        />
                    </div>
                    <div className='text-white'>
                        <h2 className='text-xl'>{title}</h2>
                        <h2 className='text-md text-gray-500 mt-1 hidden md:block'>{subtitle}</h2>
                        <p className='text-sm w-96 mt-2 hidden md:block'>{description}</p>
                        <div className='pt-4 hidden md:block'>
                            {github && (
                                <a href={github} className='mr-20'>Github</a>
                            )}
                            {demo && (
                                <a href={demo}>Demo</a>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.div>
    )
}

export default Project;
