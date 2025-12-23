import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './ScrollingGallery.css'

const ScrollingGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const images = [
    { id: 1, title: 'Project Alpha' },
    { id: 2, title: 'Project Beta' },
    { id: 3, title: 'Project Gamma' },
    { id: 4, title: 'Project Delta' },
    { id: 5, title: 'Project Epsilon' },
  ]

  return (
    <section className="scrolling-gallery" ref={containerRef}>
      <div className="gallery-track">
        {images.map((image, index) => {
          const start = index * 0.2
          const end = start + 0.3
          
          const y = useTransform(
            scrollYProgress,
            [start, end],
            [300, -300]
          )
          
          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.1, end - 0.1, end],
            [0, 1, 1, 0]
          )
          
          const scale = useTransform(
            scrollYProgress,
            [start, start + 0.15, end - 0.15, end],
            [0.8, 1, 1, 0.8]
          )

          return (
            <motion.div
              key={image.id}
              className="gallery-card"
              style={{ y, opacity, scale }}
            >
              <div className="gallery-card-image">
                <span>{image.title}</span>
              </div>
              <div className="gallery-card-overlay">
                <h3>{image.title}</h3>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default ScrollingGallery
