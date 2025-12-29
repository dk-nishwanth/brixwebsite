import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const SEO = ({ 
  title = "BRiX Network - Knowledge Transfer & Training Solutions | Bangalore",
  description = "BRiX Network Pvt Ltd is a leading Knowledge Transfer Organization in Bangalore, offering professional training, corporate solutions, and technology expertise since 2014.",
  keywords = "knowledge transfer, corporate training, technology training, professional development, Bangalore, BRiX Network, Extreme Networks, training solutions",
  image = "https://www.brixnet.in/og-image.jpg",
  url = "https://www.brixnet.in/",
  type = "website"
}: SEOProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let element = document.querySelector(selector) as HTMLMetaElement
      
      if (element) {
        element.content = content
      } else {
        element = document.createElement('meta')
        if (property) {
          element.setAttribute('property', name)
        } else {
          element.setAttribute('name', name)
        }
        element.content = content
        document.head.appendChild(element)
      }
    }
    
    // Update basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:url', url, true)
    updateMetaTag('og:type', type, true)
    
    // Update Twitter tags
    updateMetaTag('twitter:title', title, true)
    updateMetaTag('twitter:description', description, true)
    updateMetaTag('twitter:image', image, true)
    updateMetaTag('twitter:url', url, true)
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (canonical) {
      canonical.href = url
    } else {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      canonical.href = url
      document.head.appendChild(canonical)
    }
    
  }, [title, description, keywords, image, url, type])

  return null
}

export default SEO