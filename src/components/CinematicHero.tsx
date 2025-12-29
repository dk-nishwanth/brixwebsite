import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import './CinematicHero.css'

const CinematicHero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  // Carousel slides with tech/software company focused images and content
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
      label: 'BRIXNET',
      title: 'Professional Excellence',
      subtitle: 'Fostering innovation and professional service delivery in modern workspaces',
    },
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
      label: 'BRIXNET',
      title: 'Delivering TRUST',
      subtitle: 'Your Preferred Knowledge Transfer Partner in Technology Excellence',
    },
    {
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80',
      label: 'BRIXNET',
      title: 'Technology Innovation Hub',
      subtitle: 'Enabling excellence through cutting-edge software solutions and training',
    },
    {
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80',
      label: 'BRIXNET',
      title: 'Software Development Excellence',
      subtitle: 'Premium Knowledge Transfer for software engineering and development teams',
    },
    {
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80',
      label: 'BRIXNET',
      title: 'Modern Workspace Solutions',
      subtitle: 'Enabling young minds with lasting efficiency through technology and innovation',
    },
    {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80',
      label: 'BRIXNET',
      title: 'Startup & Enterprise Ready',
      subtitle: 'Scalable knowledge transfer solutions for growing technology companies',
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="cinematic-hero dark-section" ref={ref}>
      <motion.div className="hero-background-cinematic" style={{ y }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-image-cinematic"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
        <div className="hero-video-overlay"></div>
      </motion.div>

      <motion.div className="hero-content-cinematic" style={{ opacity }}>
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="hero-text-cinematic"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="hero-label-cinematic">{slides[currentSlide].label}</span>
              <h1 className="hero-title-cinematic">{slides[currentSlide].title}</h1>
              <p className="hero-subtitle-cinematic">{slides[currentSlide].subtitle}</p>
              <div className="hero-actions">
                <a href="#about" className="hero-read-more">
                  Read More
                </a>
                <button onClick={goToPrevious} className="hero-nav-btn">
                  Previous
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Slide indicators */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <motion.div
        className="scroll-indicator-cinematic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="scroll-line-cinematic"></div>
        <span>SCROLL</span>
      </motion.div>
    </section>
  )
}

export default CinematicHero
