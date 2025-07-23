"use client";

import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";
import { Mesh, Object3D } from "three";

type ModelProps = {
  scrollY: number;
  isIdle: boolean;
};

function Model({ scrollY, isIdle }: ModelProps) {
  const gltf = useGLTF("/models/need_some_space.glb");
  const ref = useRef<Object3D>(null);

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (mesh.material && "metalness" in mesh.material && "roughness" in mesh.material) {
          (mesh.material as any).metalness = 0.5;
          (mesh.material as any).roughness = 0.5;
        }
      }
    });
  }, [gltf]);

  useFrame(() => {
    if (ref.current) {
      if (isIdle) {
        ref.current.rotation.y += 0.000002;
      } else {
        ref.current.rotation.y = scrollY * 0.0001;
        ref.current.position.y = -1 + scrollY * 0.0001;
      }
    }
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      scale={0.9}
      position={[2, 10, 0]}
    />
  );
}

export default function My3DModel() {
  const [scrollY, setScrollY] = useState(0);
  const [isIdle, setIsIdle] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      setScrollY(window.scrollY);
      setIsIdle(false);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsIdle(true);
      }, 1500);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: [3, 0, -1], fov: 35 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 7]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Suspense fallback={<Html></Html>}>
        <Model scrollY={scrollY} isIdle={isIdle} />
        <Environment preset="city" />
      </Suspense>
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
      >
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        minDistance={2}
        maxDistance={10}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
    </Canvas>
  );
}
