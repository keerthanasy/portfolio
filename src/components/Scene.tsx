'use client';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import * as THREE from 'three';

function Particles({ count = 800 }) {
    const points = useRef<THREE.Points>(null);
    const { viewport } = useThree();
    const texture = useLoader(THREE.TextureLoader, '/particleMask.jpeg');

    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * viewport.width * 2;
            positions[i * 3 + 1] = (Math.random() - 0.5) * viewport.height * 2;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, [count, viewport]);

    useFrame((state) => {
        // Optional: Slow rotation of the entire particle system
        if (points.current) {
            points.current.rotation.y += 0.0002;
            points.current.rotation.x += 0.0001;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.1}
                color="#5b82f6"
                alphaMap={texture}
                transparent
                depthWrite={false}
            // blending={THREE.AdditiveBlending} // Optional: for glow effect
            />
        </points>
    );
}

export default function Scene() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-[var(--background)]">
            <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} camera={{ position: [0, 0, 8], fov: 45 }}>
                {/* Lighting */}
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />

                {/* Environment for reflections */}
                <Environment preset="city" />

                <Suspense fallback={null}>
                    <Particles />
                </Suspense>

                {/* Fog for depth */}
                <fog attach="fog" args={['#050505', 5, 20]} />
            </Canvas>
        </div>
    );
}
