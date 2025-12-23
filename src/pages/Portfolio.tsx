import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [filter, setFilter] = useState('all')

  const projects = [
    { title: 'Minimal Store', category: 'ecommerce', image: 'E-commerce Platform' },
    { title: 'Studio Portfolio', category: 'creative', image: 'Creative Portfolio' },
    { title: 'Zen Wellness', category: 'health', image: 'Health & Wellness' },
    { title: 'Urban Living', category: 'realestate', image: 'Real Estate' },
    { title: 'Tech Startup', category: 'tech', image: 'Technology' },
    { title: 'Fashion Brand', category: 'fashion', image: 'Fashion & Style' },
    { title: 'Food Delivery', category: 'ecommerce', image: 'Food Service' },
    { title: 'Fitness App', category: 'health', image: 'Fitness Platform' },
  ]

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'E-commerce', value: 'ecommerce' },
    { label: 'Creative', value: 'creative' },
    { label: 'Health', value: 'health' },
    { label: 'Real Estate', value: 'realestate' },
    { label: 'Technology', value: 'tech' },
    { label: 'Fashion', value: 'fashion' },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">Our Portfolio</h1>
            <p className="page-subtitle">
              Showcasing our best work and creative solutions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="portfolio-filter" ref={ref}>
        <div className="container">
          <motion.div
            className="filter-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
                onClick={() => setFilter(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid-page">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="portfolio-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
              >
                <div className="portfolio-card-image">
                  <span>{project.image}</span>
                </div>
                <div className="portfolio-card-info">
                  <h3>{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
