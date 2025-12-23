import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We believe in the power of simplicity and thoughtful design
        </motion.p>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Our studio specializes in creating elegant digital experiences that blend
              minimalist aesthetics with functional design. We believe that less is more,
              and every element should serve a purpose.
            </p>
            <p>
              With a focus on clean lines, thoughtful spacing, and harmonious color palettes,
              we craft websites that are both beautiful and intuitive to use.
            </p>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-placeholder"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
