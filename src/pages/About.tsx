import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import SEO from '../components/SEO'
import './About.css'

const About = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries and turning dreams into reality through cutting-edge solutions.',
    },
    {
      title: 'Excellence',
      description: 'Commitment to delivering trust and quality in every knowledge transfer initiative.',
    },
    {
      title: 'Collaboration',
      description: 'Fostering a culture of inclusiveness, accountability, and shared success.',
    },
    {
      title: 'Transformation',
      description: 'Empowering individuals and organizations to thrive in an ever-changing landscape.',
    },
  ]

  const services = [
    {
      title: 'Advance Technology Domain',
      description: 'Premium knowledge transfer on cloud, SDx, automation tools, and OEM certifications.',
      subItems: [
        'OEM Enablement & Certification Programs',
        'CLOUD & SDx Technologies',
        'Infrastructure Automation Tools',
        'Vendor Neutral Programs',
      ],
    },
    {
      title: 'Learning & Development Domain',
      description: 'Leadership, coaching, business skills, and cross-cultural development programs.',
      subItems: [
        'SOSE / Noetic Science',
        'Business Skill',
        'Leadership and Management',
        'Behavioural Skill Program',
        'Coaching',
        'Cross-Culture',
      ],
    },
    {
      title: 'Domain Compliances & Governance',
      description: 'ITIL, JIRA, CISA, CISM, CISSP, and certified IT management programs.',
      subItems: [
        'ITIL-SERIES',
        'JIRA Project Management',
        'CISA, CISM, CISSP',
        'Certified Data Centre Professional',
        'Certified IT Management',
      ],
    },
    {
      title: 'Professional Service Domain',
      description: 'Infosec, VA/PT, security auditing, and knowledge management solutions.',
      subItems: [
        'Infosec & VA/PT Services',
        'Mobile Security Scanning',
        'Baseline Auditing',
        'IT Infrastructure Auditing',
        'Knowledge Management Services',
      ],
    },
  ]

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }

  return (
    <div className="about-page">
      <SEO 
        title="About Us - BRiX Network | Knowledge Transfer Experts"
        description="Learn about BRiX Network Pvt Ltd, established in 2014 as a leading Knowledge Transfer Organization and Authorized Training Partner of Extreme Networks across India."
        keywords="about BRiX Network, knowledge transfer organization, corporate training company, Extreme Networks partner, Bangalore training company"
        url="https://www.brixnet.in/about"
      />
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">ABOUT US</span>
            <h1 className="page-title">Delivering Trust Through Knowledge</h1>
            <p className="hero-description">
              A pure play Knowledge Transfer Organization committed to excellence, innovation, and
              professional service delivery since November 2014.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section" ref={ref1}>
        <div className="container">
          <div className="story-grid">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -30 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2>Our DNA Culture</h2>
              <p>
                Innovation is ingrained in our DNA. We thrive on challenging the status quo and
                empowering minds through transformative knowledge transfer.
              </p>
              <p>
                At BRIX, we're not just purveyors of information—we're architects of transformation,
                fostering excellence at each level of service delivery.
              </p>
            </motion.div>
            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 30 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="image-placeholder">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
                  alt="Modern Indian corporate office workspace"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section" ref={ref2}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2>Our Core Values</h2>
            <p>The foundation upon which BRIX is built, brick by brick</p>
          </motion.div>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="company-section" ref={ref3}>
        <div className="container">
          <motion.div
            className="company-header"
            initial={{ opacity: 0, y: 30 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2>Brick by Brick</h2>
            <p className="company-intro">
              BRiX Network Pvt Ltd, established in November 2014, is a distinguished Knowledge Transfer
              Organization and Authorized Training Partner of Extreme Networks across PAN India.
            </p>
          </motion.div>

          <div className="company-grid">
            <motion.div
              className="company-details"
              initial={{ opacity: 0, y: 30 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="detail-card">
                <h3>Strategic Partnerships</h3>
                <p>
                  We've strategically allied with leading global organizations and OEMs, bolstered by
                  Subject Matter Experts, Lead Auditors, and Cyber Security Specialists.
                </p>
              </div>
              <div className="detail-card">
                <h3>Academic Excellence</h3>
                <p>
                  Through our subsidiary, Savant Networks Academy, we partner with premier universities to
                  establish Knowledge Transfer Centers, elevating student skillsets nationwide.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="services-box"
              initial={{ opacity: 0, y: 30 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3>What We Do</h3>
              <div className="services-accordion">
                {services.map((service, index) => (
                  <div key={index} className="accordion-item">
                    <button
                      className={`accordion-header ${expandedService === index ? 'active' : ''}`}
                      onClick={() => toggleService(index)}
                    >
                      <div className="accordion-title">
                        <span className="service-number">0{index + 1}</span>
                        <h4>{service.title}</h4>
                      </div>
                      <span className="accordion-icon">{expandedService === index ? '−' : '+'}</span>
                    </button>
                    <div className={`accordion-content ${expandedService === index ? 'expanded' : ''}`}>
                      <p className="service-desc">{service.description}</p>
                      <ul className="sub-items">
                        {service.subItems.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <a href="/services" className="cta-button-about">
                View All Services
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
