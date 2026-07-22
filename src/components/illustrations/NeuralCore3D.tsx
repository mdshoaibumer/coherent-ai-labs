'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Wireframe, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useTheme } from 'next-themes';

function NeuralSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  const isDark = theme === 'dark' || !theme;
  const color = isDark ? '#ffffff' : '#000000';
  const glowColor = isDark ? '#00c8ff' : '#0077ff';

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;

      // Procedural breathing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
      meshRef.current.scale.set(scale, scale, scale);
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = state.clock.elapsedTime * -0.15;
      wireframeRef.current.rotation.x = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.8}>
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
          wireframeLinewidth={0.5}
          transparent
          opacity={0.15}
        />
      </Sphere>
      <Sphere ref={wireframeRef} args={[1.2, 32, 32]} scale={1.6}>
        <meshStandardMaterial
          color={glowColor}
          roughness={0.1}
          metalness={0.9}
          wireframe={true}
          transparent
          opacity={0.08}
        />
      </Sphere>
    </group>
  );
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark' || !theme;

  const [positions, mathColors] = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const isAccent = Math.random() > 0.8;
      if (isAccent) {
        color.set(isDark ? '#00c8ff' : '#0055ff');
      } else {
        color.set(isDark ? '#ffffff' : '#000000');
      }
      color.toArray(colors, i * 3);
    }
    return [positions, colors];
  }, [isDark]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={mathColors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={isDark ? 0.05 : 0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

export function NeuralCore3D() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00c8ff" />
        <NeuralSphere />
        <ParticleField />
      </Canvas>
    </div>
  );
}
