import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import './ProjectsGrid.css'

const ProjectsGrid = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    { 
      id: 1, 
      title: 'Knowledge Transfer Programs', 
      category: 'Training', 
      year: '2024',
      // High-end Indian business park (Cyber City style)
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop ',
      alt: 'Contemporary glass corporate building in an Indian business hub'
    },
    { 
      id: 2, 
      title: 'OEM Certification Programs', 
      category: 'Certification', 
      year: '2024',
      // Modern Indian office lobby/reception area
      image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=800&auto=format&fit=crop',
      alt: 'Luxury corporate interior in an Indian tech park'
    },
    { 
      id: 3, 
      title: 'Leadership Development', 
      category: 'L&D', 
      year: '2023',
      // Iconic Indian city business district skyline (Mumbai/BKC vibe)
      image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=800&auto=format&fit=crop',
      alt: 'Skyline of a major Indian business district at dusk'
    },
    { 
      id: 4, 
      title: 'IT Infrastructure Auditing', 
      category: 'Professional Services', 
      year: '2023',
      // Detail of modern technology park infrastructure
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
      alt: 'Modern technology architecture in Bangalore IT corridor'
    },
    { 
      id: 5, 
      title: 'Cyber Security Training', 
      category: 'Security', 
      year: '2023',
      // Interior workstation area typical of modern Indian IT offices
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop',
      alt: 'Professional and secure Indian workspace environment'
    },
    { 
      id: 6, 
      title: 'Cloud Enablement', 
      category: 'Technology', 
      year: '2024',
      // Exterior of a modern corporate campus with landscaped gardens
      image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=800&auto=format&fit=crop',
      alt: 'Eco-friendly corporate park campus in India'
    },
  ]

  return (
    <section className="projects-grid-section section" ref={ref}>
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <span className="section-label">HAPPY CLIENTS</span>
          <h2 className="editorial-title">Our Work</h2>
        </motion.div>

        <div className="projects-grid-editorial">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card-editorial"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="project-image-editorial">
                <motion.div
                  className="project-image-inner"
                  animate={{ scale: hoveredIndex === index ? 1.05 : 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img 
                    src={project.image} 
                    alt={project.alt}
                    className="project-img"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div
                  className="project-overlay-editorial"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="view-project-text">View Project</span>
                </motion.div>
              </div>
              <div className="project-info-editorial">
                <div className="project-meta-editorial">
                  <span className="project-category-editorial">{project.category}</span>
                  <span className="project-year-editorial">{project.year}</span>
                </div>
                <h3 className="project-title-editorial">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid