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
            className="col-6 vm-block vision-block"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="vm-background">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80" 
                alt="Vision - Modern Indian corporate workspace and strategic planning"
                className="vm-bg-image"
              />
              <div className="vm-overlay"></div>
            </div>
            <div className="vm-content">
              <span className="section-label">OUR VISION</span>
              <h3 className="vm-title">Vision</h3>
              <p className="vm-text">
                To enable, excellence at each level, process and service delivery.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="col-6 vm-block mission-block"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="vm-background">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80" 
                alt="Mission - Indian corporate office innovation and professional excellence"
                className="vm-bg-image"
              />
              <div className="vm-overlay"></div>
            </div>
            <div className="vm-content">
              <span className="section-label">OUR MISSION</span>
              <h3 className="vm-title">Mission</h3>
              <p className="vm-text">
                Our core values guide everything we do - Premium Knowledge Transfer, innovation and
                professional service delivery that drives eminence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
