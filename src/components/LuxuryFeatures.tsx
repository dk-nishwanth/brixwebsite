import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './LuxuryFeatures.css'

const LuxuryFeatures = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    {
      icon: '🏛️',
      title: 'Premium Architecture',
      description: 'Timeless designs crafted by world-renowned architects',
    },
    {
      icon: '🌟',
      title: 'Exclusive Amenities',
      description: 'State-of-the-art facilities for elevated living',
    },
    {
      icon: '🌍',
      title: 'Prime Locations',
      description: 'Strategically positioned in prestigious neighborhoods',
    },
    {
      icon: '🔒',
      title: 'Secure Living',
      description: '24/7 security with advanced surveillance systems',
    },
  ]

  return (
    <section className="luxury-features" ref={ref}>
      <div className="container">
        <motion.div
          className="features-content-luxury"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="features-text-luxury">
            <span className="section-label-luxury">WHY CHOOSE US</span>
            <h2 className="section-title-luxury">
              Redefining Luxury
              <br />
              Living Standards
            </h2>
            <p className="section-description-luxury">
              We deliver exceptional properties that combine sophisticated design,
              premium quality, and unparalleled service to create extraordinary
              living experiences.
            </p>
          </div>

          <div className="features-grid-luxury">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-item-luxury"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="feature-icon-luxury">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LuxuryFeatures
