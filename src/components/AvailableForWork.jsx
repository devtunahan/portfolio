import React from 'react';
import RustlingText from './RustlingText';

const AvailableForWork = () => {
  return (
    <div className="flex items-center mb-5">
      <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
      <RustlingText text="Available for work" speed={5} styling="text-green-500" />
    </div>
  );
};

export default AvailableForWork;