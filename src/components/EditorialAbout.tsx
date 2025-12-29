import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './EditorialAbout.css'

const EditorialAbout = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const words = "BRiX Network Pvt Ltd is a pure play Knowledge transfer Organization, was incorporated in November 2014, with ATP feature from extreme networks for PAN India. BRiX thrives in setting a benchmark in the Knowledge Transfer Domain and its Services by building a strong Business Compliance awareness team on its designated vertical delivery to its clientele, with an objective of ensuring value based, high quality and future-proof services.".split(' ')

  return (
    <section className="editorial-about section" ref={ref}>
      <div className="container">
        <div className="grid-12">
          <motion.div
            className="col-6 editorial-text-block"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">SUCCESS WORK</span>
            <h2 className="editorial-title">
              About BRiX Network
            </h2>
            <div className="editorial-body">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  style={{ display: 'inline-block', marginRight: '0.3em' }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="col-6 editorial-image-block"
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={inView ? { opacity: 1, clipPath: 'inset(0% 0 0 0)' } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="editorial-image">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80" 
                alt="Modern Indian corporate office and knowledge transfer organization"
                className="editorial-img"
              />
              <div className="image-overlay">
                <span>KNOWLEDGE TRANSFER</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EditorialAbout
