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

// Full Page Tech Background Component
const FullPageTechBackground = ({ 
  showControls = false, 
  opacity = 0.15, 
  speed = 1,
  autoTransition = true,
  initialFormation = 0 
}) => {
  const [currentFormation, setCurrentFormation] = useState(initialFormation);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [complexity, setComplexity] = useState(6);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const timeRef = useRef(0);

  // Tech formation themes - same as before
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
    if (!autoTransition) return;
    
    const interval = setInterval(() => {
      if (!isAnimationPaused) {
        setCurrentFormation(prev => (prev + 1) % formations.length);
      }
    }, 6000); // Slower transitions for background

    return () => clearInterval(interval);
  }, [isAnimationPaused, autoTransition]);

  // Mouse movement handler - more subtle for background
  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseRef.current = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Create gradient with stronger opacity and glow effects
  const createGradient = (ctx, colors, width, height) => {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, colors[0] + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
    gradient.addColorStop(1, colors[1] + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
    return gradient;
  };

  // Enhanced drawing functions with more vibrant colors and glow effects
  // Enhanced drawing functions with more vibrant colors and glow effects
  const drawNeural = (ctx, time, mouseX, mouseY, centerX, centerY, maxRadius) => {
    // Responsive node count based on screen size
    const isMobile = windowSize.width < 768;
    const baseNodes = isMobile ? complexity * 4 : complexity * 8;
    const connectionDistance = isMobile ? 80 : 120;
    const maxLayers = isMobile ? 3 : 4;
    
    const nodePositions = [];

    // Generate nodes with better mobile distribution
    for (let i = 0; i < baseNodes; i++) {
      const angle = (i / baseNodes) * Math.PI * 2;
      const layer = Math.floor(i / (baseNodes / maxLayers)) + 1;
      const layerRadius = isMobile ? 
        (maxRadius / maxLayers) * layer * 0.7 : 
        (maxRadius / 4) * layer;
      const radius = layerRadius + Math.sin(time * 0.002 + i) * (isMobile ? 10 : 20);
      const x = centerX + Math.cos(angle + time * 0.001) * radius;
      const y = centerY + Math.sin(angle + time * 0.001) * radius;
      
      nodePositions.push({ x, y, layer });
    }

    // Draw connections with glow - fewer connections on mobile
    ctx.shadowColor = formations[currentFormation].color[0];
    ctx.shadowBlur = isMobile ? 3 : 5;
    ctx.strokeStyle = formations[currentFormation].color[0] + Math.floor(opacity * (isMobile ? 140 : 180)).toString(16).padStart(2, '0');
    ctx.lineWidth = isMobile ? 1 : 1.5;
    
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = Math.hypot(nodePositions[i].x - nodePositions[j].x, nodePositions[i].y - nodePositions[j].y);
        if (dist < connectionDistance) {
          // Skip some connections on mobile for better performance
          if (isMobile && Math.random() > 0.6) continue;
          
          ctx.beginPath();
          ctx.moveTo(nodePositions[i].x, nodePositions[i].y);
          ctx.lineTo(nodePositions[j].x, nodePositions[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes with glow - smaller on mobile
    ctx.shadowBlur = isMobile ? 6 : 10;
    nodePositions.forEach((node, i) => {
      const pulse = Math.sin(time * 0.005 + i * 0.1) * 0.5 + 0.5;
      const nodeSize = isMobile ? 2 + pulse * 1.5 : 3 + pulse * 2;
      
      ctx.fillStyle = formations[currentFormation].color[1];
      ctx.shadowColor = formations[currentFormation].color[1];
      ctx.beginPath();
      ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.shadowBlur = 0;
  };
  const drawFlow = (ctx, time, mouseX, mouseY, centerX, centerY, maxRadius) => {
    const streams = complexity;
    ctx.shadowBlur = 8;
    for (let s = 0; s < streams; s++) {
      const streamAngle = (s / streams) * Math.PI * 2;
      const particles = 25;
      
      for (let p = 0; p < particles; p++) {
        const progress = (p / particles + time * 0.001) % 1;
        const radius = progress * maxRadius;
        const angle = streamAngle + progress * Math.PI * 4;
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        const size = Math.sin(progress * Math.PI) * 4 + 2;
        const alpha = Math.sin(progress * Math.PI) * opacity * 1.5;
        
        ctx.fillStyle = formations[currentFormation].color[1];
        ctx.shadowColor = formations[currentFormation].color[1];
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.shadowBlur = 0;
  };

  const drawCloud = (ctx, time, mouseX, mouseY, centerX, centerY, maxRadius) => {
    const clusters = complexity;
    ctx.shadowBlur = 6;
    for (let c = 0; c < clusters; c++) {
      const clusterAngle = (c / clusters) * Math.PI * 2;
      const clusterRadius = maxRadius * 0.7;
      const clusterX = centerX + Math.cos(clusterAngle + time * 0.0005) * clusterRadius;
      const clusterY = centerY + Math.sin(clusterAngle + time * 0.0005) * clusterRadius;
      
      // Draw cluster with enhanced visibility
      const nodes = 10;
      for (let n = 0; n < nodes; n++) {
        const nodeAngle = (n / nodes) * Math.PI * 2 + time * 0.002;
        const nodeRadius = 35 + Math.sin(time * 0.003 + n) * 15;
        const x = clusterX + Math.cos(nodeAngle) * nodeRadius;
        const y = clusterY + Math.sin(nodeAngle) * nodeRadius;
        
        const size = 2.5 + Math.sin(time * 0.004 + n) * 1;
        ctx.fillStyle = formations[currentFormation].color[0];
        ctx.shadowColor = formations[currentFormation].color[0];
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw cluster center with glow
      ctx.fillStyle = formations[currentFormation].color[1];
      ctx.shadowColor = formations[currentFormation].color[1];
      ctx.beginPath();
      ctx.arc(clusterX, clusterY, 6, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.shadowBlur = 0;
  };

  const drawSecurity = (ctx, time, mouseX, mouseY, centerX, centerY, maxRadius) => {
    const gridSize = complexity + 2;
    const spacing = maxRadius * 2 / gridSize;
    const startX = centerX - maxRadius;
    const startY = centerY - maxRadius;

    ctx.shadowBlur = 4;
    for (let x = 0; x <= gridSize; x++) {
      for (let y = 0; y <= gridSize; y++) {
        const posX = startX + x * spacing;
        const posY = startY + y * spacing;
        
        const wave = Math.sin(time * 0.002 + x * 0.3 + y * 0.3) * 0.5 + 0.5;
        const size = 2 + wave * 3;
        
        ctx.fillStyle = formations[currentFormation].color[0];
        ctx.shadowColor = formations[currentFormation].color[0];
        ctx.beginPath();
        ctx.arc(posX, posY, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Draw connecting lines with glow
    ctx.strokeStyle = formations[currentFormation].color[1] + Math.floor(opacity * 120).toString(16).padStart(2, '0');
    ctx.lineWidth = 1;
    ctx.shadowColor = formations[currentFormation].color[1];
    ctx.shadowBlur = 3;
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
    ctx.shadowBlur = 0;
  };

  const drawMatrix = (ctx, time, mouseX, mouseY, centerX, centerY, maxRadius) => {
    const towers = complexity;
    const servers = [];
    
    // Generate server positions and states
    for (let t = 0; t < towers; t++) {
      const angle = (t / towers) * Math.PI * 2;
      const radius = maxRadius * 0.6;
      const x = centerX + Math.cos(angle) * radius;
      const levels = 12;
      
      for (let l = 0; l < levels; l++) {
        const y = centerY - maxRadius * 0.6 + (l / levels) * maxRadius * 1.2;
        const activity = Math.sin(time * 0.003 + t * 0.5 + l * 0.3) * 0.5 + 0.5;
        const load = Math.sin(time * 0.002 + t + l) * 0.5 + 0.5;
        
        servers.push({ x, y, activity, load, tower: t, level: l });
      }
    }
    
    // Draw server connections with glow
    ctx.strokeStyle = formations[currentFormation].color[0] + Math.floor(opacity * 150).toString(16).padStart(2, '0');
    ctx.lineWidth = 1.5;
    ctx.shadowColor = formations[currentFormation].color[0];
    ctx.shadowBlur = 4;
    for (let i = 0; i < towers; i++) {
      const nextTower = (i + 1) % towers;
      const angle1 = (i / towers) * Math.PI * 2;
      const angle2 = (nextTower / towers) * Math.PI * 2;
      const radius = maxRadius * 0.6;
      
      const x1 = centerX + Math.cos(angle1) * radius;
      const x2 = centerX + Math.cos(angle2) * radius;
      const y1 = centerY;
      const y2 = centerY;
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    ctx.shadowBlur = 0;
    
    // Draw server racks with enhanced visibility
    ctx.shadowBlur = 6;
    servers.forEach((server, index) => {
      const { x, y, activity, load, tower, level } = server;
      
      // Server rack background with glow
      ctx.fillStyle = formations[currentFormation].color[0] + '40';
      ctx.fillRect(x - 10, y - 4, 20, 8);
      
      // Server status indicator with strong glow
      const statusSize = 2 + activity * 3;
      ctx.fillStyle = activity > 0.7 ? formations[currentFormation].color[1] : 
                     activity > 0.3 ? formations[currentFormation].color[0] : '#ff6666';
      ctx.shadowColor = ctx.fillStyle;
      ctx.beginPath();
      ctx.arc(x - 6, y, statusSize, 0, Math.PI * 2);
      ctx.fill();
      
      // CPU/Memory bars with glow
      const barWidth = load * 12;
      ctx.fillStyle = load > 0.8 ? '#ff4444' : load > 0.5 ? '#ffaa44' : '#44ff44';
      ctx.shadowColor = ctx.fillStyle;
      ctx.fillRect(x - 3, y - 2, barWidth, 4);
      
      // Network activity dots with enhanced glow
      for (let d = 0; d < 3; d++) {
        const dotActivity = Math.sin(time * 0.01 + index + d * 2) * 0.5 + 0.5;
        if (dotActivity > 0.5) {
          ctx.fillStyle = formations[currentFormation].color[1];
          ctx.shadowColor = formations[currentFormation].color[1];
          ctx.beginPath();
          ctx.arc(x + 3 + d * 3, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    });
    ctx.shadowBlur = 0;
  };

  const drawGateway = (ctx, time, mouseX, mouseY, centerX, centerY, maxRadius) => {
    // Central hub with enhanced glow
    const hubSize = 10 + Math.sin(time * 0.002) * 3;
    
    // Draw orbital rings with glow
    ctx.shadowBlur = 5;
    for (let ring = 0; ring < 3; ring++) {
      const ringRadius = 18 + ring * 15;
      const ringSpeed = 0.001 + ring * 0.0005;
      const ringAngle = time * ringSpeed;
      
      ctx.strokeStyle = formations[currentFormation].color[ring % 2] + Math.floor(opacity * 120).toString(16).padStart(2, '0');
      ctx.lineWidth = 1.5;
      ctx.shadowColor = formations[currentFormation].color[ring % 2];
      ctx.beginPath();
      ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
      ctx.stroke();
      
      // Ring particles with strong glow
      const particles = 6 + ring * 2;
      for (let p = 0; p < particles; p++) {
        const particleAngle = ringAngle + (p / particles) * Math.PI * 2;
        const x = centerX + Math.cos(particleAngle) * ringRadius;
        const y = centerY + Math.sin(particleAngle) * ringRadius;
        
        ctx.fillStyle = formations[currentFormation].color[ring % 2];
        ctx.shadowColor = formations[currentFormation].color[ring % 2];
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Central hub with radial glow
    ctx.shadowBlur = 15;
    ctx.fillStyle = formations[currentFormation].color[1];
    ctx.shadowColor = formations[currentFormation].color[1];
    ctx.beginPath();
    ctx.arc(centerX, centerY, hubSize, 0, Math.PI * 2);
    ctx.fill();
    
    // Hub core
    ctx.shadowBlur = 8;
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#ffffff';
    ctx.beginPath();
    ctx.arc(centerX, centerY, hubSize * 0.4, 0, Math.PI * 2);
    ctx.fill();
    
    // API endpoints with enhanced connections
    const clusters = Math.ceil(complexity / 2);
    ctx.shadowBlur = 6;
    for (let c = 0; c < clusters; c++) {
      const clusterAngle = (c / clusters) * Math.PI * 2 + time * 0.0003;
      const clusterDistance = maxRadius * (0.6 + Math.sin(time * 0.001 + c) * 0.1);
      const clusterX = centerX + Math.cos(clusterAngle) * clusterDistance;
      const clusterY = centerY + Math.sin(clusterAngle) * clusterDistance;
      
      // Connection to cluster with pulse effect
      const connectionPulse = Math.sin(time * 0.004 + c) * 0.5 + 0.5;
      ctx.strokeStyle = formations[currentFormation].color[0];
      ctx.lineWidth = 2 + connectionPulse;
      ctx.shadowColor = formations[currentFormation].color[0];
      ctx.shadowBlur = 4 + connectionPulse * 4;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(clusterX, clusterY);
      ctx.stroke();
      
      // Data packets with strong glow
      for (let packet = 0; packet < 3; packet++) {
        const packetProgress = ((time * 0.002 + c + packet * 0.3) % 1);
        const packetX = centerX + (clusterX - centerX) * packetProgress;
        const packetY = centerY + (clusterY - centerY) * packetProgress;
        
        const packetSize = 3 + Math.sin(packetProgress * Math.PI) * 2;
        ctx.fillStyle = formations[currentFormation].color[1];
        ctx.shadowColor = formations[currentFormation].color[1];
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(packetX, packetY, packetSize, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Cluster hub with glow
      const clusterSize = 8 + Math.sin(time * 0.003 + c) * 2;
      ctx.fillStyle = formations[currentFormation].color[1];
      ctx.shadowColor = formations[currentFormation].color[1];
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(clusterX, clusterY, clusterSize, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.shadowBlur = 0;
  };

  // Main canvas animation
  useEffect(() => {
    if (!canvasRef.current || !windowSize.width) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full screen
    canvas.width = windowSize.width * window.devicePixelRatio;
    canvas.height = windowSize.height * window.devicePixelRatio;
    canvas.style.width = windowSize.width + 'px';
    canvas.style.height = windowSize.height + 'px';
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const centerX = windowSize.width / 2;
    const centerY = windowSize.height / 2;
    const maxRadius = Math.min(windowSize.width, windowSize.height) * 0.35;

    // Animation loop
    const animate = () => {
      if (!isAnimationPaused) {
        timeRef.current += 16 * speed;
      }
      
      const time = timeRef.current;
      const mouseX = mouseRef.current.x * windowSize.width;
      const mouseY = mouseRef.current.y * windowSize.height;

      // Clear canvas with animated background gradient
      const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
      const bgPulse = Math.sin(time * 0.001) * 0.02 + 0.03;
      bgGradient.addColorStop(0, formations[currentFormation].color[0] + Math.floor(bgPulse * 255).toString(16).padStart(2, '0'));
      bgGradient.addColorStop(0.5, formations[currentFormation].color[1] + Math.floor(bgPulse * 0.5 * 255).toString(16).padStart(2, '0'));
      bgGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, windowSize.width, windowSize.height);

      // Draw current pattern
      switch (formations[currentFormation].pattern) {
        case 'neural':
          drawNeural(ctx, time, mouseX, mouseY, centerX, centerY, maxRadius);
          break;
        case 'flow':
          drawFlow(ctx, time, mouseX, mouseY, centerX, centerY, maxRadius);
          break;
        case 'cloud':
          drawCloud(ctx, time, mouseX, mouseY, centerX, centerY, maxRadius);
          break;
        case 'security':
          drawSecurity(ctx, time, mouseX, mouseY, centerX, centerY, maxRadius);
          break;
        case 'matrix':
          drawMatrix(ctx, time, mouseX, mouseY, centerX, centerY, maxRadius);
          break;
        case 'gateway':
          drawGateway(ctx, time, mouseX, mouseY, centerX, centerY, maxRadius);
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
  }, [currentFormation, isAnimationPaused, complexity, windowSize, opacity, speed]);

  return (
    <>
      {/* Full Screen Canvas Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <canvas 
          ref={canvasRef}
          className="w-full h-full"
          style={{ 
            width: windowSize.width,
            height: windowSize.height
          }}
        />
      </div>

      {/* Optional Controls */}
      {showControls && (
        <motion.div
          className="fixed top-4 right-4 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-gray-200/50 shadow-xl">
            <div className="flex items-center justify-between space-x-3 mb-3">
              <div>
                <h3 className="text-sm font-bold text-gray-800">Background</h3>
                <p className="text-xs text-gray-600">
                  {formations[currentFormation]?.name}
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setIsAnimationPaused(!isAnimationPaused)}
                  className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors group"
                  title={isAnimationPaused ? "Play" : "Pause"}
                >
                  {isAnimationPaused ? 
                    <Play className="w-3 h-3 text-gray-600" /> : 
                    <Pause className="w-3 h-3 text-gray-600" />
                  }
                </button>
              </div>
            </div>
            
            {/* Mini Formation Selector */}
            <div className="grid grid-cols-6 gap-1 mb-2">
              {formations.map((formation, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFormation(index)}
                  className={`p-1 rounded text-xs transition-all ${
                    currentFormation === index
                      ? 'text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{ 
                    background: currentFormation === index 
                      ? `linear-gradient(45deg, ${formation.color[0]}, ${formation.color[1]})` 
                      : undefined
                  }}
                  title={formation.name}
                >
                  <formation.icon className="w-2.5 h-2.5 mx-auto" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

// Updated Home Section with Full Page Background
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
    <div className="relative min-h-screen">
      {/* Full Page Tech Background - Much More Visible */}
      <FullPageTechBackground 
        showControls={true}
        opacity={0.35}
        speed={1.2}
        autoTransition={true}
        initialFormation={0}
      />

      {/* Lighter Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/20 pointer-events-none z-10"></div>

      {/* Top Left Logo */}
      <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="fixed top-4 left-4 md:top-6 md:left-6 z-50"
>
  <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-200 shadow-lg p-2 md:p-3 hover:scale-105 transition-transform duration-200">
    <div className="h-10 md:h-14 lg:h-16 w-10 md:w-14 lg:w-16 rounded-lg flex items-center justify-center overflow-hidden">
      <img
        src="/ChatGPT_Image_Apr_4__2025__10_40_51_PM-removebg-preview.png"
        alt="Logo"
        className="h-full w-full object-contain"
      />
    </div>
  </div>
</motion.div>


      {/* Corner Navigation Menu */}
      <div className="fixed top-6 right-20 z-50">
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

      {/* Main Hero Section with better contrast */}
      <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 z-20">
        <div className="max-w-6xl mx-auto w-full text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-8"
          >
            {/* Brand Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-black/10 backdrop-blur-sm rounded-full border border-black/20"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-black/80">Available for new projects</span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight font-space-grotesk">
                <span className="block text-black drop-shadow-sm">We Build</span>
                <span className="block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black drop-shadow-sm">
                    Digital
                  </span>
                </span>
                <span className="block text-black drop-shadow-sm">Powerhouses</span>
              </h1>
            </motion.div>
            
            {/* Dynamic Subheading */}
            <motion.div variants={itemVariants} className="h-12 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p 
                  key={currentTextIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black/80 font-inter drop-shadow-sm"
                >
                  {textVariants[currentTextIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
            
            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-xl lg:text-2xl text-black/70 leading-relaxed max-w-4xl mx-auto font-inter drop-shadow-sm"
            >
              From startups to enterprises, Faigen crafts seamless, secure, and scalable 
              digital products with precision and purpose. We transform ideas into 
              digital experiences that drive growth.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 justify-center"
            >
              <motion.button
                onClick={() => console.log('Consultation clicked')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl backdrop-blur-sm"
              >
                Get a Free Consultation
              </motion.button>
              
              <motion.button
                onClick={scrollToPortfolio}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-black/30 hover:border-black/50 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-black/10 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>See Our Work</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
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
      `}</style>
    </div>
  );
};

export default HomeSection;