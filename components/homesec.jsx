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
  Cloud,
  Cpu,
  Wifi,
  Lock,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2
} from "lucide-react";

const HomeSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cameraMode, setCameraMode] = useState('auto');
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(null);
  const cameraRef = useRef(null);
  const raycasterRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2());
  const interactiveObjectsRef = useRef([]);
  const gsapRef = useRef(null);
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

  // Enhanced tech elements with detailed info
  const techElementsInfo = {
    server: {
      title: 'Web Servers',
      desc: 'High-performance hosting with 99.9% uptime',
      details: ['Load balancing', 'Auto-scaling', 'CDN integration', 'Edge computing'],
      icon: Server,
      color: 'blue'
    },
    database: {
      title: 'Database Systems',
      desc: 'Secure, scalable data storage solutions',
      details: ['Multi-region replication', 'Real-time backups', 'ACID compliance', 'Data encryption'],
      icon: Database,
      color: 'green'
    },
    api: {
      title: 'API Gateway',
      desc: 'Seamless service integration',
      details: ['Rate limiting', 'Authentication', 'Real-time monitoring', 'Version management'],
      icon: Code,
      color: 'orange'
    },
    security: {
      title: 'Security Layer',
      desc: 'Enterprise-grade protection',
      details: ['End-to-end encryption', 'DDoS protection', 'Compliance ready', 'Threat detection'],
      icon: Shield,
      color: 'red'
    },
    ai: {
      title: 'AI Processing',
      desc: 'Smart automation and insights',
      details: ['Machine learning', 'Natural language processing', 'Predictive analytics', 'Neural networks'],
      icon: Cpu,
      color: 'purple'
    },
    cloud: {
      title: 'Cloud Platform',
      desc: 'Scalable infrastructure foundation',
      details: ['Multi-cloud support', 'Container orchestration', 'Serverless computing', 'Auto-scaling'],
      icon: Cloud,
      color: 'sky'
    }
  };

  // Initialize GSAP
  useEffect(() => {
    // Load GSAP from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      gsapRef.current = window.gsap;
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

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

  // Get responsive canvas size
  // Get responsive canvas size - Made smaller and more responsive
  const getCanvasSize = () => {
    if (isFullscreen && windowSize.width > 0) {
      return {
        width: Math.min(windowSize.width * 0.85, 1200),
        height: Math.min(windowSize.height * 0.75, 900)
      };
    }

    // Smaller responsive sizes based on screen width
    if (windowSize.width >= 1536) { // 2xl
      return { width: 600, height: 450 };
    } else if (windowSize.width >= 1280) { // xl
      return { width: 550, height: 400 };
    } else if (windowSize.width >= 1024) { // lg
      return { width: 500, height: 380 };
    } else if (windowSize.width >= 768) { // md
      return { width: 450, height: 340 };
    } else if (windowSize.width >= 640) { // sm
      return { width: 380, height: 300 };
    } else { // mobile
      return { width: Math.min(windowSize.width - 32, 340), height: 280 };
    }
  };
  
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

  // Enhanced mouse movement handler
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!canvasRef.current) return;
      
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      mouseRef.current.x = x;
      mouseRef.current.y = y;
      
      setMousePosition({ x: event.clientX, y: event.clientY });
      
      // GSAP smooth mouse tracking
      if (gsapRef.current && cameraRef.current && cameraMode === 'manual') {
        gsapRef.current.to(cameraRef.current.position, {
          x: x * 3,
          y: y * 2 + 4,
          duration: 0.5,
          ease: "power2.out"
        });
      }
      
      // Update raycaster for hover detection
      if (raycasterRef.current && cameraRef.current) {
        raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
        
        const intersects = raycasterRef.current.intersectObjects(interactiveObjectsRef.current, true);
        if (intersects.length > 0) {
          const intersectedObject = intersects[0].object;
          const elementType = intersectedObject.userData.type;
          if (elementType && elementType !== hoveredElement) {
            setHoveredElement(elementType);
            document.body.style.cursor = 'pointer';
          }
        } else {
          if (hoveredElement) {
            setHoveredElement(null);
            document.body.style.cursor = 'default';
          }
        }
      }
    };

    const handleClick = (event) => {
      if (!canvasRef.current || !raycasterRef.current || !cameraRef.current) return;
      
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      mouseRef.current.x = x;
      mouseRef.current.y = y;
      
      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
      const intersects = raycasterRef.current.intersectObjects(interactiveObjectsRef.current, true);
      
      if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;
        const elementType = intersectedObject.userData.type;
        if (elementType) {
          setSelectedElement(elementType === selectedElement ? null : elementType);
          
          // GSAP click animation
          if (gsapRef.current) {
            gsapRef.current.to(intersectedObject.scale, {
              x: 1.3,
              y: 1.3,
              z: 1.3,
              duration: 0.3,
              ease: "elastic.out(1, 0.3)",
              yoyo: true,
              repeat: 1
            });
          }
        }
      } else {
        setSelectedElement(null);
      }
    };

    if (canvasRef.current) {
      canvasRef.current.addEventListener('mousemove', handleMouseMove);
      canvasRef.current.addEventListener('click', handleClick);
    }

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('mousemove', handleMouseMove);
        canvasRef.current.removeEventListener('click', handleClick);
      }
    };
  }, [hoveredElement, selectedElement, cameraMode]);

  // Enhanced Three.js Scene with responsive sizing
  useEffect(() => {
    if (!canvasRef.current || !windowSize.width) return;

    const canvasSize = getCanvasSize();
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvasSize.width / canvasSize.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(canvasSize.width, canvasSize.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;
    
    // Initialize raycaster for mouse interaction
    raycasterRef.current = new THREE.Raycaster();
    interactiveObjectsRef.current = [];

    // Enhanced lighting with HDR-like setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(15, 15, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 100;
    scene.add(directionalLight);

    // Dynamic point lights
    const mouseLight = new THREE.PointLight(0x60a5fa, 1.0, 100);
    mouseLight.position.set(0, 5, 5);
    scene.add(mouseLight);

    const accentLight1 = new THREE.PointLight(0x3b82f6, 0.8, 50);
    accentLight1.position.set(10, 5, 10);
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(0x10b981, 0.6, 50);
    accentLight2.position.set(-10, 3, -10);
    scene.add(accentLight2);

    // Enhanced materials with better PBR properties
    const createInteractiveMaterial = (baseColor, emissiveColor = 0x000000) => {
      return {
        normal: new THREE.MeshStandardMaterial({
          color: baseColor,
          roughness: 0.3,
          metalness: 0.7,
          emissive: emissiveColor,
          emissiveIntensity: 0.1,
          envMapIntensity: 1.0,
        }),
        hover: new THREE.MeshStandardMaterial({
          color: baseColor,
          roughness: 0.1,
          metalness: 0.9,
          emissive: emissiveColor,
          emissiveIntensity: 0.4,
          envMapIntensity: 1.5,
        }),
        selected: new THREE.MeshStandardMaterial({
          color: baseColor,
          roughness: 0.05,
          metalness: 0.95,
          emissive: emissiveColor,
          emissiveIntensity: 0.6,
          envMapIntensity: 2.0,
        })
      };
    };

    const cloudMaterials = createInteractiveMaterial(0xf0f8ff, 0x3b82f6);
    const serverMaterials = createInteractiveMaterial(0x2563eb, 0x1d4ed8);
    const databaseMaterials = createInteractiveMaterial(0x059669, 0x047857);
    const apiMaterials = createInteractiveMaterial(0xd97706, 0xb45309);
    const securityMaterials = createInteractiveMaterial(0xdc2626, 0xb91c1c);
    const aiMaterials = createInteractiveMaterial(0x7c3aed, 0x6d28d9);

    // Scale factor based on canvas size
    const scaleFactor = Math.min(canvasSize.width / 600, canvasSize.height / 600);

    // Central cloud platform - bigger and more impressive
    const platformGeometry = new THREE.CylinderGeometry(3.5 * scaleFactor, 4.0 * scaleFactor, 0.8 * scaleFactor, 12);
    const platform = new THREE.Mesh(platformGeometry, cloudMaterials.normal);
    platform.position.y = 0;
    platform.castShadow = true;
    platform.receiveShadow = true;
    platform.userData = { type: 'cloud' };
    scene.add(platform);
    interactiveObjectsRef.current.push(platform);

    // Enhanced server towers
    const serverElements = [];
    for (let i = 0; i < 4; i++) {
      const serverGroup = new THREE.Group();
      
      // Bigger server tower
      const serverGeometry = new THREE.BoxGeometry(1.2 * scaleFactor, 3.0 * scaleFactor, 0.8 * scaleFactor);
      const server = new THREE.Mesh(serverGeometry, serverMaterials.normal);
      server.userData = { type: 'server', index: i };
      
      // Enhanced server rack details
      for (let j = 0; j < 6; j++) {
        const rackGeometry = new THREE.BoxGeometry(1.0 * scaleFactor, 0.2 * scaleFactor, 0.1 * scaleFactor);
        const rackMaterial = new THREE.MeshStandardMaterial({ 
          color: 0x1e293b,
          roughness: 0.4,
          metalness: 0.8
        });
        const rack = new THREE.Mesh(rackGeometry, rackMaterial);
        rack.position.set(0, 1.0 * scaleFactor - j * 0.4 * scaleFactor, 0.4 * scaleFactor);
        server.add(rack);
        
        // Brighter LED indicators
        for (let k = 0; k < 3; k++) {
          const ledGeometry = new THREE.SphereGeometry(0.04 * scaleFactor, 8, 8);
          const ledMaterial = new THREE.MeshBasicMaterial({ 
            color: k === 0 ? 0x00ff00 : k === 1 ? 0x0066ff : 0xff6600,
            transparent: true,
            opacity: 0.9
          });
          const led = new THREE.Mesh(ledGeometry, ledMaterial);
          led.position.set(-0.35 * scaleFactor + k * 0.15 * scaleFactor, 1.0 * scaleFactor - j * 0.4 * scaleFactor, 0.45 * scaleFactor);
          led.userData = { type: 'led', parentType: 'server' };
          server.add(led);
        }
      }
      
      serverGroup.add(server);
      
      const angle = (i / 4) * Math.PI * 2;
      const radius = 6.5 * scaleFactor;
      serverGroup.position.set(
        Math.cos(angle) * radius,
        1.5 * scaleFactor,
        Math.sin(angle) * radius
      );
      
      server.castShadow = true;
      scene.add(serverGroup);
      interactiveObjectsRef.current.push(server);
      serverElements.push({ 
        mesh: serverGroup, 
        server: server,
        angle: angle,
        radius: radius,
        materials: serverMaterials
      });
    }

    // Enhanced database systems
    const databaseElements = [];
    for (let i = 0; i < 3; i++) {
      const dbGroup = new THREE.Group();
      
      // Bigger database stack
      for (let j = 0; j < 4; j++) {
        const diskGeometry = new THREE.CylinderGeometry(0.8 * scaleFactor, 0.8 * scaleFactor, 0.3 * scaleFactor, 20);
        const disk = new THREE.Mesh(diskGeometry, databaseMaterials.normal);
        disk.position.y = j * 0.35 * scaleFactor;
        disk.userData = { type: 'database', layer: j };
        
        // Enhanced rim details
        const rimGeometry = new THREE.TorusGeometry(0.8 * scaleFactor, 0.03 * scaleFactor, 12, 24);
        const rimMaterial = new THREE.MeshStandardMaterial({ 
          color: 0x064e3b,
          roughness: 0.2,
          metalness: 0.9,
          emissive: 0x10b981,
          emissiveIntensity: 0.2
        });
        const rim = new THREE.Mesh(rimGeometry, rimMaterial);
        rim.rotation.x = Math.PI / 2;
        disk.add(rim);
        
        dbGroup.add(disk);
        if (j === 1) { // Middle disk as main interactive element
          interactiveObjectsRef.current.push(disk);
        }
      }
      
      const angle = (i / 3) * Math.PI * 2 + Math.PI / 4;
      const radius = 8.0 * scaleFactor;
      dbGroup.position.set(
        Math.cos(angle) * radius,
        0.8 * scaleFactor,
        Math.sin(angle) * radius
      );
      
      scene.add(dbGroup);
      databaseElements.push({ 
        mesh: dbGroup, 
        angle: angle,
        radius: radius,
        materials: databaseMaterials
      });
    }

    // Enhanced API Gateway nodes
    const apiElements = [];
    for (let i = 0; i < 6; i++) {
      const apiGroup = new THREE.Group();
      
      // Bigger central hub
      const hubGeometry = new THREE.SphereGeometry(0.5 * scaleFactor, 16, 16);
      const hub = new THREE.Mesh(hubGeometry, apiMaterials.normal);
      hub.userData = { type: 'api', index: i };
      
      // Enhanced connection arms
      for (let j = 0; j < 8; j++) {
        const armGeometry = new THREE.CylinderGeometry(0.05 * scaleFactor, 0.05 * scaleFactor, 0.8 * scaleFactor, 12);
        const arm = new THREE.Mesh(armGeometry, apiMaterials.normal);
        const armAngle = (j / 8) * Math.PI * 2;
        arm.position.set(
          Math.cos(armAngle) * 0.4 * scaleFactor,
          0,
          Math.sin(armAngle) * 0.4 * scaleFactor
        );
        arm.rotation.z = Math.PI / 2;
        arm.rotation.y = armAngle;
        hub.add(arm);
        
        // Enhanced end nodes
        const nodeGeometry = new THREE.SphereGeometry(0.08 * scaleFactor, 12, 12);
        const nodeMaterial = new THREE.MeshStandardMaterial({ 
          color: 0xfbbf24,
          transparent: true,
          opacity: 0.9,
          emissive: 0xf59e0b,
          emissiveIntensity: 0.3,
          roughness: 0.1,
          metalness: 0.8
        });
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        node.position.set(
          Math.cos(armAngle) * 0.8 * scaleFactor,
          0,
          Math.sin(armAngle) * 0.8 * scaleFactor
        );
        node.userData = { type: 'api-node', parentType: 'api' };
        hub.add(node);
      }
      
      apiGroup.add(hub);
      
      const angle = (i / 6) * Math.PI * 2 + Math.PI / 8;
      const radius = 5.0 * scaleFactor + Math.random() * 1.0 * scaleFactor;
      const height = 2.5 * scaleFactor + Math.sin(i) * 1.0 * scaleFactor;
      apiGroup.position.set(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      );
      
      scene.add(apiGroup);
      interactiveObjectsRef.current.push(hub);
      apiElements.push({ 
        mesh: apiGroup, 
        hub: hub,
        angle: angle, 
        radius: radius,
        height: height,
        materials: apiMaterials
      });
    }

    // Enhanced security shields
    const securityElements = [];
    for (let i = 0; i < 3; i++) {
      const securityGroup = new THREE.Group();
      
      // Bigger shield shape
      const shieldGeometry = new THREE.ConeGeometry(0.6 * scaleFactor, 1.2 * scaleFactor, 8);
      const shield = new THREE.Mesh(shieldGeometry, securityMaterials.normal);
      shield.userData = { type: 'security', index: i };
      
      // Enhanced security patterns
      const patternGeometry = new THREE.RingGeometry(0.3 * scaleFactor, 0.5 * scaleFactor, 12);
      const patternMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xfef2f2,
        transparent: true,
        opacity: 0.8,
        emissive: 0xdc2626,
        emissiveIntensity: 0.2
      });
      const pattern = new THREE.Mesh(patternGeometry, patternMaterial);
      pattern.position.z = 0.3 * scaleFactor;
      shield.add(pattern);
      
      // Enhanced lock icons
      const lockGeometry = new THREE.BoxGeometry(0.15 * scaleFactor, 0.15 * scaleFactor, 0.08 * scaleFactor);
      const lockMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xfbbf24,
        emissive: 0xf59e0b,
        emissiveIntensity: 0.4,
        roughness: 0.1,
        metalness: 0.9
      });
      const lock = new THREE.Mesh(lockGeometry, lockMaterial);
      lock.position.set(0, 0.15 * scaleFactor, 0.4 * scaleFactor);
      shield.add(lock);
      
      securityGroup.add(shield);
      
      const angle = (i / 3) * Math.PI * 2 + Math.PI / 3;
      const radius = 9.0 * scaleFactor;
      securityGroup.position.set(
        Math.cos(angle) * radius,
        3.0 * scaleFactor,
        Math.sin(angle) * radius
      );
      
      scene.add(securityGroup);
      interactiveObjectsRef.current.push(shield);
      securityElements.push({ 
        mesh: securityGroup, 
        shield: shield,
        angle: angle,
        radius: radius,
        materials: securityMaterials
      });
    }

    // Enhanced AI Processing unit
    const aiGeometry = new THREE.OctahedronGeometry(1.2 * scaleFactor, 3);
    const aiProcessor = new THREE.Mesh(aiGeometry, aiMaterials.normal);
    aiProcessor.position.set(0, 5.5 * scaleFactor, 0);
    aiProcessor.userData = { type: 'ai' };
    scene.add(aiProcessor);
    interactiveObjectsRef.current.push(aiProcessor);

    // Add neural network connections around AI processor
    const neuralConnections = [];
    for (let i = 0; i < 12; i++) {
      const connectionGeometry = new THREE.CylinderGeometry(0.02 * scaleFactor, 0.02 * scaleFactor, 2.0 * scaleFactor, 8);
      const connectionMaterial = new THREE.MeshBasicMaterial({
        color: 0x7c3aed,
        transparent: true,
        opacity: 0.6,
      });
      const connection = new THREE.Mesh(connectionGeometry, connectionMaterial);
      
      const angle = (i / 12) * Math.PI * 2;
      const radius = 1.5 * scaleFactor;
      connection.position.set(
        Math.cos(angle) * radius,
        5.5 * scaleFactor,
        Math.sin(angle) * radius
      );
      connection.rotation.z = angle;
      scene.add(connection);
      neuralConnections.push({ mesh: connection, angle: angle });
    }

    // Enhanced data flow particles
    const particleCount = 50;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = [];
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 20 * scaleFactor;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 20 * scaleFactor;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 20 * scaleFactor;
      
      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.05 * scaleFactor,
        y: (Math.random() - 0.5) * 0.05 * scaleFactor,
        z: (Math.random() - 0.5) * 0.05 * scaleFactor,
      });

      // Random colors for particles
      const colors = [
        [0.23, 0.51, 0.96], // Blue
        [0.06, 0.71, 0.41], // Green
        [0.85, 0.62, 0.03], // Orange
        [0.86, 0.15, 0.15], // Red
        [0.49, 0.23, 0.93]  // Purple
      ];
      const colorIndex = Math.floor(Math.random() * colors.length);
      particleColors[i3] = colors[colorIndex][0];
      particleColors[i3 + 1] = colors[colorIndex][1];
      particleColors[i3 + 2] = colors[colorIndex][2];
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.15 * scaleFactor,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Set camera position based on canvas size
    const cameraDistance = Math.max(12, 8 + scaleFactor * 4);
    camera.position.set(0, 6 * scaleFactor, cameraDistance);
    camera.lookAt(0, 2 * scaleFactor, 0);

    // Enhanced animation loop with GSAP integration
    const animate = () => {
      const time = Date.now() * 0.001;
      
      // Interactive camera movement
      if (cameraMode === 'manual') {
        // GSAP handles smooth camera movement in mousemove handler
      } else {
        // Auto rotation with enhanced smoothness
        const baseRotation = time * 0.03;
        const mouseInfluence = mouseRef.current.x * 0.2;
        if (gsapRef.current) {
          gsapRef.current.to(scene.rotation, {
            y: baseRotation + mouseInfluence,
            duration: 0.1,
            ease: "none"
          });
        } else {
          scene.rotation.y = baseRotation + mouseInfluence;
        }
      }

      // Enhanced dynamic lighting
      mouseLight.position.x = mouseRef.current.x * 8 * scaleFactor;
      mouseLight.position.z = mouseRef.current.y * 8 * scaleFactor;
      mouseLight.intensity = 0.8 + Math.abs(mouseRef.current.x) * 0.7;
      
      accentLight1.intensity = 0.6 + Math.sin(time * 1.2) * 0.3;
      accentLight2.intensity = 0.4 + Math.cos(time * 0.8) * 0.3;

      if (!isAnimationPaused) {
        // Enhanced platform animation
        platform.rotation.y = time * 0.15;
        platform.position.y = Math.sin(time * 0.6) * 0.2 * scaleFactor;
        
        // Update platform material with GSAP
        if (hoveredElement === 'cloud' || selectedElement === 'cloud') {
          platform.material = selectedElement === 'cloud' ? cloudMaterials.selected : cloudMaterials.hover;
          if (gsapRef.current) {
            gsapRef.current.to(platform.scale, {
              x: selectedElement === 'cloud' ? 1.3 : 1.15,
              y: selectedElement === 'cloud' ? 1.3 : 1.15,
              z: selectedElement === 'cloud' ? 1.3 : 1.15,
              duration: 0.3,
              ease: "elastic.out(1, 0.3)"
            });
          }
        } else {
          platform.material = cloudMaterials.normal;
          if (gsapRef.current) {
            gsapRef.current.to(platform.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
          }
        }
        
        // Enhanced AI processor animation
        aiProcessor.rotation.x = time * 0.25;
        aiProcessor.rotation.y = time * 0.35;
        aiProcessor.position.y = 5.5 * scaleFactor + Math.sin(time * 1.0) * 0.3 * scaleFactor;
        
        // Update AI processor material
        if (hoveredElement === 'ai' || selectedElement === 'ai') {
          aiProcessor.material = selectedElement === 'ai' ? aiMaterials.selected : aiMaterials.hover;
          if (gsapRef.current) {
            gsapRef.current.to(aiProcessor.scale, {
              x: selectedElement === 'ai' ? 1.4 : 1.2,
              y: selectedElement === 'ai' ? 1.4 : 1.2,
              z: selectedElement === 'ai' ? 1.4 : 1.2,
              duration: 0.3,
              ease: "back.out(1.7)"
            });
          }
        } else {
          aiProcessor.material = aiMaterials.normal;
          if (gsapRef.current) {
            gsapRef.current.to(aiProcessor.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
          }
        }

        // Animate neural connections
        neuralConnections.forEach((connection, index) => {
          connection.mesh.rotation.y = time * 0.5 + connection.angle;
          connection.mesh.material.opacity = 0.4 + Math.sin(time * 2 + index) * 0.3;
        });
        
        // Enhanced server animations
        serverElements.forEach((element, index) => {
          const { mesh, server, angle, radius, materials } = element;
          const newAngle = angle + time * 0.08;
          mesh.position.x = Math.cos(newAngle) * radius;
          mesh.position.z = Math.sin(newAngle) * radius;
          mesh.position.y = 1.5 * scaleFactor + Math.sin(time * 0.4 + index) * 0.2 * scaleFactor;
          
          // Interactive material updates with GSAP
          const isHovered = hoveredElement === 'server';
          const isSelected = selectedElement === 'server';
          
          if (isSelected || isHovered) {
            server.material = isSelected ? materials.selected : materials.hover;
            if (gsapRef.current) {
              gsapRef.current.to(mesh.scale, {
                x: isSelected ? 1.3 : 1.15,
                y: isSelected ? 1.3 : 1.15,
                z: isSelected ? 1.3 : 1.15,
                duration: 0.3,
                ease: "back.out(1.7)"
              });
            }
          } else {
            server.material = materials.normal;
            if (gsapRef.current) {
              gsapRef.current.to(mesh.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
            }
          }
          
          // Enhanced LED animations
          if (server.children) {
            server.children.forEach((child) => {
              if (child.userData.type === 'led') {
                child.material.opacity = 0.6 + Math.sin(time * 4 + index) * 0.4;
                if (isSelected) {
                  child.material.emissiveIntensity = 1.0;
                  child.scale.setScalar(1.5);
                } else if (isHovered) {
                  child.material.emissiveIntensity = 0.8;
                  child.scale.setScalar(1.2);
                } else {
                  child.material.emissiveIntensity = 0.3;
                  child.scale.setScalar(1.0);
                }
              }
            });
          }
        });
        
        // Enhanced database animations
        databaseElements.forEach((element, index) => {
          const { mesh, angle, radius, materials } = element;
          const newAngle = angle + time * 0.06;
          mesh.position.x = Math.cos(newAngle) * radius;
          mesh.position.z = Math.sin(newAngle) * radius;
          mesh.rotation.y = time * 0.4;
          
          // Update materials for interaction with GSAP
          mesh.children.forEach((disk) => {
            if (disk.userData.type === 'database') {
              const isHovered = hoveredElement === 'database';
              const isSelected = selectedElement === 'database';
              
              if (isSelected || isHovered) {
                disk.material = isSelected ? materials.selected : materials.hover;
                if (gsapRef.current) {
                  gsapRef.current.to(disk.scale, {
                    x: isSelected ? 1.3 : 1.15,
                    y: isSelected ? 1.3 : 1.15,
                    z: isSelected ? 1.3 : 1.15,
                    duration: 0.3,
                    ease: "elastic.out(1, 0.3)"
                  });
                }
              } else {
                disk.material = materials.normal;
                if (gsapRef.current) {
                  gsapRef.current.to(disk.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
                }
              }
            }
          });
        });
        
        // Enhanced API animations
        apiElements.forEach((element, index) => {
          const { mesh, hub, angle, radius, height, materials } = element;
          const newAngle = angle + time * 0.1;
          mesh.position.x = Math.cos(newAngle) * radius;
          mesh.position.z = Math.sin(newAngle) * radius;
          mesh.position.y = height + Math.sin(time * 0.8 + index) * 0.3 * scaleFactor;
          mesh.rotation.y = time * 0.6;
          
          // Enhanced interactive updates
          const isHovered = hoveredElement === 'api';
          const isSelected = selectedElement === 'api';
          
          if (isSelected || isHovered) {
            hub.material = isSelected ? materials.selected : materials.hover;
            if (gsapRef.current) {
              gsapRef.current.to(mesh.scale, {
                x: isSelected ? 1.4 : 1.2,
                y: isSelected ? 1.4 : 1.2,
                z: isSelected ? 1.4 : 1.2,
                duration: 0.3,
                ease: "back.out(1.7)"
              });
            }
          } else {
            hub.material = materials.normal;
            if (gsapRef.current) {
              gsapRef.current.to(mesh.scale, { 
                x: 1.0 + Math.sin(time * 1.5 + index) * 0.05,
                y: 1.0 + Math.sin(time * 1.5 + index) * 0.05,
                z: 1.0 + Math.sin(time * 1.5 + index) * 0.05,
                duration: 0.1
              });
            }
          }
        });
        
        // Enhanced security animations
        securityElements.forEach((element, index) => {
          const { mesh, shield, angle, radius, materials } = element;
          const newAngle = angle + time * 0.04;
          mesh.position.x = Math.cos(newAngle) * radius;
          mesh.position.z = Math.sin(newAngle) * radius;
          mesh.rotation.y = -time * 0.3;
          
          // Enhanced interactive updates
          const isHovered = hoveredElement === 'security';
          const isSelected = selectedElement === 'security';
          
          if (isSelected || isHovered) {
            shield.material = isSelected ? materials.selected : materials.hover;
            if (gsapRef.current) {
              gsapRef.current.to(mesh.scale, {
                x: isSelected ? 1.5 : 1.3,
                y: isSelected ? 1.5 : 1.3,
                z: isSelected ? 1.5 : 1.3,
                duration: 0.3,
                ease: "elastic.out(1, 0.3)"
              });
            }
          } else {
            shield.material = materials.normal;
            if (gsapRef.current) {
              gsapRef.current.to(mesh.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
            }
          }
        });

        // Enhanced particle animation
        const positions = particles.geometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          
          positions[i3] += particleVelocities[i].x;
          positions[i3 + 1] += particleVelocities[i].y;
          positions[i3 + 2] += particleVelocities[i].z;
          
          // Enhanced boundary conditions
          const boundary = 12 * scaleFactor;
          if (Math.abs(positions[i3]) > boundary) particleVelocities[i].x *= -1;
          if (Math.abs(positions[i3 + 1]) > boundary) particleVelocities[i].y *= -1;
          if (Math.abs(positions[i3 + 2]) > boundary) particleVelocities[i].z *= -1;
        }
        particles.geometry.attributes.position.needsUpdate = true;
        
        // Particle size animation
        particleMaterial.size = 0.15 * scaleFactor + Math.sin(time * 2) * 0.05 * scaleFactor;
        particles.rotation.y = time * 0.02;
      }
      
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
      document.body.style.cursor = 'default';
    };
  }, [hoveredElement, selectedElement, isAnimationPaused, cameraMode, windowSize, isFullscreen]);

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

  const canvasSize = getCanvasSize();
  
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

      {/* Main Hero Section - Enhanced Layout */}
      <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
        <div className="max-w-8xl mx-auto w-full">
          <div className={`grid ${isFullscreen ? 'lg:grid-cols-1' : 'lg:grid-cols-5'} gap-6 sm:gap-8 lg:gap-12 items-center`}>
            
            {/* Left Content - More Compact When Not Fullscreen */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={`${isFullscreen ? 'order-2 col-span-1' : 'order-1 lg:order-1 lg:col-span-2'} space-y-4 sm:space-y-6`}
            >
              {/* Brand Badge */}
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-black/5 rounded-full border border-black/10"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-black/70">Available for new projects</span>
              </motion.div>
              
              {/* Main Headline - Responsive Text Size */}
              <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
                <h1 className={`${isFullscreen ? 'text-4xl sm:text-5xl md:text-6xl' : 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'} font-bold leading-[0.9] tracking-tight font-space-grotesk`}>
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
                    className={`${isFullscreen ? 'text-lg sm:text-xl lg:text-2xl' : 'text-xl sm:text-2xl lg:text-3xl'} font-semibold text-black/70 font-inter`}
                  >
                    {textVariants[currentTextIndex]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
              
              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className={`${isFullscreen ? 'text-base lg:text-lg' : 'text-lg lg:text-xl'} text-black/60 leading-relaxed max-w-2xl font-inter`}
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
            
            {/* Right Visual - Massive Interactive 3D Scene */}
            <motion.div 
              ref={containerRef}
              className={`${isFullscreen ? 'order-1 col-span-1' : 'order-2 lg:order-2 lg:col-span-3'} relative flex items-center justify-center overflow-visible`}
              style={{ 
                height: isFullscreen ? '80vh' : `${canvasSize.height + 160}px`,
                minHeight: isFullscreen ? '600px' : '500px'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Enhanced Interactive Controls */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-4 border border-gray-200/50 shadow-xl">
                  <div className="flex items-center justify-between space-x-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Interactive Tech Architecture</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {cameraMode === 'manual' ? 'Mouse controls camera • Click elements to explore' : 'Auto-rotating • Click elements for details'}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setIsAnimationPaused(!isAnimationPaused)}
                        className="p-3 hover:bg-gray-100 rounded-xl transition-colors group"
                        title={isAnimationPaused ? "Play Animation" : "Pause Animation"}
                      >
                        {isAnimationPaused ? 
                          <Play className="w-5 h-5 text-gray-600 group-hover:text-green-600" /> : 
                          <Pause className="w-5 h-5 text-gray-600 group-hover:text-orange-600" />
                        }
                      </button>
                      <button
                        onClick={() => setCameraMode(cameraMode === 'auto' ? 'manual' : 'auto')}
                        className="p-3 hover:bg-gray-100 rounded-xl transition-colors group"
                        title={cameraMode === 'auto' ? "Manual Camera Control" : "Auto Camera Mode"}
                      >
                        <RotateCcw className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                      </button>
                      <button
                        onClick={() => setIsFullscreen(!isFullscreen)}
                        className="p-3 hover:bg-gray-100 rounded-xl transition-colors group"
                        title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                      >
                        {isFullscreen ? 
                          <Minimize2 className="w-5 h-5 text-gray-600 group-hover:text-purple-600" /> :
                          <Maximize2 className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                        }
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Massive 3D Canvas Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <canvas 
                  ref={canvasRef}
                  className="max-w-full max-h-full cursor-pointer rounded-2xl"
                  style={{ 
                    filter: 'drop-shadow(0 10px 30px rgba(59, 130, 246, 0.4))',
                    width: canvasSize.width,
                    height: canvasSize.height
                  }}
                />
                
                {/* Enhanced Interactive Overlays */}
                <div className="absolute inset-0 pointer-events-none">
                  
                  {/* Enhanced Color-coded Legend */}
                  

                  {/* Enhanced Dynamic Element Info Panel */}
                  <AnimatePresence>
                    {(hoveredElement || selectedElement) && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-28 left-1/2 transform -translate-x-1/2"
                      >
                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-2xl min-w-96 max-w-lg">
                          {(() => {
                            const activeElement = selectedElement || hoveredElement;
                            const info = techElementsInfo[activeElement];
                            if (!info) return null;
                            
                            return (
                              <div>
                                <div className="flex items-center space-x-4 mb-6">
                                  <div className={`p-4 rounded-2xl ${
                                    info.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                                    info.color === 'green' ? 'bg-green-100 text-green-600' :
                                    info.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                                    info.color === 'red' ? 'bg-red-100 text-red-600' :
                                    info.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                                    'bg-sky-100 text-sky-600'
                                  }`}>
                                    {React.createElement(info.icon, { className: "w-8 h-8" })}
                                  </div>
                                  <div>
                                    <h4 className="text-2xl font-bold text-gray-800">{info.title}</h4>
                                    <p className="text-base text-gray-600 mt-1">{info.desc}</p>
                                  </div>
                                </div>
                                
                                <div className="space-y-3">
                                  <h5 className="text-base font-bold text-gray-700">Key Features:</h5>
                                  <div className="grid grid-cols-2 gap-3">
                                    {info.details.map((detail, index) => (
                                      <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3"
                                      >
                                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                        <span className="text-sm font-medium text-gray-700">{detail}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                                
                                {selectedElement && (
                                  <div className="mt-6 pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-500 text-center">
                                      Click elsewhere to close • Move mouse to explore other components
                                    </p>
                                  </div>
                                )}
                              </div>
                            );
                          })()}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Enhanced Performance Metrics */}
                  

                  {/* Enhanced Interaction Hint */}
                  {!hoveredElement && !selectedElement && (
                    <motion.div
                      className="absolute bottom-8 right-8"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 4, duration: 0.5 }}
                    >
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 shadow-lg">
                        <div className="flex items-center space-x-3">
                          <Wifi className="w-6 h-6 text-blue-500 animate-pulse" />
                          <div>
                            <div className="text-base font-bold text-gray-800">Interactive Demo</div>
                            <div className="text-sm text-gray-600">Hover & click to explore</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

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