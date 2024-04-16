import React, { useState, useEffect } from 'react';
import FAQTableItem from './FAQTableItem';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';
import { Link } from "react-router-dom";


function FAQTable() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // When the component mounts, set the fadeIn state to true after a brief delay
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    // Clear the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`justify-center items-center flex flex-col pt-20 fade-in`} style={{ opacity: fadeIn ? 1 : 0 }}>
        <Link to="/projects">
            <FAQTableItem letter="A" text="I heard you design & build digital products!" arrow={<ArrowNarrowRightIcon className='w-5 h-5'/>} />
        </Link>
        <Link to="/journal">
      <FAQTableItem letter="B" text="You have a personal journal?" arrow={<ArrowNarrowRightIcon className='w-5 h-5'/>} />
      </Link>
      <Link  to="/contact">
      <FAQTableItem letter="C" text="Tunahan, who?" arrow={<ArrowNarrowRightIcon className='w-5 h-5'/>} />
      </Link>
    </div>
  );
}

export default FAQTable;
