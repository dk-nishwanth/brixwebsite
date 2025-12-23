import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './FeaturedProjects.css'

const FeaturedProjects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const projects = [
    {
      id: 1,
      title: 'Modern Villa',
      location: 'Dubai Hills',
      category: 'Residential',
      size: '5,000 sq ft',
    },
    {
      id: 2,
      title: 'Luxury Penthouse',
      location: 'Downtown',
      category: 'Residential',
      size: '3,500 sq ft',
    },
    {
      id: 3,
      title: 'Commercial Tower',
      location: 'Business Bay',
      category: 'Commercial',
      size: '50,000 sq ft',
    },
  ]

  return (
    <section className="featured-projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header-featured"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label-featured">PORTFOLIO</span>
          <h2 className="section-title-featured">Featured Projects</h2>
          <p className="section-subtitle-featured">
            Explore our collection of exceptional properties
          </p>
        </motion.div>

        <div className="projects-grid-featured">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card-featured"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image-featured">
                <div className="project-image-overlay">
                  <span className="view-project">View Project →</span>
                </div>
                <span className="project-placeholder">Project {project.id}</span>
              </div>
              <div className="project-info-featured">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-size">{project.size}</span>
                </div>
                <h3 className="project-title-featured">{project.title}</h3>
                <p className="project-location">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
