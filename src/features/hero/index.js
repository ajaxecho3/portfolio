import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from './hero.module.css';


export default function Hero(props) {
  return (
    <div id={props.id} className={style.hero__container}>
      <Container>
        <div className={`${style.hero__content} position-relative`} >
          <div className='position-relative top-50 start-50 translate-middle'>
            <Row>
              <Col sm={8}>
                <Row><h2>Hello, Welcome to my portfolio</h2></Row>
                <Row><h3> I'm Bernard nice to have you here</h3></Row>
                <Row><h3> I'm glad that you visit</h3></Row>
              </Col>
              <Col sm={4}>

              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  )
}
