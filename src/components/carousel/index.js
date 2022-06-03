import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { projectList } from '../../utils/data/projects';
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

        {/* {[...Array(10)].map((item, index) => (
          <motion.div whileHover={{ scale: 1.1 }} key={index} className='item'>
            <motion.div className='content'>
              <motion.img style={{ borderRadius: "2rem" }} className='card-img img-fluid' src={`https://images.unsplash.com/photo-1592289701772-4a4a8949f8ba?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387`} alt="..." />
              <motion.div className="card-img-overlay container">
                <motion.div className="position-relative top-50 start-50 translate-middle">
                  <motion.h5 className="card-title">Card title</motion.h5>
                  <motion.p className="card-text">Last updated 3 mins ago</motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))} */}
        {
          projectList.length !== 0 && projectList.map((item, index) => (
            <motion.div whileHover={{ scale: 1.1 }} key={index} className='item'>
              <motion.div className='content'>
                <motion.img style={{ borderRadius: "2rem" }} className='card-img img-fluid' src={`https://images.unsplash.com/photo-1592289701772-4a4a8949f8ba?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387`} alt="..." />
                <motion.div className="card-img-overlay container">
                  <motion.div className="position-relative top-50 start-50 translate-middle">
                    <motion.h5 className="card-title">Card title</motion.h5>
                    <motion.p className="card-text">Last updated 3 mins ago</motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))
        }
        {
          projectList.length === 0 && (
            <motion.div> No Content Available </motion.div>
          )
        }
      </motion.div>
    </motion.div>
  )
}
