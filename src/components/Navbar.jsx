import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { HomeIcon, LightningBoltIcon, PencilIcon, UserCircleIcon, MailIcon } from '@heroicons/react/outline';

function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`fixed ${isSmallScreen ? 'bottom-0 left-0 w-full flex justify-center' : 'top-0 left-0 h-full flex justify-start items-center'} ml-2 mb-2`}>
      <div className={`flex flex-col justify-${isSmallScreen ? 'center' : 'start'} items-${isSmallScreen ? 'center' : 'start'} p-4 rounded-lg border border-gray-800`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>
        <nav className={`flex ${isSmallScreen ? 'gap-2' : 'flex-col gap-4'} md:flex-col md:justify-center`}>
          <div className="rounded-lg">
            <ul className="flex flex-row md:flex-col">
              <li>
                <Link to="/" className="flex items-center text-slate-300 hover:text-slate-500 active:text-white p-4 rounded-md">
                  <HomeIcon className="w-6 h-6" />

                </Link>
              </li>
              <li>
                <Link to="/projects" className="flex items-center text-slate-300 hover:text-slate-500 active:text-white p-4 rounded-md">
                  <LightningBoltIcon className="w-6 h-6" />

                </Link>
              </li>
              <li>
                <Link to="/journal" className="flex items-center text-slate-300 hover:text-slate-500 active:text-white p-4 rounded-md">
                  <PencilIcon className="w-6 h-6" />

                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center text-slate-300 hover:text-slate-500 active:text-white p-4 rounded-md">
                  <UserCircleIcon className="w-6 h-6" />

                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center text-slate-300 hover:text-slate-500 active:text-white p-4 rounded-md">
                  <MailIcon className="w-6 h-6" />

                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
