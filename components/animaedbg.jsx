'use client'
import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  // Ref for the animated gradient background
  const canvasRef = useRef(null);
  
  useEffect(() => {
    // Initialize gradient canvas
    if (canvasRef.current) {
      initGradientCanvas();
    }
    
    return () => {
      // Cleanup if needed
    };
  }, []);
  
  // Elegant wave-like background animation with gradient
  const initGradientCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Create gradient background
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(0.5, '#f5f5f5');
    gradient.addColorStop(1, '#fafafa');
    
    // Animation parameters
    let time = 0;
    const waveCount = 6;
    const dotCount = Math.floor(window.innerWidth / 30); // Dots per wave
    
    function animate() {
      // Clear canvas and fill with gradient
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw very subtle grid
      const gridSize = 50;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.lineWidth = 1;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw waves with dots
      for (let waveIndex = 0; waveIndex < waveCount; waveIndex++) {
        const waveHeight = canvas.height / (waveCount + 1) * (waveIndex + 1);
        const amplitude = 40;
        const frequency = 0.01;
        const phaseShift = time * 0.5 + waveIndex * Math.PI / 4;
        
        // Draw connecting line (very subtle)
        ctx.beginPath();
        ctx.moveTo(0, waveHeight);
        
        for (let x = 0; x < canvas.width; x += 2) {
          const y = waveHeight + Math.sin(x * frequency + phaseShift) * amplitude;
          ctx.lineTo(x, y);
        }
        
        // Create gradient for the wave lines
        const waveGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        waveGradient.addColorStop(0, 'rgba(0, 0, 0, 0.01)');
        waveGradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.04)');
        waveGradient.addColorStop(1, 'rgba(0, 0, 0, 0.01)');
        
        ctx.strokeStyle = waveGradient;
        ctx.stroke();
        
        // Draw dots on the wave
        for (let i = 0; i < dotCount; i++) {
          const x = (canvas.width / (dotCount - 1)) * i;
          const y = waveHeight + Math.sin(x * frequency + phaseShift) * amplitude;
          
          // Draw main dot
          const dotSize = (i % 3 === 0) ? 2.5 : 1.5;
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          
          // Add gradient to dots - darker in the middle of the screen
          const opacity = 0.1 + (0.1 * Math.sin((x / canvas.width) * Math.PI));
          ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
          ctx.fill();
          
          // Sometimes draw connector lines between dots
          if (i > 0 && i % 4 === 0) {
            const prevX = (canvas.width / (dotCount - 1)) * (i - 1);
            const prevY = waveHeight + Math.sin(prevX * frequency + phaseShift) * amplitude;
            
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.stroke();
          }
        }
      }
      
      // Draw a few floating isolated dots with gradient opacity
      for (let i = 0; i < 30; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 1.5 + 0.5;
        
        // Calculate opacity based on position for gradient effect
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const distFromCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        const maxDist = Math.sqrt(Math.pow(canvas.width/2, 2) + Math.pow(canvas.height/2, 2));
        const opacity = 0.05 + (0.05 * (1 - distFromCenter/maxDist));
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
        ctx.fill();
      }
      
      // Update time for animation
      time += 0.01;
      
      requestAnimationFrame(animate);
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Update gradient on resize
      gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(0.5, '#f5f5f5');
      gradient.addColorStop(1, '#fafafa');
    });
    
    animate();
  };

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full -z-10"
    ></canvas>
  );
};

export default AnimatedBackground;