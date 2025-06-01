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
  
  // Elegant wave-like background animation with dark gradient
  const initGradientCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Create dark gradient background
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#0a0a0a');
    gradient.addColorStop(0.3, '#1a1a1a');
    gradient.addColorStop(0.7, '#0f0f0f');
    gradient.addColorStop(1, '#000000');
    
    // Animation parameters
    let time = 0;
    const waveCount = 6;
    const dotCount = Math.floor(window.innerWidth / 30); // Dots per wave
    
    // Blue gradient circles parameters
    const blueCircles = [
      { x: 0.2, y: 0.3, size: 0.4, speed: 0.002, phase: 0 },
      { x: 0.7, y: 0.2, size: 0.3, speed: 0.003, phase: Math.PI },
      { x: 0.8, y: 0.7, size: 0.35, speed: 0.0025, phase: Math.PI / 2 },
      { x: 0.1, y: 0.8, size: 0.25, speed: 0.004, phase: Math.PI * 1.5 },
      { x: 0.5, y: 0.5, size: 0.2, speed: 0.0015, phase: Math.PI / 4 },
    ];
    
    // FIXED floating dots (NO MORE RANDOM REGENERATION!)
    const floatingDots = [];
    for (let i = 0; i < 30; i++) {
      floatingDots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: 0.15 + Math.random() * 0.15
      });
    }
    
    // FIXED blue accent particles (NO MORE RANDOM REGENERATION!)
    const blueParticles = [];
    for (let i = 0; i < 15; i++) {
      blueParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        intensity: 0.4
      });
    }
    
    function animate() {
      // Clear canvas and fill with dark gradient
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw blue gradient circles (NO BLINKING!)
      blueCircles.forEach((circle, index) => {
        // Calculate animated position
        const centerX = canvas.width * circle.x + Math.sin(time * circle.speed + circle.phase) * 50;
        const centerY = canvas.height * circle.y + Math.cos(time * circle.speed + circle.phase) * 30;
        const radius = Math.min(canvas.width, canvas.height) * circle.size;
        
        // Create blue gradient
        const blueGradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, radius
        );
        
        // FIXED intensity (NO MORE PULSING!)
        const intensity = 0.4; // Fixed value instead of pulsing
        
        blueGradient.addColorStop(0, `rgba(59, 130, 246, ${intensity * 0.6})`); // Bright blue center
        blueGradient.addColorStop(0.3, `rgba(59, 130, 246, ${intensity * 0.4})`); // Medium blue
        blueGradient.addColorStop(0.6, `rgba(59, 130, 246, ${intensity * 0.2})`); // Light blue
        blueGradient.addColorStop(1, 'rgba(59, 130, 246, 0)'); // Transparent edge
        
        // Draw the blue circle
        ctx.fillStyle = blueGradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw waves with dots (keeping existing wave animation)
      for (let waveIndex = 0; waveIndex < waveCount; waveIndex++) {
        const waveHeight = canvas.height / (waveCount + 1) * (waveIndex + 1);
        const amplitude = 40;
        const frequency = 0.01;
        const phaseShift = time * 0.5 + waveIndex * Math.PI / 4;
        
        // Draw connecting line - more visible now
        ctx.beginPath();
        ctx.moveTo(0, waveHeight);
        
        for (let x = 0; x < canvas.width; x += 2) {
          const y = waveHeight + Math.sin(x * frequency + phaseShift) * amplitude;
          ctx.lineTo(x, y);
        }
        
        // Create gradient for the wave lines - more visible
        const waveGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        waveGradient.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
        waveGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.15)');
        waveGradient.addColorStop(1, 'rgba(255, 255, 255, 0.05)');
        
        ctx.strokeStyle = waveGradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        // Draw dots on the wave
        for (let i = 0; i < dotCount; i++) {
          const x = (canvas.width / (dotCount - 1)) * i;
          const y = waveHeight + Math.sin(x * frequency + phaseShift) * amplitude;
          
          // Draw main dot
          const dotSize = (i % 3 === 0) ? 2.5 : 1.5;
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          
          // Add gradient to dots - more visible
          const opacity = 0.25 + (0.25 * Math.sin((x / canvas.width) * Math.PI));
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fill();
          
          // Sometimes draw connector lines between dots
          if (i > 0 && i % 4 === 0) {
            const prevX = (canvas.width / (dotCount - 1)) * (i - 1);
            const prevY = waveHeight + Math.sin(prevX * frequency + phaseShift) * amplitude;
            
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      
      // Draw FIXED floating dots (NO MORE BLINKING!)
      floatingDots.forEach(dot => {
        // Update position smoothly
        dot.x += dot.speedX;
        dot.y += dot.speedY;
        
        // Wrap around screen edges
        if (dot.x < 0) dot.x = canvas.width;
        if (dot.x > canvas.width) dot.x = 0;
        if (dot.y < 0) dot.y = canvas.height;
        if (dot.y > canvas.height) dot.y = 0;
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`;
        ctx.fill();
      });
      
      // Draw FIXED blue accent particles (NO MORE BLINKING!)
      blueParticles.forEach(particle => {
        // Update position smoothly
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around screen edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Create small blue glow
        const smallBlueGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0, 
          particle.x, particle.y, particle.size * 3
        );
        smallBlueGradient.addColorStop(0, `rgba(59, 130, 246, ${particle.intensity * 0.4})`);
        smallBlueGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        
        ctx.fillStyle = smallBlueGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw the core particle
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.intensity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
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
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(0.3, '#1a1a1a');
      gradient.addColorStop(0.7, '#0f0f0f');
      gradient.addColorStop(1, '#000000');
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