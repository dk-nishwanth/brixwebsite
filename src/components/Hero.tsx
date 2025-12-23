import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './Hero.css'

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero-background" style={{ y }}>
        <div className="hero-image-overlay"></div>
        <div className="hero-image-placeholder">
          <span>LUXURY LIVING</span>
        </div>
      </motion.div>
      
      <motion.div className="hero-content" style={{ opacity }}>
        <div className="container">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span 
              className="hero-label"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              WELCOME TO EXCELLENCE
            </motion.span>
            <h1 className="hero-title">
              Where Luxury
              <br />
              Meets Innovation
            </h1>
            <p className="hero-subtitle">
              Discover exceptional spaces designed for extraordinary living
            </p>
            <motion.div
              className="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a href="#contact" className="hero-cta-primary">
                Explore Now
              </a>
              <a href="#portfolio" className="hero-cta-secondary">
                View Projects
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  )
}

export default Hero
