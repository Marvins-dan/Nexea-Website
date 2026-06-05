"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Sphere, Line, Stars, Float, Torus } from "@react-three/drei";
import * as THREE from "three";

function NetworkNodes() {
  const group = useRef<THREE.Group>(null);
  const mouse = useRef(new THREE.Vector2());

  // Generate random nodes
  const nodes = useMemo(() => {
    return Array.from({ length: 50 }).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10 - 5
      ),
      speed: Math.random() * 0.02 + 0.01,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  // Generate connections
  const lines = useMemo(() => {
    const l = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].position.distanceTo(nodes[j].position) < 4) {
          l.push([nodes[i].position, nodes[j].position]);
        }
      }
    }
    return l;
  }, [nodes]);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      
      // Update mouse interaction gently
      mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, (state.pointer.x * Math.PI) / 10, 0.05);
      mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, (state.pointer.y * Math.PI) / 10, 0.05);
      
      group.current.position.x = mouse.current.x * 2;
      group.current.position.y = mouse.current.y * 2;
    }
  });

  return (
    <group ref={group}>
      {nodes.map((node, i) => (
        <Sphere key={i} args={[0.05, 16, 16]} position={node.position}>
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.6} />
        </Sphere>
      ))}
      {lines.map((line, i) => (
        <Line
          key={i}
          points={line as [THREE.Vector3, THREE.Vector3]}
          color="white"
          transparent
          opacity={0.05}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <fog attach="fog" args={["#000", 10, 30]} />
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Torus args={[3, 0.05, 16, 100]} position={[-4, 2, -5]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
            <meshBasicMaterial color="#0044ff" transparent opacity={0.2} wireframe />
          </Torus>
          <Torus args={[5, 0.02, 16, 100]} position={[5, -3, -8]} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
            <meshBasicMaterial color="#3b82f6" transparent opacity={0.15} wireframe />
          </Torus>
        </Float>
        <NetworkNodes />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
    </div>
  );
}
