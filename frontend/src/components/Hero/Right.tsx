import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, TextureLoader } from "three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const Cube = () => {
  const cubeRef = useRef<Mesh>(null!);

  // Use a Matcap texture inside the Canvas context
  const matcapTexture = useLoader(TextureLoader, "/assets/matcaps/pngegg.png");

  useFrame(() => {
    if (cubeRef.current) {
      // cubeRef.current.rotation.x += 0.001;
      // cubeRef.current.rotation.z += 0.001;
      cubeRef.current.rotation.y += 0.01;
      // console.log("postion", cubeRef.current.position);
    }
  });

  return (
    <mesh ref={cubeRef}>
      <torusGeometry args={[2, 0.8, 16, 100]} />{" "}
      {/* radius, tube, radialSegments, tubularSegments */}
      <meshMatcapMaterial matcap={matcapTexture} />
    </mesh>
  );
};

const RotatingCube = () => {
  return (
    <div className="ml-[10vw] mt-[10vh]">
      <Canvas style={{ width: "450px", height: "450px" }}>
        {/* Camera controls */}
        <PerspectiveCamera makeDefault position={[0, 0, 4.5]} fov={75} />

        <OrbitControls enableZoom={false} />

        {/* Render the cube inside the Canvas */}
        <Cube />
      </Canvas>
    </div>
  );
};

export default RotatingCube;
