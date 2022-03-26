import React from 'react'
import { Container } from 'react-bootstrap'
import style from './works.module.css'
import { motion } from "framer-motion"
export default function Works(props) {
  return (
    <motion.div id={props.id} className={`${style.work__container}`} >
      <Container>

      </Container>
    </motion.div>
  )
}
