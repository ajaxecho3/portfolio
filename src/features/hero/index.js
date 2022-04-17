import React, { useRef, Suspense } from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
import { MathUtils } from 'three'
import style from './hero.module.css';
import { motion } from 'framer-motion';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { MeshDistortMaterial, Html, Instance, Instances, Box } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import WaveDivider from '../../components/wavedivider';
const particles = Array.from({ length: 11 }, () => ({
  factor: MathUtils.randInt(20, 100),
  speed: MathUtils.randFloat(0.03, 1),
  xFactor: MathUtils.randFloatSpread(80),
  yFactor: MathUtils.randFloatSpread(40),
  zFactor: MathUtils.randFloatSpread(40),

}))
const particles2 = Array.from({ length: 5 }, () => ({
  factor: MathUtils.randInt(20, 100),
  speed: MathUtils.randFloat(0.03, 1),
  xFactor: MathUtils.randFloatSpread(80),
  yFactor: MathUtils.randFloatSpread(40),
  zFactor: MathUtils.randFloatSpread(40)


}))

export default function Hero(props) {
  return (
    <div>
      <motion.div id={props.id} className={`${style.hero__container}`}>
        <Canvas style={{ position: "absolute" }} shadows dpr={[1, 2]} gl={{ antialias: false }} camera={{ fov: 70, position: [0, 0, 60], near: 10, far: 150 }}>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <HtmlContent />
            <group>
              {/* <SphereShell /> */}
              <DistortedCircles />
            </group>
          </Suspense>
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[0, -10, 5]} intensity={1} />
        </Canvas>

      </motion.div>
      <WaveDivider />

      <motion.div id={props.id} className={`${style.hero__container2}`}>


      </motion.div>
    </div>
  )
}



function DistortedCircles(props) {
  const ref = useRef()
  console.log("dcs", ref)
  useFrame((state, delta) => {
    ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 2.75, delta)
    ref.current.rotation.x = MathUtils.damp(ref.current.rotation.x, (-state.mouse.y * Math.PI) / 6, 2.75, delta)
  }
  )

  return (
    <Instances limit={particles.length} ref={ref} castShadow receiveShadow position={[0, 10, 0]}>
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
        ior={1.25}
      />
      {particles.map((data, i) => (
        <DistortedCircle key={i} texture={`${i}.png`} {...data} />
      ))}
    </Instances>
  )
}

function DistortedCircle({ factor, speed, xFactor, yFactor, zFactor, texture }) {
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

// eslint-disable-next-line no-unused-vars
function SphereShell(props) {
  const ref = useRef()

  console.log("dcs", ref)
  useFrame((state, delta) => {
    ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 2.75, delta)
    ref.current.rotation.x = MathUtils.damp(ref.current.rotation.x, (-state.mouse.y * Math.PI) / 6, 2.75, delta)
  }
  )

  return (
    <Instances limit={particles2.length} ref={ref} castShadow receiveShadow position={[0, 10, 0]}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshNormalMaterial
        color="#FFFFFF"
        attach="material"
        scale={0.1}
      // roughness={0}
      // thickness={0}
      // clearcoat={0.3}
      // clearcoatRoughness={0}
      // transmission={1}
      // attenuationTint='#FFFFFF'
      // envMapIntensity={25}
      // ior={25}
      />
      {particles2.map((data, i) => (
        <Cube key={i} {...data} />
      ))}
    </Instances>
  )
}
function Cube({ factor, speed, xFactor, yFactor, zFactor }) {
  const ref = useRef()
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

  </Instance>)
}


// eslint-disable-next-line no-unused-vars
const HtmlContent = () => {
  const ref = useRef()
  console.log("REF", ref)
  return (
    <group ref={ref} >
      <Html fullscreen>
        <div className={` container position-absolute top-50 start-50 translate-middle`} style={{ color: 'white' }} >
          <div className={`row container`}>
            <div className='col p-2'>
              <div className={`row`}>
                <motion.p style={{ color: '#404040', fontSize: "3rem", marginBottom: 0 }}>
                  Hello, I'm
                </motion.p>
                <motion.p style={{ color: "#F1C64A", fontSize: "10rem", marginBottom: 0, lineHeight: "125px" }}>
                  Bernardino Ochoa
                </motion.p>
                <motion.p style={{ fontSize: "3rem", marginBottom: 0 }}>
                  A <span style={{ color: '#404040' }}><span>&#60;</span>Frontend Developer<span>/&#62;</span></span>
                </motion.p>
              </div>
              <div className={`row`}>

              </div>
            </div>
            <div className='col'>
            </div>
          </div>

        </div>
      </Html>
    </group>
  )
}
