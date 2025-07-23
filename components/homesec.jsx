'use client'
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { 
  Globe, 
  Smartphone, 
  Database, 
  Zap, 
  Shield, 
  Code,
  Server,
  Cloud
} from "lucide-react";

const HomeSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(null);
  const textVariants = ["Future-ready solutions.", "Human-first design.", "Scalable technology."];
  
  // Services that rotate
  const services = [
    { icon: Globe, title: "Web Applications", desc: "Modern & responsive", color: "text-blue-600" },
    { icon: Smartphone, title: "Mobile Apps", desc: "iOS & Android", color: "text-green-600" },
    { icon: Database, title: "Database Solutions", desc: "Scalable & secure", color: "text-purple-600" },
    { icon: Code, title: "API Development", desc: "RESTful & GraphQL", color: "text-orange-600" },
    { icon: Cloud, title: "Cloud Infrastructure", desc: "AWS & Azure", color: "text-cyan-600" },
    { icon: Shield, title: "Security", desc: "Enterprise-grade", color: "text-red-600" }
  ];
  
  useEffect(() => {
    // Load fonts immediately without blocking render
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap';
    link.media = 'print';
    link.onload = function() { this.media = 'all'; };
    document.head.appendChild(link);
    
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);
  
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

  // Sophisticated Three.js Scene
  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      antialias: true, 
      alpha: true 
    });
    
    renderer.setSize(600, 600);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5, 100);
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);

    // Enhanced Black & White + Accent Colors Materials
    const serverMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.3,
      metalness: 0.8,
    });

    const databaseMaterial = new THREE.MeshStandardMaterial({
      color: 0x666666,
      roughness: 0.4,
      metalness: 0.6,
    });

    const networkMaterial = new THREE.MeshStandardMaterial({
      color: 0x999999,
      roughness: 0.2,
      metalness: 0.9,
    });

    const cloudMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      roughness: 0.1,
      metalness: 0.1,
    });

    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    // Accent color materials for highlights
    const accentBlueMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.8,
    });

    const accentGreenMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.8,
    });

    const accentOrangeMaterial = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.8,
    });

    // Central cloud platform
    const platformGeometry = new THREE.CylinderGeometry(2.5, 2.8, 0.4, 8);
    const platform = new THREE.Mesh(platformGeometry, cloudMaterial);
    platform.position.y = 0;
    platform.castShadow = true;
    platform.receiveShadow = true;
    scene.add(platform);

    // Add platform details
    const platformWire = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.8, 0.4, 8), wireMaterial);
    platform.add(platformWire);

    // Tech infrastructure elements
    const techElements = [];
    
    // Server Racks (Cubes representing servers)
    for (let i = 0; i < 4; i++) {
      const serverGroup = new THREE.Group();
      
      // Main server body
      const serverGeometry = new THREE.BoxGeometry(0.6, 1.2, 0.4);
      const server = new THREE.Mesh(serverGeometry, serverMaterial);
      
      // Server details (Colored LED indicators)
      for (let j = 0; j < 3; j++) {
        const ledGeometry = new THREE.SphereGeometry(0.02, 8, 8);
        let ledMaterial;
        if (j === 0) ledMaterial = accentGreenMaterial; // Green for active
        else if (j === 1) ledMaterial = accentBlueMaterial; // Blue for processing 
        else ledMaterial = accentOrangeMaterial; // Orange for standby
        
        const led = new THREE.Mesh(ledGeometry, ledMaterial);
        led.position.set(-0.25, 0.3 - j * 0.3, 0.21);
        server.add(led);
      }
      
      // Server screen/panel
      const screenGeometry = new THREE.PlaneGeometry(0.4, 0.3);
      const screenMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const screen = new THREE.Mesh(screenGeometry, screenMaterial);
      screen.position.set(0, 0.2, 0.21);
      server.add(screen);
      
      serverGroup.add(server);
      
      const angle = (i / 4) * Math.PI * 2;
      serverGroup.position.set(
        Math.cos(angle) * 4,
        Math.sin(i * 0.5) * 1.5,
        Math.sin(angle) * 4
      );
      
      server.castShadow = true;
      scene.add(serverGroup);
      techElements.push({
        mesh: serverGroup,
        type: 'server',
        angle: angle,
        radius: 4,
        floatSpeed: 0.5,
        rotationSpeed: { x: 0.005, y: 0.01, z: 0 }
      });
    }

    // Database Cylinders
    for (let i = 0; i < 3; i++) {
      const dbGroup = new THREE.Group();
      
      // Main database cylinder
      const dbGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.8, 12);
      const database = new THREE.Mesh(dbGeometry, databaseMaterial);
      
      // Database rings (representing data layers)
      for (let j = 0; j < 4; j++) {
        const ringGeometry = new THREE.TorusGeometry(0.32, 0.02, 8, 16);
        const ring = new THREE.Mesh(ringGeometry, wireMaterial);
        ring.position.y = -0.3 + j * 0.2;
        ring.rotation.x = Math.PI / 2;
        database.add(ring);
      }
      
      dbGroup.add(database);
      
      const angle = (i / 3) * Math.PI * 2 + Math.PI / 3;
      dbGroup.position.set(
        Math.cos(angle) * 5,
        Math.sin(i * 0.8) * 2,
        Math.sin(angle) * 5
      );
      
      database.castShadow = true;
      scene.add(dbGroup);
      techElements.push({
        mesh: dbGroup,
        type: 'database',
        angle: angle,
        radius: 5,
        floatSpeed: 0.4,
        rotationSpeed: { x: 0, y: 0.02, z: 0 }
      });
    }

    // API Nodes (Octahedrons representing connection points)
    for (let i = 0; i < 6; i++) {
      const nodeGroup = new THREE.Group();
      
      const nodeGeometry = new THREE.OctahedronGeometry(0.2, 1);
      const node = new THREE.Mesh(nodeGeometry, networkMaterial);
      
      // Connection points
      const connectionGeometry = new THREE.SphereGeometry(0.05, 8, 8);
      for (let j = 0; j < 4; j++) {
        const connectionPoint = new THREE.Mesh(connectionGeometry, new THREE.MeshBasicMaterial({ color: 0x000000 }));
        const connAngle = (j / 4) * Math.PI * 2;
        connectionPoint.position.set(
          Math.cos(connAngle) * 0.25,
          0,
          Math.sin(connAngle) * 0.25
        );
        node.add(connectionPoint);
      }
      
      nodeGroup.add(node);
      
      const radius = 3 + Math.random() * 1.5;
      const angle = (i / 6) * Math.PI * 2;
      const height = (Math.random() - 0.5) * 3;
      
      nodeGroup.position.set(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      );
      
      node.castShadow = true;
      scene.add(nodeGroup);
      techElements.push({
        mesh: nodeGroup,
        type: 'api',
        angle: angle,
        radius: radius,
        floatSpeed: 0.6,
        rotationSpeed: { x: 0.02, y: 0.03, z: 0.01 },
        pulsePhase: i * 0.5
      });
    }

    // Central processing unit (CPU/Brain)
    const coreGeometry = new THREE.BoxGeometry(1, 1, 0.2);
    const core = new THREE.Mesh(coreGeometry, serverMaterial);
    core.position.y = 1.5;
    
    // CPU grid pattern
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const pinGeometry = new THREE.BoxGeometry(0.05, 0.05, 0.1);
        const pin = new THREE.Mesh(pinGeometry, new THREE.MeshBasicMaterial({ color: 0x000000 }));
        pin.position.set(-0.4 + i * 0.2, 0, -0.4 + j * 0.2);
        core.add(pin);
      }
    }
    
    scene.add(core);

    // Data flow rings around CPU with colors
    const dataRings = [];
    const ringColors = [0x3b82f6, 0x10b981, 0xf59e0b]; // Blue, Green, Orange
    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.TorusGeometry(1.5 + i * 0.4, 0.03, 8, 32);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: ringColors[i],
        transparent: true,
        opacity: 0.6,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(core.position);
      ring.rotation.x = Math.PI / 2;
      ring.rotation.z = (i * Math.PI) / 3;
      scene.add(ring);
      dataRings.push({
        mesh: ring,
        speed: 0.8 + i * 0.3,
        axis: i % 2 === 0 ? 'x' : 'z',
        material: ringMaterial
      });
    }

    // Data packet particles
    const particleCount = 30;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 15;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 15;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 15;
      
      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.03,
        y: (Math.random() - 0.5) * 0.03,
        z: (Math.random() - 0.5) * 0.03,
      });
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x3b82f6, // Blue data packets
      size: 0.08,
      transparent: true,
      opacity: 0.7,
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Network connections between tech elements
    const connections = [];
    for (let i = 0; i < techElements.length - 1; i += 2) {
      if (techElements[i + 1]) {
        const start = techElements[i].mesh.position;
        const end = techElements[i + 1].mesh.position;
        
        const curve = new THREE.CatmullRomCurve3([
          start.clone(),
          new THREE.Vector3(0, 1.5, 0), // Route through CPU
          end.clone()
        ]);
        
        const tubeGeometry = new THREE.TubeGeometry(curve, 20, 0.02, 8, false);
        const tubeMaterial = new THREE.MeshBasicMaterial({
          color: 0x3b82f6, // Blue data connections
          transparent: true,
          opacity: 0.4,
        });
        
        const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
        scene.add(tube);
        connections.push({
          mesh: tube,
          material: tubeMaterial,
          originalOpacity: 0.5
        });
      }
    }

    camera.position.set(0, 3, 10);
    camera.lookAt(0, 0, 0);

    // Animation loop
    const animate = () => {
      const time = Date.now() * 0.001;
      
      // Rotate entire scene slowly
      scene.rotation.y = time * 0.08;
      
      // Animate cloud platform
      platform.rotation.y = time * 0.3;
      platform.position.y = Math.sin(time * 0.6) * 0.1;
      
      // Animate CPU core
      core.rotation.x = time * 0.2;
      core.rotation.y = time * 0.3;
      core.position.y = 1.5 + Math.sin(time * 1.0) * 0.2;
      
      // Animate data flow rings around CPU with color pulsing
      dataRings.forEach((ring, index) => {
        if (ring.axis === 'x') {
          ring.mesh.rotation.x += ring.speed * 0.02;
        } else {
          ring.mesh.rotation.z += ring.speed * 0.02;
        }
        ring.mesh.position.y = core.position.y;
        
        // Pulse opacity for data flow effect
        ring.material.opacity = 0.4 + Math.sin(time * 2 + index) * 0.3;
      });
      
      // Animate tech infrastructure elements
      techElements.forEach((element, index) => {
        const { mesh, floatSpeed, rotationSpeed, angle, radius, type } = element;
        
        // Orbital motion around the cloud platform
        const newAngle = angle + time * 0.15;
        mesh.position.x = Math.cos(newAngle) * radius;
        mesh.position.z = Math.sin(newAngle) * radius;
        mesh.position.y += Math.sin(time * floatSpeed + index) * 0.008;
        
        // Rotation
        mesh.rotation.x += rotationSpeed.x;
        mesh.rotation.y += rotationSpeed.y;
        mesh.rotation.z += rotationSpeed.z;
        
        // Special animations for different tech types
        if (type === 'server') {
          // Servers pulse subtly
          const scale = 1 + Math.sin(time * 1.5 + index) * 0.05;
          mesh.scale.setScalar(scale);
          
          // Animate LED indicators
          const server = mesh.children[0];
          if (server && server.children) {
            server.children.forEach((child, i) => {
              if (child.geometry && child.geometry.type === 'SphereGeometry') {
                child.material.opacity = 0.5 + Math.sin(time * 2 + i) * 0.5;
              }
            });
          }
        }
        
        if (type === 'database') {
          // Databases rotate and occasionally "process data"
          const db = mesh.children[0];
          if (db) {
            db.rotation.y = time * 0.5;
            // Animate data layer rings
            db.children.forEach((ring, i) => {
              if (ring.geometry && ring.geometry.type === 'TorusGeometry') {
                ring.material.opacity = 0.3 + Math.sin(time * 3 + i * 0.5) * 0.2;
              }
            });
          }
        }
        
        if (type === 'api') {
          // API nodes pulse and their connection points light up
          const pulse = 1 + Math.sin(time * 2 + element.pulsePhase) * 0.1;
          mesh.scale.setScalar(pulse);
          
          const node = mesh.children[0];
          if (node && node.children) {
            node.children.forEach((point, i) => {
              if (point.geometry && point.geometry.type === 'SphereGeometry') {
                point.material.opacity = 0.3 + Math.sin(time * 4 + i) * 0.7;
              }
            });
          }
        }
      });
      
      // Animate data packets
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        positions[i3] += particleVelocities[i].x;
        positions[i3 + 1] += particleVelocities[i].y;
        positions[i3 + 2] += particleVelocities[i].z;
        
        // Reset particles that go too far
        if (Math.abs(positions[i3]) > 8) particleVelocities[i].x *= -1;
        if (Math.abs(positions[i3 + 1]) > 8) particleVelocities[i].y *= -1;
        if (Math.abs(positions[i3 + 2]) > 8) particleVelocities[i].z *= -1;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      
      // Animate network connections with data flow effect
      connections.forEach((connection, index) => {
        const flow = connection.originalOpacity + Math.sin(time * 2 + index * 0.8) * 0.3;
        connection.material.opacity = Math.max(0.1, flow);
      });
      
      // Subtle lighting changes
      pointLight.intensity = 0.5 + Math.sin(time * 1.5) * 0.2;
      pointLight.position.x = Math.cos(time * 0.3) * 2;
      pointLight.position.z = Math.sin(time * 0.3) * 2;
      
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
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
      {/* Background Elements with Sky Blue Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Sky Blue Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-white to-blue-50/20"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-sky-400/12 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-sky-600/12 rounded-full blur-3xl"></div>
        
        {/* Additional subtle sky gradient */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-sky-100/20 to-transparent"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
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
          <img 
            src="/ChatGPT_Image_Apr_4__2025__10_40_51_PM-removebg-preview.png" 
            alt="Company Logo" 
            className="h-10 md:h-14 lg:h-16 w-auto"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div class="h-10 md:h-14 lg:h-16 w-10 md:w-14 lg:w-16 bg-black rounded-lg flex items-center justify-center text-white font-bold text-lg">F</div>';
            }}
          />
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
                      // router.push('/consultation');
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
      <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4 sm:space-y-6 order-1 lg:order-1"
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
              <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight font-space-grotesk">
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
              <motion.div variants={itemVariants} className="h-10 sm:h-12 flex items-center">
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
            
            {/* Right Visual - Sophisticated Three.js Scene */}
            <motion.div 
              className="relative h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center order-2 lg:order-2 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* 3D Canvas Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <canvas 
                  ref={canvasRef}
                  className="max-w-full max-h-full"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(79, 70, 229, 0.3))' }}
                />
                
                {/* Clean, Minimal UI Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  
                  {/* Rotating Service Showcase - Bottom Center */}
                  <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.6 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentServiceIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-gray-200/50 shadow-xl"
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 bg-gray-50 rounded-xl ${services[currentServiceIndex].color}`}>
                            {React.createElement(services[currentServiceIndex].icon, { className: "w-6 h-6" })}
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-gray-800">
                              {services[currentServiceIndex].title}
                            </div>
                            <div className="text-sm text-gray-600">
                              {services[currentServiceIndex].desc}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>

                  {/* Simple Status Indicator - Top Right */}
                  <motion.div
                    className="absolute top-6 right-6"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3, duration: 0.5 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-gray-200/50 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-700">All Systems Online</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Minimal Performance Badge - Top Left */}
                  <motion.div
                    className="absolute top-6 left-6"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3.5, duration: 0.5 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-gray-200/50 shadow-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-800">99.9%</div>
                        <div className="text-xs text-gray-600">Uptime</div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
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
      `}</style>
    </div>
  );
};

export default HomeSection;