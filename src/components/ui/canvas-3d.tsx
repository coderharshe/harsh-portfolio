'use client';

import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 3D Mesh Component reacting to mouse coordinate physics
function GlowingMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const targetRotation = useRef({ x: 0, y: 0 });

  // Monitor mouse movements to tilt the shape
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      targetRotation.current = { x: y * 0.5, y: x * 0.5 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Slow organic idle rotation
    meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.x += 0.002;

    // Smooth physics damping interpolation towards target coordinates
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotation.current.x, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotation.current.y, 0.05);

    // Floating translation wave
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.2;
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1.0}
    >
      {/* 3D Torus Knot representing connected AI nodes */}
      <torusKnotGeometry args={[1.5, 0.45, 120, 16, 2, 3]} />
      <MeshDistortMaterial
        color={hovered ? '#8B5CF6' : '#3B82F6'}
        attach="material"
        distort={0.2}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
      />
    </mesh>
  );
}

export default function Canvas3D() {
  const [isSupported, setIsSupported] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Safely verify WebGL compatibility before loading Canvas
  useEffect(() => {
    setIsMounted(true);
    try {
      const canvas = document.createElement('canvas');
      const glSupported = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setIsSupported(glSupported);
    } catch {
      setIsSupported(false);
    }
  }, []);

  if (!isMounted) return null;

  // Render SVG fallback if WebGL is unavailable or on low-end devices
  if (!isSupported) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 select-none">
        <svg width="250" height="250" viewBox="0 0 100 100" className="animate-pulse">
          <circle cx="50" cy="50" r="40" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <polygon points="50,15 80,35 80,65 50,85 20,65 20,35" stroke="#8B5CF6" strokeWidth="0.5" fill="none" />
          <path d="M50,15 L50,85 M20,35 L80,65 M20,65 L80,35" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#3B82F6" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8B5CF6" />
        <Suspense fallback={null}>
          <GlowingMesh />
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 2.2} />
        </Suspense>
      </Canvas>
    </div>
  );
}
