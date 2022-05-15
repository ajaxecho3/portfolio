import React, { Suspense } from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
import style from './hero.module.css';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber'
import Carousel from '../../components/carousel';

// import { SphereShell } from '../../components/sphereshell';
// import { HtmlContent } from '../../components/@htmlcontent';

export default function Hero(props) {

  return (
    <div id={props.id} className="container-fluid p-0">
      {/* Hero */}
      <motion.div style={{ height: "100vh" }} className={`${style.hero__container}`}>
        <div className={` container position-absolute top-50 start-50 translate-middle`} style={{ color: 'white' }} >
          <div className={`row container`}>
            <div className='col p-2'>
              <div className={`row`}>
                <motion.p style={{ color: '#404040', fontSize: "3rem", marginBottom: 0 }}>
                  Hello, I'm
                </motion.p>
                <motion.p style={{ color: "#404040", fontSize: "10rem", marginBottom: 0, lineHeight: "125px" }}>
                  Bernardino Ochoa
                </motion.p>
                <motion.p style={{ fontSize: "3rem", marginBottom: 0 }}>
                  <span style={{ color: '#404040' }}><span>&#60;</span>Frontend Developer<span>/&#62;</span></span>
                </motion.p>
              </div>
              <div className={`row`}>
              </div>
            </div>
            <div className='col'>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Playground */}
      <motion.div style={{ background: "#404040" }} className={`${style.hero__container}`}>
        <motion.div className='container py-4'>
          <motion.div className={`row `}>
            <motion.div className='col'>
              <motion.h2>
                <span style={{ color: '#FCAF3C' }}><span>&#60;</span>Playground<span>/&#62;</span></span>
              </motion.h2>
              <motion.p>
                <span style={{ color: '#FCAF3C' }}>Interactive content here</span>
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div className={`row py-4`}>
            <motion.div className='col'>
              <motion.div style={{ background: "#FCAF3C", width: "100%" }}>
                <motion.div className={`row `}>
                  <motion.div className='col'>

                  </motion.div>
                  <motion.div className='col'>
                    <Canvas >
                      <ambientLight intensity={0.5} />
                      <Suspense fallback={null}>

                      </Suspense>
                    </Canvas>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className={`row py-4`}>
            <motion.div className='col'>
              <motion.div style={{ background: "#FCAF3C", width: "100%" }}>
                <motion.div className={`row `}>
                  <motion.div className='col'>

                  </motion.div>
                  <motion.div className='col'>
                    <Canvas >
                      <ambientLight intensity={0.5} />
                      <Suspense fallback={null}>

                      </Suspense>
                    </Canvas>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className={`row py-4`}>
            <motion.div className='col'>
              <motion.button style={{ background: "transparent", color: "#FCAF3C", fontSize: "20px" }}>
                See more
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Projects */}
      <motion.div style={{ background: "#404040" }} className={`${style.hero__container}`}>
        <motion.div className='container py-4'>
          <motion.div className={`row`}>
            <motion.div className='col'>
              <motion.h2>
                <span style={{ color: '#FCAF3C' }}><span>&#60;</span>Projects<span>/&#62;</span></span>
              </motion.h2>
              <motion.p>
                <span style={{ color: '#FCAF3C' }}>Featured content here</span>
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div className={`row py-4`}>
            <motion.div className='col'>
              <Carousel />
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.div>
      {/* About Me */}
      <motion.div style={{ background: "#404040" }} className={`${style.hero__container}`}>
        <motion.div className='container py-4'>
          <motion.div className={`row`}>
            <motion.div className='col'>
              <motion.h3>
                <span style={{ color: '#FCAF3C' }}><span>&#60;</span>About Me<span>/&#62;</span></span>
              </motion.h3>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

    </div>
  )
}
/* <Canvas style={{ position: "absolute" }} shadows dpr={[1, 2]} gl={{ antialias: false }} camera={{ fov: 70, position: [0, 0, 60], near: 10, far: 150 }}>
  <ambientLight intensity={0.5} />
  <Suspense fallback={null}>
    <HtmlContent>
    </HtmlContent>
    <group>
      <SphereShell size={1} />
    </group>
  </Suspense>
  <directionalLight position={[10, 10, 5]} intensity={1} />
  <pointLight position={[0, -10, 5]} intensity={1} />
</Canvas> */