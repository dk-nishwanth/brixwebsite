import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import './Services.css'

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const services = [
    {
      number: '01',
      title: 'Advance Technology Domain',
      description:
        'Premium knowledge transfer on advance technology, enablement programs, vendor neutral programs, OEM enablement & certification programs, CLOUD, SDx, Infrastructure automation tools, learning & development domain',
      features: [
        'OEM Enablement & Certification Programs',
        'Cloud & SDx Technologies',
        'Infrastructure Automation Tools',
        'Vendor Neutral Programs',
      ],
    },
    {
      number: '02',
      title: 'Learning & Development Domain',
      description:
        'Enabling potential minds and its creativity through fostering programs on noetic science, leadership & management, coaching, business skills, behavioural skills and cross culture',
      features: [
        'SOSE / Noetic Science',
        'Business Skill',
        'Leadership and Management',
        'Behavioural Skill Program',
        'Coaching',
        'Cross-Culture',
      ],
    },
    {
      number: '03',
      title: 'Domain Compliances & Governance',
      description:
        'To validate "RESKILL TO STAY RELEVANT" in the evolving world of applied science, we render services for project management and expert, ITIL-SERIES, JIRA Project management, CEM, CISA, CISM, CISSP, certified data centre professional and specialist and certified IT management',
      features: [
        'ITIL-SERIES',
        'JIRA Project Management',
        'CEM',
        'CISA, CISM, CISSP',
        'Certified Data Centre Professional and Specialist',
        'Certified IT Management',
      ],
    },
    {
      number: '04',
      title: 'Professional Service Domain',
      description:
        'The magnitude maximizes to render services on Infosec, VA/PT, mobile security scanning and reporting, baseline auditing, IT infrastructure auditing, readiness auditing, comprehensive auditing, knowledge management services, project management & implementation program',
      features: [
        'Infosec & VA/PT Services',
        'Mobile Security Scanning and Reporting',
        'Baseline Auditing',
        'IT Infrastructure Auditing',
        'Readiness Auditing',
        'Comprehensive Auditing',
        'Knowledge Management Services',
        'Project Management & Implementation Program',
      ],
    },
  ]

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">WHAT WE DO</span>
            <h1 className="page-title">Our Services</h1>
            <p className="page-subtitle">
              Comprehensive knowledge transfer solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="services-list" ref={ref}>
        <div className="container">
          <div className="services-accordion-page">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-accordion-item"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  className={`service-accordion-header ${expandedService === index ? 'active' : ''}`}
                  onClick={() => toggleService(index)}
                >
                  <div className="service-header-content">
                    <span className="service-number-large">{service.number}</span>
                    <h3>{service.title}</h3>
                  </div>
                  <span className="accordion-icon-large">
                    {expandedService === index ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`service-accordion-body ${expandedService === index ? 'expanded' : ''}`}
                >
                  <p className="service-desc">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="editorial-title">Ready to Get Started?</h2>
            <p className="cta-text">
              Contact us today to discuss how our services can help your organization achieve
              excellence
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

export default Services
