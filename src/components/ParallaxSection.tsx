import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './ParallaxSection.css'

interface ParallaxSectionProps {
  title: string
  subtitle?: string
  imagePosition?: 'left' | 'right' | 'center'
  index: number
}

const ParallaxSection = ({ title, subtitle, imagePosition = 'center', index }: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 0.95])

  return (
    <section className="parallax-section" ref={ref}>
      <motion.div 
        className={`parallax-image-wrapper ${imagePosition}`}
        style={{ y, scale }}
      >
        <motion.div 
          className="parallax-image"
          style={{ opacity }}
        >
          <div className="image-placeholder-parallax">
            <span>Image {index}</span>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="parallax-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </motion.div>
    </section>
  )
}

export default ParallaxSection
