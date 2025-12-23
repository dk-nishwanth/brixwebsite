import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './ImageReveal.css'

interface ImageRevealProps {
  images: string[]
}

const ImageReveal = ({ images }: ImageRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  return (
    <div className="image-reveal-container" ref={containerRef}>
      {images.map((image, index) => {
        const start = index / images.length
        const end = (index + 1) / images.length
        
        const y = useTransform(
          scrollYProgress,
          [start, end],
          ['100%', '-100%']
        )
        
        const opacity = useTransform(
          scrollYProgress,
          [start, start + 0.1, end - 0.1, end],
          [0, 1, 1, 0]
        )
        
        const scale = useTransform(
          scrollYProgress,
          [start, start + 0.2, end - 0.2, end],
          [1.3, 1, 1, 0.8]
        )

        return (
          <motion.div
            key={index}
            className="reveal-image"
            style={{ y, opacity, scale }}
          >
            <div className="reveal-image-content">
              <span>{image}</span>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default ImageReveal
