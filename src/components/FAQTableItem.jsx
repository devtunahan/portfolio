import React from 'react';

function FAQTableItem({ letter, text, arrow }) {
  return (
       <div 
       className='flex flex-row space-x-6 text-white 
       text-sm md:text-md p-6 mb-3 rounded-lg border 
       border-gray-800 w-96 md:w-[650px] hover:text-gray-300'>
      <div className='flex-none'>{letter}</div>
      <div className='flex-auto'>{text}</div>
      <div className='flex-none'>{arrow}</div>
    </div>
  );
}

export default FAQTableItem;
