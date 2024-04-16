import React, { useEffect, useState } from 'react';

const RustlingText = ({ text, speed, styling }) => {
  const [output, setOutput] = useState('');
  const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-"; //You can customize what letters it will cycle through
  const increment = 8; // frames per step. Must be >2
  let si = 0;
  let stri = 0;
  let block = "";
  let fixed = "";

  useEffect(() => {
    const interval = setInterval(() => {
      nextFrame();
      si++;
    }, speed);

    return () => clearInterval(interval);
  }, []);

  const nextFrame = () => {
    for (let i = 0; i < text.length - stri; i++) {
      //Random number
      const num = Math.floor(theLetters.length * Math.random());
      //Get random letter
      const letter = theLetters.charAt(num);
      block = block + letter;
    }
    if (si === (increment - 1)) {
      stri++;
    }
    if (si === increment) {
      // Add a letter; 
      // every speed*10 ms
      fixed = fixed + text.charAt(stri - 1);
      si = 0;
    }
    setOutput(fixed + block);
    block = "";
  };

  return <h1 className={styling}>{output}</h1>;
};

export default RustlingText;
