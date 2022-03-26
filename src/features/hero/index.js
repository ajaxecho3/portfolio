import React, { useRef, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from './hero.module.css';
import profile from '../../assets/pictures/profile2.png'
import { Canvas, useFrame } from '@react-three/fiber'
function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
export default function Hero(props) {

  return (
    <div id={props.id} className={style.hero__container}>
      <Container>
        <div className={`${style.hero__content} position-relative`} >
          <div className='position-relative top-50 start-50 translate-middle'>
            <Row>
              <Col sm={6}>
                <Row><h2>Hello, Welcome to my portfolio</h2></Row>
                <Row><h3> I'm Bernard nice to have you here</h3></Row>
                <Row><h3> and also i'm glad you visit here.</h3></Row>
              </Col>
              <Col sm={6}>

                <img src={profile} alt="profile" style={{ position: "relative", zIndex: 3 }} />

              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  )
}
