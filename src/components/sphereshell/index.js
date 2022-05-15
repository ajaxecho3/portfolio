import React, { useRef } from 'react';
import { MathUtils } from 'three';
import { useFrame } from '@react-three/fiber';
import { Instances } from '@react-three/drei';
import Particles from '../../utils/particle_generator';
import { Cube } from "../cube";

export function SphereShell({ size }) {
  const ref = useRef();

  console.log("dcs", ref);
  useFrame((state, delta) => {
    ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 2.75, delta);
    ref.current.rotation.x = MathUtils.damp(ref.current.rotation.x, (-state.mouse.y * Math.PI) / 6, 2.75, delta);
  }
  );

  return (
    <Instances limit={Particles(size).length} ref={ref} castShadow receiveShadow position={[0, 10, 0]}>
      <boxBufferGeometry args={[0, 0, 0]} />
      <meshStandardMaterial
        color="#404040"
        attach="material"
        scale={0} />

      {Particles(size).map((data, i) => (
        <Cube key={i} {...data} />
      ))}
    </Instances>
  );
}
