import React, { useRef } from 'react';
import { MathUtils } from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { MeshDistortMaterial, Instances, Instance, Box } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Particles from '../../utils/particle_generator';



export function DistortedCircle({ factor, speed, xFactor, yFactor, zFactor, texture }) {
  const ref = useRef()
  const colorMap = useLoader(TextureLoader, texture)
  useFrame((state) => {
    const t = factor + state.clock.elapsedTime * (speed / 2)
    ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 5))
    ref.current.position.set(
      Math.cos(t) + Math.sin(t * 1) / 10 + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
      Math.sin(t) + Math.cos(t * 2) / 10 + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
      Math.sin(t) + Math.cos(t * 2) / 10 + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
    )
  })
  return (<Instance ref={ref}>
    <Box>
      <meshStandardMaterial map={colorMap} />
    </Box>
  </Instance>)
}

export function DistortedCircles(props) {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 2.75, delta);
    ref.current.rotation.x = MathUtils.damp(ref.current.rotation.x, (-state.mouse.y * Math.PI) / 6, 2.75, delta);
  }
  );

  return (
    <Instances limit={Particles(11).length} ref={ref} castShadow receiveShadow position={[0, 10, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial
        color="#a8ccd7"
        attach="material"
        distort={0.5} // Strength, 0 disables the effect (default=1)
        speed={2} // Speed (default=1)
        roughness={0}
        thickness={0}
        clearcoat={0.2}
        clearcoatRoughness={0.2}
        transmission={1}
        attenuationTint='#a8ccd7'
        envMapIntensity={25}
        ior={1.25} />
      {Particles(11).map((data, i) => (
        <DistortedCircle key={i} texture={`${i}.png`} {...data} />
      ))}
    </Instances>
  );
}

