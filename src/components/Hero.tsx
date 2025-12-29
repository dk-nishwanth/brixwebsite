import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  // Array of professional business/office images focused on tech and software companies
  const businessImages = [
    {
      url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
      alt: 'Modern Indian office building and workspace'
    },
    {
      url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80',
      alt: 'Indian corporate office interior with workstations'
    },
    {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
      alt: 'Indian business district and corporate buildings'
    },
    {
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80',
      alt: 'Modern Indian office workspace with technology'
    },
    {
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80',
      alt: 'Contemporary Indian office space with glass walls'
    },
    {
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80',
      alt: 'Indian tech startup office environment'
    },
    {
      url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
      alt: 'Indian corporate training and conference room'
    },
    {
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
      alt: 'Indian business workspace with laptops and technology'
    },
    {
      url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
      alt: 'Indian technology workspace and development center'
    },
    {
      url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80',
      alt: 'Modern Indian software development office'
    }
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % businessImages.length
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [businessImages.length])

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero-background" style={{ y }}>
        <div className="hero-image-overlay"></div>
        <div className="hero-image-container">
          {businessImages.map((image, index) => (
            <div
              key={index}
              className={`hero-image ${index === currentImageIndex ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
              aria-label={image.alt}
            />
          ))}
        </div>
      </motion.div>
      
      <motion.div className="hero-content" style={{ opacity }}>
        <div className="container">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span 
              className="hero-label"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              A Pure Play Knowledge Transfer Organization
            </motion.span>
            <h1 className="hero-title">
              SUCCESS
              <br />
              <span className="hero-title-secondary">WORK</span>
            </h1>
            <p className="hero-subtitle">
              Empowering organizations through innovative knowledge transfer solutions
            </p>
            <motion.div
              className="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a href="#about" className="hero-cta-primary">
                Read More
              </a>
              <a href="#services" className="hero-cta-secondary">
                Our Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </motion.div>

      {/* Image indicators */}
      <div className="hero-indicators">
        {businessImages.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
