import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
import style from './about.module.css';
import { motion } from 'framer-motion';


export default function About(props) {

  return (
    <motion.div id={props.id} className={style.about__container}>
      <motion.div className={`container p-5`}>
        <motion.div className={`row `}>
          <motion.div className={`col`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </motion.div>
        </motion.div>
      </motion.div>

    </motion.div>
  )
}
