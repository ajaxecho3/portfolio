import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Ufo.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.04}>
        <group position={[-4.01, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh.geometry}
            material={materials.gris}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1.geometry}
            material={materials.Top}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_2.geometry}
            material={nodes.Mesh_2.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_3.geometry}
            material={materials.lumiere}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.grid.geometry}
          material={nodes.grid.material}
        />
        <group position={[-4.01, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh002.geometry}
            material={nodes.Mesh002.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_1.geometry}
            material={materials.red}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003.geometry}
          material={nodes.Mesh003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_1.geometry}
          material={materials.PLots}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
      />
    </group>
  );
}

useGLTF.preload("/Ufo.glb");