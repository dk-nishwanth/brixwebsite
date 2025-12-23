import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './EditorialServices.css'

const EditorialServices = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    {
      number: '01',
      title: 'Advance Technology Domain',
      description:
        'Premium knowledge transfer on advance technology, enablement programs, vendor neutral programs, OEM enablement & certification programs, CLOUD, SDx, Infrastructure automation tools, learning & development domain',
    },
    {
      number: '02',
      title: 'Learning & Development Domain',
      description:
        'Enabling potential minds and its creativity through fostering programs on noetic science, leadership & management, coaching, business skills, behavioural skills and cross culture',
    },
    {
      number: '03',
      title: 'Domain Compliances & Governance',
      description:
        'To validate "RESKILL TO STAY RELEVANT" in the evolving world of applied science, we render services for project management and expert, ITIL-SERIES, JIRA Project management, CEM, CISA, CISM, CISSP, certified data centre professional and specialist and certified IT management',
    },
    {
      number: '04',
      title: 'Professional Service Domain',
      description:
        'The magnitude maximizes to render services on Infosec, VA/PT, mobile security scanning and reporting, baseline auditing, IT infrastructure auditing, readiness auditing, comprehensive auditing, knowledge management services, project management & implementation program',
    },
  ]

  return (
    <section className="editorial-services section" ref={ref}>
      <div className="container">
        <motion.div
          className="services-header-editorial"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <span className="section-label">WHAT WE DO</span>
          <h2 className="editorial-title">Our Services</h2>
        </motion.div>

        <div className="services-list-editorial">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-item-editorial"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="service-number">{service.number}</span>
              <div className="service-content-editorial">
                <h3 className="service-title-editorial">{service.title}</h3>
                <p className="service-description-editorial">{service.description}</p>
                <a href="/services" className="read-more-link">
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EditorialServices
