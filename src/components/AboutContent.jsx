import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiDatabase, HiSparkles, HiDesktopComputer, HiClipboardCheck, HiColorSwatch, HiCog, HiGlobeAlt, HiCubeTransparent } from 'react-icons/hi';

function AboutContent() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div
            className='flex flex-col justify-center items-center text-center pb-10'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className='text-left max-w-full md:max-w-2xl px-4'>
                <p className=' md:pt-10 text-sm md:text-base'>I'm passionate about creating innovative solutions and delivering high-quality software. With a strong background in software development and testing, I bring expertise in various technologies and methodologies to every project.</p>
                <p className='pt-5 md:pt-10 text-sm md:text-base'>My goal is to leverage my skills and experience to contribute to impactful projects and collaborate with talented teams. Feel free to explore my portfolio and get in touch!</p>

                <h2 className='text-lg font-bold mt-8'>Technologies I Work With</h2>
                <ul className='divide-y divide-gray-300'>
                    <li className="py-2">
                        <span className="text-gray-700 font-semibold"><HiCode className="inline mr-2" /> Programming Languages:</span> C, Java, C#, SQL, JavaScript
                    </li>
                    <li className="py-2">
                        <span className="text-gray-700 font-semibold"><HiDatabase className="inline mr-2" /> Databases:</span> MongoDB, Microsoft SQL Server
                    </li>
                    <li className="py-2">
                        <span className="text-gray-700 font-semibold"><HiSparkles className="inline mr-2" /> Frameworks/Libraries:</span> React, Node.js, Vue.js, JavaFX
                    </li>
                    <li className="py-2">
                        <span className="text-gray-700 font-semibold"><HiDesktopComputer className="inline mr-2" /> Development Tools:</span> Visual Studio Code, Intellij IDEA Ultimate, XCode
                    </li>
                    <li className="py-2">
                        <span className="text-gray-700 font-semibold"><HiCog className="inline mr-2" /> Version Control:</span> Git, GitKraken
                    </li>
                    <li className="py-2">
                        <span className="text-gray-700 font-semibold"><HiClipboardCheck className="inline mr-2" /> Project Management:</span> SCRUM, Jira, Confluence
                    </li>
                    <li className="py-2">
                        <span className="text-gray-700 font-semibold"><HiColorSwatch className="inline mr-2" /> Design Tools:</span> Adobe Creative Cloud (Premiere Pro, Illustrator, Photoshop)
                    </li>
                    <li className="py-2">
                        <span className="text-gray-700 font-semibold"><HiGlobeAlt className="inline mr-2" /> Networking:</span> CCNA Routing & Switching, Packet Tracer, Wireshark
                    </li>
                    <li className="py-2">
                        <span className="text-gray-700 font-semibold"><HiCubeTransparent className="inline mr-2" /> Others:</span> Docker, Jenkins, Raspberry Pi
                    </li>
                </ul>
            </div>
        </motion.div>
    );
}

export default AboutContent;
