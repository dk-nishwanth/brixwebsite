import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './VisionMission.css'

const VisionMission = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="vision-mission section" ref={ref}>
      <div className="container">
        <div className="grid-12">
          <motion.div
            className="col-6 vm-block"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">OUR VISION</span>
            <h3 className="vm-title">Vision</h3>
            <p className="vm-text">
              To enable, excellence at each level, process and service delivery.
            </p>
          </motion.div>

          <motion.div
            className="col-6 vm-block"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">OUR MISSION</span>
            <h3 className="vm-title">Mission</h3>
            <p className="vm-text">
              Our core values guide everything we do - Premium Knowledge Transfer, innovation and
              professional service delivery that drives eminence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
