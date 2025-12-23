import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CinematicHero from '../components/CinematicHero'
import EditorialAbout from '../components/EditorialAbout'
import VisionMission from '../components/VisionMission'
import ProjectsGrid from '../components/ProjectsGrid'
import EditorialServices from '../components/EditorialServices'
import './Home.css'

const Home = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="home-page">
      <CinematicHero />
      <EditorialAbout />
      <VisionMission />
      <EditorialServices />
      <ProjectsGrid />

      {/* Call to Action Section */}
      <section className="cta-section section" ref={ref}>
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">CALL TO ACTION</span>
            <h2 className="editorial-title">BRIX | Enabling Excellence a Habit</h2>
            <p className="cta-text">
              A dedicated service awaits your queries. Get in touch with us.
            </p>
            <a href="/contact" className="cta-button">
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
