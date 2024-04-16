// AnimatedBackground.js
import React, { useState, useEffect } from 'react';

const AnimatedBackground = () => {
  const [backgroundPosition, setBackgroundPosition] = useState({ x: -19, y: -19 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.pageX;
      const mouseY = e.pageY;
      
      const offsetX = mouseX / window.innerWidth;
      const offsetY = mouseY / window.innerHeight;
      
      const backgroundX = -19 + offsetX * 40;
      const backgroundY = -19 + offsetY * 40;
      
      setBackgroundPosition({ x: backgroundX, y: backgroundY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="background-container">
      <div
        className="animated-background"
        style={{
          backgroundPosition: `${backgroundPosition.x}px ${backgroundPosition.y}px`
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
