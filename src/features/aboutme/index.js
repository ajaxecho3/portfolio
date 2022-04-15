import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
import style from './about.module.css';
import { motion } from 'framer-motion';


export default function About(props) {

  return (
    <motion.div id={props.id} className={style.about__container}>
      <motion.div className={`container`}>

      </motion.div>

    </motion.div>
  )
}
