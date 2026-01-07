import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SEO from '../components/SEO'
import CinematicHero from '../components/CinematicHero'
import EditorialAbout from '../components/EditorialAbout'
import VisionMission from '../components/VisionMission'
import EditorialServices from '../components/EditorialServices'
import HappyClients from '../components/HappyClients'
import './Home.css'

const Home = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="home-page">
      <SEO 
        title="BRiX Network - Knowledge Transfer & Training Solutions | Bangalore"
        description="BRiX Network Pvt Ltd is a leading Knowledge Transfer Organization in Bangalore, offering professional training, corporate solutions, and technology expertise since 2014."
        keywords="knowledge transfer, corporate training, technology training, professional development, Bangalore, BRiX Network, Extreme Networks, training solutions"
        url="https://www.brixnet.in/"
      />
      <CinematicHero />
      <EditorialAbout />
      <VisionMission />
      <EditorialServices />
      <HappyClients />

      {/* Call to Action Section */}
      <section className="cta-section section" ref={ref}>
        <div className="cta-background">
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80" 
            alt="Modern office building representing excellence"
            className="cta-bg-image"
          />
          <div className="cta-overlay"></div>
        </div>
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
