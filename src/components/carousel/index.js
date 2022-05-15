import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import './carousel.css'
export default function Carousel(props) {
  const [width, setWidth] = useState(0)
  const ref = useRef();

  useEffect(() => {
    setWidth(ref.current.scrollWidth - ref.current.offsetWidth)
  }, [])
  return (
    <motion.div ref={ref} className='carousel'>
      <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} whileTap={{ cursor: "grabbing" }} className='inner-carousel'>

        {[...Array(5)].map((item, index) => (
          <motion.div whileHover={{ scale: 1.1 }} key={index} className='item'>
            <motion.div className='content'>

            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
