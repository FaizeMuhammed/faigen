'use client'
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Database, 
  Zap, 
  Shield, 
  Code,
  Server,
  Cloud,
  Cpu,
  Wifi,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  Layers,
  Activity
} from "lucide-react";

// Stunning 2D Canvas Geometric Animation
const TechVisualization = () => {
  const [currentFormation, setCurrentFormation] = useState(0);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [complexity, setComplexity] = useState(6);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  // Tech formation themes
  const formations = [
    {
      name: 'Neural Network',
      icon: Cpu,
      color: ['#667eea', '#764ba2'],
      description: 'AI processing networks',
      pattern: 'neural'
    },
    {
      name: 'Data Flow',
      icon: Activity,
      color: ['#f093fb', '#f5576c'],
      description: 'Real-time data streams',
      pattern: 'flow'
    },
    {
      name: 'Cloud Network',
      icon: Cloud,
      color: ['#4facfe', '#00f2fe'],
      description: 'Distributed infrastructure',
      pattern: 'cloud'
    },
    {
      name: 'Security Grid',
      icon: Shield,
      color: ['#ff9a9e', '#fecfef'],
      description: 'Protection layers',
      pattern: 'security'
    },
    {
      name: 'Server Matrix',
      icon: Server,
      color: ['#a8edea', '#fed6e3'],
      description: 'Processing power',
      pattern: 'matrix'
    },
    {
      name: 'API Gateway',
      icon: Code,
      color: ['#ffecd2', '#fcb69f'],
      description: 'Service connections',
      pattern: 'gateway'
    }
  ];

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-transition between formations
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimationPaused) {
        setCurrentFormation(prev => (prev + 1) % formations.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAnimationPaused]);

  // Get responsive canvas size
  const getCanvasSize = () => {
    if (isFullscreen && windowSize.width > 0) {
      return {
        width: Math.min(windowSize.width * 0.9, 1400),
        height: Math.min(windowSize.height * 0.85, 1000)
      };
    }

    if (windowSize.width >= 1280) {
      return { width: 700, height: 500 };
    } else if (windowSize.width >= 1024) {
      return { width: 600, height: 450 };
    } else if (windowSize.width >= 768) {
      return { width: 500, height: 380 };
    } else {
      return { width: Math.min(windowSize.width - 40, 420), height: 320 };
    }
  };

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!canvasRef.current) return;
      
      const rect = canvasRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height
      };
    };

    if (canvasRef.current) {
      canvasRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Main canvas animation
  useEffect(() => {
    if (!canvasRef.current || !windowSize.width) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const canvasSize = getCanvasSize();
    
    // Set canvas size
    canvas.width = canvasSize.width * window.devicePixelRatio;
    canvas.height = canvasSize.height * window.devicePixelRatio;
    canvas.style.width = canvasSize.width + 'px';
    canvas.style.height = canvasSize.height + 'px';
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const centerX = canvasSize.width / 2;
    const centerY = canvasSize.height / 2;
    const maxRadius = Math.min(canvasSize.width, canvasSize.height) * 0.4;

    // Create gradient
    const createGradient = (colors) => {
      const gradient = ctx.createLinearGradient(0, 0, canvasSize.width, canvasSize.height);
      gradient.addColorStop(0, colors[0]);
      gradient.addColorStop(1, colors[1]);
      return gradient;
    };

    // Neural Network Pattern
    const drawNeural = (time, mouseX, mouseY) => {
      const nodes = complexity * 8;
      const connections = [];
      const nodePositions = [];

      // Generate nodes
      for (let i = 0; i < nodes; i++) {
        const angle = (i / nodes) * Math.PI * 2;
        const layer = Math.floor(i / (nodes / 4)) + 1;
        const radius = (maxRadius / 4) * layer + Math.sin(time * 0.002 + i) * 20;
        const x = centerX + Math.cos(angle + time * 0.001) * radius;
        const y = centerY + Math.sin(angle + time * 0.001) * radius;
        
        nodePositions.push({ x, y, layer });
      }

      // Draw connections
      ctx.strokeStyle = formations[currentFormation].color[0] + '40';
      ctx.lineWidth = 1;
      for (let i = 0; i < nodePositions.length; i++) {
        for (let j = i + 1; j < nodePositions.length; j++) {
          const dist = Math.hypot(nodePositions[i].x - nodePositions[j].x, nodePositions[i].y - nodePositions[j].y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(nodePositions[i].x, nodePositions[i].y);
            ctx.lineTo(nodePositions[j].x, nodePositions[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodePositions.forEach((node, i) => {
        const pulse = Math.sin(time * 0.005 + i * 0.1) * 0.5 + 0.5;
        ctx.fillStyle = formations[currentFormation].color[0];
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3 + pulse * 2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Data Flow Pattern
    const drawFlow = (time, mouseX, mouseY) => {
      const streams = complexity;
      for (let s = 0; s < streams; s++) {
        const streamAngle = (s / streams) * Math.PI * 2;
        const particles = 20;
        
        for (let p = 0; p < particles; p++) {
          const progress = (p / particles + time * 0.001) % 1;
          const radius = progress * maxRadius;
          const angle = streamAngle + progress * Math.PI * 4;
          
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          
          const size = Math.sin(progress * Math.PI) * 4 + 2;
          const alpha = Math.sin(progress * Math.PI);
          
          ctx.fillStyle = formations[currentFormation].color[1] + Math.floor(alpha * 255).toString(16).padStart(2, '0');
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    // Cloud Network Pattern
    const drawCloud = (time, mouseX, mouseY) => {
      const clusters = complexity;
      for (let c = 0; c < clusters; c++) {
        const clusterAngle = (c / clusters) * Math.PI * 2;
        const clusterRadius = maxRadius * 0.7;
        const clusterX = centerX + Math.cos(clusterAngle + time * 0.0005) * clusterRadius;
        const clusterY = centerY + Math.sin(clusterAngle + time * 0.0005) * clusterRadius;
        
        // Draw cluster
        const nodes = 8;
        for (let n = 0; n < nodes; n++) {
          const nodeAngle = (n / nodes) * Math.PI * 2 + time * 0.002;
          const nodeRadius = 30 + Math.sin(time * 0.003 + n) * 10;
          const x = clusterX + Math.cos(nodeAngle) * nodeRadius;
          const y = clusterY + Math.sin(nodeAngle) * nodeRadius;
          
          const size = 2 + Math.sin(time * 0.004 + n) * 1;
          ctx.fillStyle = formations[currentFormation].color[0];
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw cluster center
        ctx.fillStyle = formations[currentFormation].color[1];
        ctx.beginPath();
        ctx.arc(clusterX, clusterY, 6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Security Grid Pattern
    const drawSecurity = (time, mouseX, mouseY) => {
      const gridSize = complexity + 2;
      const spacing = maxRadius * 2 / gridSize;
      const startX = centerX - maxRadius;
      const startY = centerY - maxRadius;

      for (let x = 0; x <= gridSize; x++) {
        for (let y = 0; y <= gridSize; y++) {
          const posX = startX + x * spacing;
          const posY = startY + y * spacing;
          
          const wave = Math.sin(time * 0.002 + x * 0.3 + y * 0.3) * 0.5 + 0.5;
          const size = 2 + wave * 3;
          
          ctx.fillStyle = formations[currentFormation].color[0] + Math.floor(wave * 255).toString(16).padStart(2, '0');
          ctx.beginPath();
          ctx.arc(posX, posY, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw connecting lines
      ctx.strokeStyle = formations[currentFormation].color[1] + '20';
      ctx.lineWidth = 1;
      for (let x = 0; x < gridSize; x++) {
        ctx.beginPath();
        ctx.moveTo(startX + x * spacing, startY);
        ctx.lineTo(startX + x * spacing, startY + gridSize * spacing);
        ctx.stroke();
      }
      for (let y = 0; y < gridSize; y++) {
        ctx.beginPath();
        ctx.moveTo(startX, startY + y * spacing);
        ctx.lineTo(startX + gridSize * spacing, startY + y * spacing);
        ctx.stroke();
      }
    };

    // Server Matrix Pattern
    const drawMatrix = (time, mouseX, mouseY) => {
      const towers = complexity;
      for (let t = 0; t < towers; t++) {
        const angle = (t / towers) * Math.PI * 2;
        const radius = maxRadius * 0.6;
        const x = centerX + Math.cos(angle) * radius;
        const levels = 10;
        
        for (let l = 0; l < levels; l++) {
          const y = centerY - maxRadius * 0.5 + (l / levels) * maxRadius;
          const activity = Math.sin(time * 0.003 + t + l * 0.5) * 0.5 + 0.5;
          const size = 3 + activity * 2;
          
          ctx.fillStyle = formations[currentFormation].color[activity > 0.5 ? 1 : 0];
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    // API Gateway Pattern
    const drawGateway = (time, mouseX, mouseY) => {
      // Central hub
      ctx.fillStyle = formations[currentFormation].color[1];
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
      ctx.fill();

      const endpoints = complexity * 4;
      for (let e = 0; e < endpoints; e++) {
        const angle = (e / endpoints) * Math.PI * 2 + time * 0.001;
        const distance = maxRadius * (0.3 + (e % 3) * 0.2);
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        // Draw connection line
        ctx.strokeStyle = formations[currentFormation].color[0] + '60';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        // Draw endpoint
        const pulse = Math.sin(time * 0.004 + e) * 0.5 + 0.5;
        ctx.fillStyle = formations[currentFormation].color[0];
        ctx.beginPath();
        ctx.arc(x, y, 3 + pulse * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Animation loop
    const animate = () => {
      if (!isAnimationPaused) {
        timeRef.current += 16;
      }
      
      const time = timeRef.current;
      const mouseX = mouseRef.current.x * canvasSize.width;
      const mouseY = mouseRef.current.y * canvasSize.height;

      // Clear canvas with gradient background
      const gradient = createGradient(formations[currentFormation].color);
      ctx.fillStyle = gradient;
      ctx.globalAlpha = 0.1;
      ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
      ctx.globalAlpha = 1;

      // Clear with transparency for trail effect
      ctx.fillStyle = 'rgba(248, 250, 252, 0.1)';
      ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);

      // Draw current pattern
      switch (formations[currentFormation].pattern) {
        case 'neural':
          drawNeural(time, mouseX, mouseY);
          break;
        case 'flow':
          drawFlow(time, mouseX, mouseY);
          break;
        case 'cloud':
          drawCloud(time, mouseX, mouseY);
          break;
        case 'security':
          drawSecurity(time, mouseX, mouseY);
          break;
        case 'matrix':
          drawMatrix(time, mouseX, mouseY);
          break;
        case 'gateway':
          drawGateway(time, mouseX, mouseY);
          break;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentFormation, isAnimationPaused, complexity, windowSize, isFullscreen]);

  const canvasSize = getCanvasSize();

  return (
    <div className="relative w-full h-full">
      {/* Enhanced Control Panel */}
      <motion.div
        className="absolute top-4 right-4 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-gray-200/50 shadow-xl">
          <div className="flex items-center justify-between space-x-3 mb-3">
            <div>
              <h3 className="text-base font-bold text-gray-800">Tech Visualization</h3>
              <p className="text-xs text-gray-600">
                {formations[currentFormation]?.name}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsAnimationPaused(!isAnimationPaused)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                title={isAnimationPaused ? "Play Animation" : "Pause Animation"}
              >
                {isAnimationPaused ? 
                  <Play className="w-4 h-4 text-gray-600 group-hover:text-green-600" /> : 
                  <Pause className="w-4 h-4 text-gray-600 group-hover:text-orange-600" />
                }
              </button>
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              >
                {isFullscreen ? 
                  <Minimize2 className="w-4 h-4 text-gray-600 group-hover:text-purple-600" /> :
                  <Maximize2 className="w-4 h-4 text-gray-600 group-hover:text-purple-600" />
                }
              </button>
            </div>
          </div>
          
          {/* Formation Selector */}
          <div className="grid grid-cols-3 gap-1 mb-3">
            {formations.map((formation, index) => (
              <button
                key={index}
                onClick={() => setCurrentFormation(index)}
                className={`p-2 rounded-lg text-xs font-medium transition-all ${
                  currentFormation === index
                    ? 'text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ 
                  background: currentFormation === index 
                    ? `linear-gradient(45deg, ${formation.color[0]}, ${formation.color[1]})` 
                    : undefined
                }}
              >
                <formation.icon className="w-3 h-3 mx-auto mb-1" />
                <div className="text-xs">{formation.name.split(' ')[0]}</div>
              </button>
            ))}
          </div>
          
          {/* Complexity Slider */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-700">
              Complexity: {complexity}
            </label>
            <input
              type="range"
              min="3"
              max="12"
              step="1"
              value={complexity}
              onChange={(e) => setComplexity(parseInt(e.target.value))}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </motion.div>

      {/* Formation Info Panel */}
      <motion.div
        className="absolute bottom-4 left-4 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-gray-200/50 shadow-xl">
          <div className="flex items-center space-x-3">
            <div 
              className="p-3 rounded-xl"
              style={{ 
                background: `linear-gradient(45deg, ${formations[currentFormation]?.color[0]}20, ${formations[currentFormation]?.color[1]}20)`,
                color: formations[currentFormation]?.color[0]
              }}
            >
              {React.createElement(formations[currentFormation]?.icon || Cloud, { 
                className: "w-6 h-6" 
              })}
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800">
                {formations[currentFormation]?.name}
              </h4>
              <p className="text-sm text-gray-600">
                {formations[currentFormation]?.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Canvas Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div 
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          style={{ 
            width: canvasSize.width,
            height: canvasSize.height,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        >
          <canvas 
            ref={canvasRef}
            className="w-full h-full cursor-crosshair"
            style={{ 
              width: canvasSize.width,
              height: canvasSize.height
            }}
          />
          
          {/* Overlay gradient for better aesthetics */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, transparent 0%, ${formations[currentFormation]?.color[0]}10 100%)`
            }}
          />
        </div>
      </div>

      {/* Interaction Hint */}
      <motion.div
        className="absolute bottom-4 right-4 z-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-gray-200/50 shadow-lg">
          <div className="flex items-center space-x-2">
            <Layers className="w-4 h-4 text-blue-500 animate-pulse" />
            <div className="text-sm text-gray-700">
              <div className="font-semibold">Interactive Visualization</div>
              <div className="text-xs">Move mouse • Auto transitions</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Main Home Section Component
const HomeSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const textVariants = ["Future-ready solutions.", "Human-first design.", "Scalable technology."];
  
  // Services that rotate
  const services = [
    { icon: Globe, title: "Web Applications", desc: "Modern & responsive", color: "text-blue-600" },
    { icon: Database, title: "Mobile Apps", desc: "iOS & Android", color: "text-green-600" },
    { icon: Database, title: "Database Solutions", desc: "Scalable & secure", color: "text-purple-600" },
    { icon: Code, title: "API Development", desc: "RESTful & GraphQL", color: "text-orange-600" },
    { icon: Cloud, title: "Cloud Infrastructure", desc: "AWS & Azure", color: "text-cyan-600" },
    { icon: Shield, title: "Security", desc: "Enterprise-grade", color: "text-red-600" }
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textVariants.length);
    }, 3000);
    
    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 2500);
    
    return () => clearInterval(serviceInterval);
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15
      }
    }
  };

  const menuItems = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-50/40 via-white to-blue-50/30">
      {/* Background Elements with Enhanced Sky Blue Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-white to-blue-50/20"></div>
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-sky-400/15 to-blue-500/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/12 to-sky-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-sky-100/25 to-transparent"></div>
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Top Left Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50"
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-200 shadow-lg p-2 md:p-3 hover:scale-105 transition-transform duration-200">
          <div className="h-10 md:h-14 lg:h-16 w-10 md:w-14 lg:w-16 bg-black rounded-lg flex items-center justify-center text-white font-bold text-lg">F</div>
        </div>
      </motion.div>

      {/* Corner Navigation Menu */}
      <div className="fixed top-6 right-6 z-50">
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative w-14 h-14 bg-black/90 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            className="w-5 h-5 relative"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 5 }
              }}
              className="absolute top-0 left-0 w-full h-0.5 bg-white rounded-full transform origin-center"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              className="absolute top-2.5 left-0 w-full h-0.5 bg-white rounded-full"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -5 }
              }}
              className="absolute top-5 left-0 w-full h-0.5 bg-white rounded-full transform origin-center"
            />
          </motion.div>
        </motion.button>

        {/* Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, originX: 1, originY: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 right-0 w-64 bg-black/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-white font-semibold text-base mb-2">Navigation</h3>
                  <div className="w-10 h-0.5 bg-white/30 rounded-full"></div>
                </div>
                
                <nav className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="block text-white/80 hover:text-white font-medium py-2.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-200"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    className="w-full py-2.5 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition-colors duration-200"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Start Project
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
        <div className="max-w-8xl mx-auto w-full">
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="order-1 lg:order-1 lg:col-span-2 space-y-4 sm:space-y-6"
            >
              {/* Brand Badge */}
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-black/5 rounded-full border border-black/10"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-black/70">Available for new projects</span>
              </motion.div>
              
              {/* Main Headline */}
              <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight font-space-grotesk">
                  <span className="block text-black">We Build</span>
                  <span className="block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-black">
                      Digital
                    </span>
                  </span>
                  <span className="block text-black">Powerhouses</span>
                </h1>
              </motion.div>
              
              {/* Dynamic Subheading */}
              <motion.div variants={itemVariants} className="h-8 sm:h-10 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={currentTextIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black/70 font-inter"
                  >
                    {textVariants[currentTextIndex]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
              
              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-lg lg:text-xl text-black/60 leading-relaxed max-w-2xl font-inter"
              >
                From startups to enterprises, Faigen crafts seamless, secure, and scalable 
                digital products with precision and purpose. We transform ideas into 
                digital experiences that drive growth.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
              >
                <motion.button
                  onClick={() => console.log('Consultation clicked')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 sm:px-6 py-3 bg-black text-white rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  Get a Free Consultation
                </motion.button>
                
                <motion.button
                  onClick={scrollToPortfolio}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 sm:px-6 py-3 border-2 border-black/20 hover:border-black/40 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 hover:bg-black/5 w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>See Our Work</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Right Visual - Stunning 2D Canvas Animation */}
            <motion.div 
              className="order-2 lg:order-2 lg:col-span-3 relative flex items-center justify-center overflow-visible"
              style={{ 
                height: '600px',
                minHeight: '500px'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <TechVisualization />
            </motion.div>
          </div>
        </div>
      </main>
      
      {/* Enhanced Styles */}
      <style jsx global>{`
        .font-space-grotesk {
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }
        
        .font-inter {
          font-family: 'Inter', system-ui, sans-serif;
        }

        @media (max-width: 640px) {
          .max-w-8xl {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeSection;