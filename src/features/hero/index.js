import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from './hero.module.css';
import profile from '../../assets/pictures/profile.png'
import { motion } from 'framer-motion';


export default function Hero(props) {

  return (
    <div id={props.id} className={style.hero__container}>
      <Container>
        <div className={`${style.hero__content} position-relative`} >
          <div className='position-relative top-50 start-50 translate-middle'>
            <Row>
              <Col sm={6}>
                <Row><h1 >Hello! I'm</h1></Row>
                <Row><h1 style={{ color: "#FCAF3C" }}> Bernardino Ochoa</h1></Row>
                <Row><p> Frontend Developer that helps you to develop your client-facing idea with a more user-friendly interface.</p></Row>
                <Row>
                  <Col sm={4}>
                    <motion.button
                      className={style.hero__about_btn}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}>
                      more about me
                    </motion.button>
                  </Col>
                </Row>
              </Col>
              <Col sm={6}>
                <img src={profile} alt="profile" className='img-fluid' />
              </Col>
            </Row>
          </div>
        </div>

      </Container>
      <div className={style.wave_divider}>
        <motion.svg data-name="Layer 1"
          viewBox="0 0 900 600"

          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          preserveAspectRatio="none">
          <motion.path
            animate={{
              d: [
                "M0 499L18.8 493.7C37.7 488.3 75.3 477.7 112.8 481.2C150.3 484.7 187.7 502.3 225.2 509C262.7 515.7 300.3 511.3 337.8 500.5C375.3 489.7 412.7 472.3 450.2 465.2C487.7 458 525.3 461 562.8 465.2C600.3 469.3 637.7 474.7 675.2 482.7C712.7 490.7 750.3 501.3 787.8 502.3C825.3 503.3 862.7 494.7 881.3 490.3L900 486L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z",
                "M0 477L18.8 482.5C37.7 488 75.3 499 112.8 497.8C150.3 496.7 187.7 483.3 225.2 475.2C262.7 467 300.3 464 337.8 469.2C375.3 474.3 412.7 487.7 450.2 490C487.7 492.3 525.3 483.7 562.8 477.3C600.3 471 637.7 467 675.2 469.3C712.7 471.7 750.3 480.3 787.8 478.8C825.3 477.3 862.7 465.7 881.3 459.8L900 454L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z",
                "M0 487L18.8 484.7C37.7 482.3 75.3 477.7 112.8 473C150.3 468.3 187.7 463.7 225.2 461.7C262.7 459.7 300.3 460.3 337.8 462.7C375.3 465 412.7 469 450.2 476.5C487.7 484 525.3 495 562.8 497.5C600.3 500 637.7 494 675.2 493.5C712.7 493 750.3 498 787.8 495.5C825.3 493 862.7 483 881.3 478L900 473L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z",
                "M0 499L18.8 493.7C37.7 488.3 75.3 477.7 112.8 481.2C150.3 484.7 187.7 502.3 225.2 509C262.7 515.7 300.3 511.3 337.8 500.5C375.3 489.7 412.7 472.3 450.2 465.2C487.7 458 525.3 461 562.8 465.2C600.3 469.3 637.7 474.7 675.2 482.7C712.7 490.7 750.3 501.3 787.8 502.3C825.3 503.3 862.7 494.7 881.3 490.3L900 486L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z",

              ]
            }}
            transition={{
              repeat: Infinity,
              ease: "easeInOut",
              duration: 3,
              times: [0, 0.16, 0.33],
            }}
            opacity=".25"
            class="shape-fill">
          </motion.path>
          <motion.path
            animate={{
              d: [
                "M0 523L18.8 521C37.7 519 75.3 515 112.8 510.7C150.3 506.3 187.7 501.7 225.2 499.8C262.7 498 300.3 499 337.8 499.5C375.3 500 412.7 500 450.2 507.7C487.7 515.3 525.3 530.7 562.8 538.3C600.3 546 637.7 546 675.2 543.5C712.7 541 750.3 536 787.8 535.7C825.3 535.3 862.7 539.7 881.3 541.8L900 544L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z",
                "M0 541L18.8 541.3C37.7 541.7 75.3 542.3 112.8 534.5C150.3 526.7 187.7 510.3 225.2 511.2C262.7 512 300.3 530 337.8 531.7C375.3 533.3 412.7 518.7 450.2 510C487.7 501.3 525.3 498.7 562.8 504.8C600.3 511 637.7 526 675.2 530.7C712.7 535.3 750.3 529.7 787.8 528.3C825.3 527 862.7 530 881.3 531.5L900 533L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z",
                "M0 510L18.8 509.7C37.7 509.3 75.3 508.7 112.8 513.3C150.3 518 187.7 528 225.2 525.5C262.7 523 300.3 508 337.8 503.8C375.3 499.7 412.7 506.3 450.2 508.5C487.7 510.7 525.3 508.3 562.8 506.8C600.3 505.3 637.7 504.7 675.2 505C712.7 505.3 750.3 506.7 787.8 508.7C825.3 510.7 862.7 513.3 881.3 514.7L900 516L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z",
                "M0 523L18.8 521C37.7 519 75.3 515 112.8 510.7C150.3 506.3 187.7 501.7 225.2 499.8C262.7 498 300.3 499 337.8 499.5C375.3 500 412.7 500 450.2 507.7C487.7 515.3 525.3 530.7 562.8 538.3C600.3 546 637.7 546 675.2 543.5C712.7 541 750.3 536 787.8 535.7C825.3 535.3 862.7 539.7 881.3 541.8L900 544L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z",
              ]
            }}
            transition={{
              repeat: Infinity,
              ease: "easeInOut",
              duration: 3,
              times: [0, 0.16, 0.33],
            }}
            opacity=".5"
            class="shape-fill">
          </motion.path>
          <motion.path
            animate={{
              d: [
                "M0 553L18.8 556.7C37.7 560.3 75.3 567.7 112.8 564.5C150.3 561.3 187.7 547.7 225.2 541.7C262.7 535.7 300.3 537.3 337.8 542C375.3 546.7 412.7 554.3 450.2 560.2C487.7 566 525.3 570 562.8 568.5C600.3 567 637.7 560 675.2 553.3C712.7 546.7 750.3 540.3 787.8 540.8C825.3 541.3 862.7 548.7 881.3 552.3L900 556L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z",
                "M0 573L18.8 573.3C37.7 573.7 75.3 574.3 112.8 571.7C150.3 569 187.7 563 225.2 557.5C262.7 552 300.3 547 337.8 547.5C375.3 548 412.7 554 450.2 552.5C487.7 551 525.3 542 562.8 541.5C600.3 541 637.7 549 675.2 549.8C712.7 550.7 750.3 544.3 787.8 545.2C825.3 546 862.7 554 881.3 558L900 562L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z",
                "M0 569L18.8 563.7C37.7 558.3 75.3 547.7 112.8 542.5C150.3 537.3 187.7 537.7 225.2 540.2C262.7 542.7 300.3 547.3 337.8 549.5C375.3 551.7 412.7 551.3 450.2 552.8C487.7 554.3 525.3 557.7 562.8 555C600.3 552.3 637.7 543.7 675.2 539C712.7 534.3 750.3 533.7 787.8 537.3C825.3 541 862.7 549 881.3 553L900 557L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z",
                "M0 553L18.8 556.7C37.7 560.3 75.3 567.7 112.8 564.5C150.3 561.3 187.7 547.7 225.2 541.7C262.7 535.7 300.3 537.3 337.8 542C375.3 546.7 412.7 554.3 450.2 560.2C487.7 566 525.3 570 562.8 568.5C600.3 567 637.7 560 675.2 553.3C712.7 546.7 750.3 540.3 787.8 540.8C825.3 541.3 862.7 548.7 881.3 552.3L900 556L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z",
              ]
            }}
            transition={{
              repeat: Infinity,
              ease: "easeInOut",
              duration: 3,
              times: [0, 0.16, 0.33],
            }}
            class="shape-fill">
          </motion.path>
        </motion.svg>

      </div>
    </div>
  )
}
