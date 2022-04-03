import React, { useState } from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
import style from './about.module.css';
import profile from '../../assets/pictures/profile.png'
import { AnimatePresence, motion } from 'framer-motion';


export default function About(props) {
  const [showShowAbout, setShowAbout] = useState(false)
  const container = {
    hidden: { x: -700, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };
  return (
    <motion.div id={props.id} className={style.about__container}>
      <motion.div className={`container`}>
        <motion.div className={`${style.about__content} position-relative`} >
          <motion.div className='position-relative '>
            <motion.div className={`row`}>
              <motion.div className={`col`} >
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  // whileHover={{ scale: 1.1 }}
                  // whileTap={{ scale: 0.9 }}
                  layoutId={1}
                  className={`${style.about__about_init_container}`}
                  onClick={() => setShowAbout(true)} >
                  <motion.div className='row'>
                    <motion.h2 >Hello! I'm</motion.h2>
                  </motion.div>
                  <motion.div className='row'>
                    <motion.h1 style={{ color: "#FCAF3C" }}> Bernardino Ochoa</motion.h1></motion.div>
                  <motion.div className='row'>
                    <motion.p> Frontend Developer that helps you to develop your client-facing idea with a more user-friendly interface.</motion.p>
                  </motion.div>
                </motion.div>

              </motion.div>
              <motion.div className=" col d-flex justify-content-center">
                <motion.img src={profile} alt="profile" className={`${style.about__profile_img} img-fluid`} />
              </motion.div>
              <AnimatePresence>
                {
                  showShowAbout && (
                    <motion.div layoutId={1} className={`${style.about__about_container} ${style.about__glassmorphism} clearfix`}>
                      <motion.div className={`${style.about__header} row`}>
                        <motion.div className='col-6'></motion.div>
                        <motion.div className='col-6 p-2'><motion.button className={`${style.hore__closebutton} float-end`} onClick={() => setShowAbout(false)}>Close</motion.button></motion.div>
                      </motion.div>
                      <motion.div>
                        <motion.h1>Coming soon....</motion.h1>
                      </motion.div>
                    </motion.div>
                  )
                }
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>

      </motion.div>

    </motion.div>
  )
}
