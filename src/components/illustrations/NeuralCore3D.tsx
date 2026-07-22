'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useTheme } from 'next-themes';

/**
 * IntelligenceMesh — A living computational topology
 * representing agent orchestration and distributed reasoning.
 *
 * Visual concept: An abstract knowledge graph with layered
 * orbital structures, pulsing data nodes, and architectural
 * connection paths. Not a sphere, not particles — a system.
 */

function IntelligenceNodes({ isDark }: { isDark: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const innerRef = useRef<THREE.Points>(null);
  const outerRef = useRef<THREE.Points>(null);

  // Generate a structured knowledge-graph-like topology
  const { positions, nodePositions, outerPositions } = useMemo(() => {
    const coreNodes: THREE.Vector3[] = [];
    const outerNodes: THREE.Vector3[] = [];

    // Core cluster — tight, structured (represents reasoning core)
    const coreCount = 24;
    for (let i = 0; i < coreCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / coreCount);
      const theta = Math.sqrt(coreCount * Math.PI) * phi;
      const radius = 1.6 + (Math.random() - 0.5) * 0.3;

      coreNodes.push(
        new THREE.Vector3(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi),
        ),
      );
    }

    // Outer constellation — wider, sparser (represents distributed agents)
    const outerCount = 18;
    for (let i = 0; i < outerCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / outerCount);
      const theta = Math.sqrt(outerCount * Math.PI) * phi;
      const radius = 3.2 + (Math.random() - 0.5) * 0.8;

      outerNodes.push(
        new THREE.Vector3(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi),
        ),
      );
    }

    // Connections: core-to-core (close proximity) + core-to-outer (selective)
    const linePositions: number[] = [];
    const coreThreshold = 1.8;

    for (let i = 0; i < coreNodes.length; i++) {
      for (let j = i + 1; j < coreNodes.length; j++) {
        if (coreNodes[i].distanceTo(coreNodes[j]) < coreThreshold) {
          linePositions.push(
            coreNodes[i].x,
            coreNodes[i].y,
            coreNodes[i].z,
            coreNodes[j].x,
            coreNodes[j].y,
            coreNodes[j].z,
          );
        }
      }
    }

    // Selective bridges from core to outer
    for (let i = 0; i < outerNodes.length; i++) {
      let closest = 0;
      let closestDist = Infinity;
      for (let j = 0; j < coreNodes.length; j++) {
        const d = outerNodes[i].distanceTo(coreNodes[j]);
        if (d < closestDist) {
          closestDist = d;
          closest = j;
        }
      }
      linePositions.push(
        coreNodes[closest].x,
        coreNodes[closest].y,
        coreNodes[closest].z,
        outerNodes[i].x,
        outerNodes[i].y,
        outerNodes[i].z,
      );
    }

    const flatCore = new Float32Array(coreNodes.length * 3);
    coreNodes.forEach((n, i) => {
      flatCore[i * 3] = n.x;
      flatCore[i * 3 + 1] = n.y;
      flatCore[i * 3 + 2] = n.z;
    });

    const flatOuter = new Float32Array(outerNodes.length * 3);
    outerNodes.forEach((n, i) => {
      flatOuter[i * 3] = n.x;
      flatOuter[i * 3 + 1] = n.y;
      flatOuter[i * 3 + 2] = n.z;
    });

    return {
      positions: new Float32Array(linePositions),
      nodePositions: flatCore,
      outerPositions: flatOuter,
    };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime;
      groupRef.current.rotation.y = t * 0.03;
      groupRef.current.rotation.x = Math.sin(t * 0.015) * 0.08;
    }
  });

  const lineColor = isDark ? '#ffffff' : '#000000';
  const nodeColor = isDark ? '#ffffff' : '#0a0a0a';

  return (
    <group ref={groupRef}>
      {/* Connection paths */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color={lineColor}
          transparent
          opacity={isDark ? 0.06 : 0.04}
          linewidth={1}
        />
      </lineSegments>

      {/* Core nodes — denser, brighter */}
      <points ref={innerRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={nodeColor}
          transparent
          opacity={isDark ? 0.6 : 0.35}
          size={0.05}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Outer constellation nodes — dimmer, larger */}
      <points ref={outerRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[outerPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={nodeColor}
          transparent
          opacity={isDark ? 0.3 : 0.15}
          size={0.04}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Central intelligence core — octahedron wireframe */}
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.2}>
        <mesh>
          <octahedronGeometry args={[0.35, 0]} />
          <meshPhysicalMaterial
            color={isDark ? '#fafafa' : '#111111'}
            roughness={0.1}
            metalness={0.95}
            transparent
            opacity={isDark ? 0.12 : 0.06}
            wireframe
          />
        </mesh>
      </Float>

      {/* Inner orbital — tight, fast */}
      <Float speed={0.6} rotationIntensity={0.08} floatIntensity={0.15}>
        <mesh rotation={[Math.PI / 5, 0, Math.PI / 7]}>
          <torusGeometry args={[1.2, 0.004, 6, 80]} />
          <meshBasicMaterial color={lineColor} transparent opacity={isDark ? 0.1 : 0.05} />
        </mesh>
      </Float>

      {/* Middle orbital */}
      <mesh rotation={[-Math.PI / 4, Math.PI / 3, 0]}>
        <torusGeometry args={[2.2, 0.003, 6, 96]} />
        <meshBasicMaterial color={lineColor} transparent opacity={isDark ? 0.06 : 0.03} />
      </mesh>

      {/* Outer orbital — wide, slow */}
      <mesh rotation={[Math.PI / 6, -Math.PI / 5, Math.PI / 8]}>
        <torusGeometry args={[3.4, 0.002, 6, 120]} />
        <meshBasicMaterial color={lineColor} transparent opacity={isDark ? 0.04 : 0.02} />
      </mesh>
    </group>
  );
}

function AmbientField({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 150;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.008;
      ref.current.rotation.x -= delta * 0.003;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={isDark ? '#ffffff' : '#000000'}
        transparent
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        opacity={isDark ? 0.12 : 0.06}
      />
    </points>
  );
}

export function NeuralCore3D() {
  const prefersReducedMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 28 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={isDark ? 0.2 : 0.6} />
        <directionalLight position={[5, 5, 5]} intensity={isDark ? 0.3 : 0.5} />
        <IntelligenceNodes isDark={isDark} />
        <AmbientField isDark={isDark} />
      </Canvas>
    </div>
  );
}
