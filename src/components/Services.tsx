import { motion } from 'framer-motion'
import './Services.css'

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Web Design',
      description: 'Creating beautiful, user-centered interfaces with attention to detail',
    },
    {
      number: '02',
      title: 'Development',
      description: 'Building responsive, performant websites with modern technologies',
    },
    {
      number: '03',
      title: 'Branding',
      description: 'Crafting cohesive visual identities that tell your story',
    },
    {
      number: '04',
      title: 'Consultation',
      description: 'Strategic guidance for your digital presence and growth',
    },
  ]

  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Services
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="service-number">{service.number}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
