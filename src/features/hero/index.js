import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from './hero.module.css';
import profile from '../../assets/pictures/profile2.png'
import { motion } from 'framer-motion';

export default function Hero(props) {

  return (
    <div id={props.id} className={style.hero__container}>
      <Container>
        <div className={`${style.hero__content} position-relative`} >
          <div className='position-relative top-50 start-50 translate-middle'>
            <Row>
              <Col sm={6}>
                <Row><h2>Hello, I'm Bernard nice</h2></Row>
                <Row><h3> I'm glad you visit here.</h3></Row>
                <Row><h5> Frontend Developer</h5></Row>
                <br />
                <Row>
                  <Col sm={4}>
                    <motion.button
                      className={style.hero__about_btn}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}>
                      About me
                    </motion.button>
                  </Col>
                  <Col sm={4}>
                    <motion.button
                      className={style.hero__download_btn}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}>
                      Download CV
                    </motion.button>
                  </Col>
                </Row>

              </Col>
              <Col sm={6}>

                <img src={profile} alt="profile" style={{ height: "100%", width: "100%" }} />

              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  )
}
