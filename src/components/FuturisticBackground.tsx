
import React, { useEffect, useRef } from 'react';

const FuturisticBackground: React.FC = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!starsRef.current) return;
    
    // Clear any existing stars
    starsRef.current.innerHTML = '';
    
    // Create stars
    const starCount = 150;
    const container = starsRef.current;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random size between 1-3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration and delay
      star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
      star.style.setProperty('--delay', `${Math.random() * 5}s`);
      star.style.setProperty('--opacity', `${Math.random() * 0.7 + 0.3}`);
      
      container.appendChild(star);
    }
    
    // Create neon lines that sweep across the screen
    const createNeonLines = () => {
      const linesCount = 5;
      
      for (let i = 0; i < linesCount; i++) {
        setTimeout(() => {
          if (!starsRef.current) return;
          
          const line = document.createElement('div');
          line.classList.add('neon-line');
          
          // Set random width and position
          line.style.width = `${Math.random() * 50 + 50}%`;
          line.style.left = `${Math.random() * 50}%`;
          line.style.opacity = `${Math.random() * 0.3 + 0.1}`;
          line.style.animationDuration = `${Math.random() * 6 + 5}s`;
          line.style.animationDelay = `${i * 1.5}s`;
          
          starsRef.current.appendChild(line);
          
          // Remove the line after animation completes
          setTimeout(() => {
            if (line && line.parentNode) {
              line.parentNode.removeChild(line);
            }
          }, 15000);
        }, i * 1500);
      }
    };
    
    // Initial creation of neon lines
    createNeonLines();
    
    // Periodically create new neon lines
    const neonInterval = setInterval(createNeonLines, 8000);
    
    return () => {
      clearInterval(neonInterval);
    };
  }, []);
  
  return (
    <div className="futuristic-bg">
      <div className="noise-overlay"></div>
      <div className="grid-overlay"></div>
      <div className="glow-blob glow-blob-1"></div>
      <div className="glow-blob glow-blob-2"></div>
      <div className="glow-blob glow-blob-3"></div>
      <div ref={starsRef} className="stars"></div>
    </div>
  );
};

export default FuturisticBackground;
