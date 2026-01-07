import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProjectsGrid from '../components/ProjectsGrid'
import './Alliance.css'

const Alliance = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })

  const partners = [
    {
      name: 'SoSE',
      title: 'Transformational Leadership',
      description:
        'A leader in delivering noetic science, bringing the globe into a transformational vector. Time and energy are the primitive by-product of active learning and then it moves towards orderliness which is essential for brewing IQ, enabling this aspect through a profound technique spreads fragrance to our personality, enjoy the transformation by witnessing the delta, enabling this to the millennials to mitigate and overcome frictions in life is what we devote to deliver.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    },
    {
      name: 'SNA',
      title: 'Savant Networks Academy',
      description:
        'Savant Networks Academy a lineage of BRIX Networks (P) Ltd to foster Industry-Academia touch through our unique ECOSYSTEM and DNA CULTURE.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    },
  ]

  return (
    <div className="alliance-page">
      {/* Hero Section */}
      <section className="alliance-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">OUR PROGRAM</span>
            <h1 className="page-title">Training Programs & Partnerships</h1>
            <p className="hero-description">
              Comprehensive training programs and strategic partnerships designed to drive excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="alliance-intro" ref={ref1}>
        <div className="container">
          <motion.div
            className="intro-content"
            initial={{ opacity: 0, y: 30 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="intro-text">
              Experience comprehensive training programs and strategic partnerships that drive exponential growth and innovation.
            </p>
            <p className="intro-text">
              Our programs and alliances open doors to unparalleled opportunities, empowering businesses
              to thrive in today's competitive landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section" ref={ref2}>
        <div className="container">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className={`partner-card ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="partner-image">
                <img src={partner.image} alt={partner.name} />
                <div className="partner-overlay">
                  <h2>{partner.name}</h2>
                </div>
              </div>
              <div className="partner-content">
                <h3>{partner.title}</h3>
                <p>{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Work Section */}
      <ProjectsGrid />

      {/* CTA Section */}
      <section className="alliance-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="editorial-title">Partner With Us</h2>
            <p className="cta-text">
              Join our network of strategic alliances and unlock new possibilities for growth and
              innovation.
            </p>
            <a href="/contact" className="cta-button">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Alliance
