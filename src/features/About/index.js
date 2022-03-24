import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import style from './about.module.css'
export default function About(props) {
  return (
    <div id={props.id} className={style.about__container}>
      <Container>
        <Row >
          <Col className='d-flex justify-content-center' sm>
            <Row>
              <Col sm={1}><FaLinkedin /></Col>
              <Col sm="auto">linkedin.com/in/bernard-ochoa</Col>
            </Row>
          </Col>
          <Col className='d-flex justify-content-center' sm>
            <Row>
              <Col sm={1}><FaGithub /></Col>
              <Col sm="auto">github.com/ajaxecho3</Col>
            </Row>
          </Col>
          <Col className='d-flex justify-content-center' sm>
            <Row>
              <Col sm={1}><SiGmail /></Col>
              <Col sm="auto">ajaxecho3@gmail.com</Col>
            </Row>
          </Col>
          <Col className='d-flex justify-content-center' sm>
            <Row>
              <Col sm={1}><FaPhoneAlt /></Col>
              <Col sm="auto">+639560716921</Col>
            </Row>
          </Col>
        </Row>

      </Container>
    </div>
  )
}
