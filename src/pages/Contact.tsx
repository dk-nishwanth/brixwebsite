import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'info@brixnet.in' },
    { icon: '📞', label: 'Phone', value: '+91 80 4131 0000' },
    { icon: '📍', label: 'Address', value: 'Bangalore, Karnataka, India' },
    { icon: '🕐', label: 'Hours', value: 'Mon - Fri: 9AM - 6PM IST' },
  ]

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">Connect With Us</h1>
            <p className="page-subtitle">
              Ready to transform your organization through knowledge transfer? Let's discuss your requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content-section" ref={ref}>
        <div className="container">
          <div className="contact-layout">
            <motion.div
              className="contact-info-section"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2>Contact Information</h2>
              <p className="contact-intro">
                We'd love to hear from you. Reach out to discuss your knowledge transfer and training requirements.
              </p>
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-detail-item">
                    <span className="contact-icon">{info.icon}</span>
                    <div>
                      <h4>{info.label}</h4>
                      <p>{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="contact-form-section"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <form className="contact-form-page" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group-page">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group-page">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group-page">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group-page">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group-page">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="submit-btn-page">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-background">
          <div className="map-background-overlay"></div>
        </div>
        
        <div className="container">
          <div className="map-content-wrapper">
            <motion.div
              className="map-info-card"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="map-info-header">
                <span className="section-label">FIND US</span>
                <h2>Visit Our Office</h2>
                <p>Connect with us for in-person consultations and comprehensive training sessions.</p>
              </div>
              
              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <span>📍</span>
                  </div>
                  <div className="contact-card-content">
                    <h4>Address</h4>
                    <p>Bangalore, Karnataka<br />India</p>
                  </div>
                </div>
                
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <span>📞</span>
                  </div>
                  <div className="contact-card-content">
                    <h4>Phone</h4>
                    <p>+91 80 4131 0000</p>
                  </div>
                </div>
                
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <span>📧</span>
                  </div>
                  <div className="contact-card-content">
                    <h4>Email</h4>
                    <p>info@brixnet.in</p>
                  </div>
                </div>
                
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <span>🕐</span>
                  </div>
                  <div className="contact-card-content">
                    <h4>Business Hours</h4>
                    <p>Mon - Fri: 9AM - 6PM IST</p>
                  </div>
                </div>
              </div>
              
              <div className="map-actions">
                <a 
                  href="https://maps.google.com/?q=Bangalore,Karnataka,India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="directions-btn-new"
                >
                  <span>🧭</span>
                  Get Directions
                </a>
                <a 
                  href="tel:+918041310000"
                  className="call-btn"
                >
                  <span>📞</span>
                  Call Now
                </a>
              </div>
            </motion.div>

            <motion.div
              className="map-container-new"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085452148437!3d12.953945614117967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Brix Network Location - Bangalore, Karnataka"
                />
                <div className="map-pin">
                  <div className="pin-dot"></div>
                  <div className="pin-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
