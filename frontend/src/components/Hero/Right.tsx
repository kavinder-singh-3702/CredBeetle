import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import { div } from "framer-motion/client";

const Cube = () => {
  const cubeRef = useRef<Mesh>(null!);

  // Use a Matcap texture inside the Canvas context
  const matcapTexture = useLoader(TextureLoader, "/assets/matcaps/pngegg.png");

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.001;
      // console.log("postion", cubeRef.current.position);
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshMatcapMaterial matcap={matcapTexture} />
    </mesh>
  );
};

const RotatingCube = () => {
  return (
    <div className="ml-[18vw] mt-[10vh]">
      <Canvas style={{ width: "400px", height: "400px" }}>
        {/* Camera controls */}
        <OrbitControls enableZoom={false} />

        {/* Render the cube inside the Canvas */}
        <Cube />
      </Canvas>
    </div>
  );
};

export default RotatingCube;
