import { motion } from 'framer-motion'
import './Portfolio.css'

const Portfolio = () => {
  const projects = [
    { title: 'Minimal Store', category: 'E-commerce' },
    { title: 'Studio Portfolio', category: 'Creative' },
    { title: 'Zen Wellness', category: 'Health' },
    { title: 'Urban Living', category: 'Real Estate' },
  ]

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Selected Works
        </motion.h2>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="portfolio-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="portfolio-image"></div>
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <span>{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
