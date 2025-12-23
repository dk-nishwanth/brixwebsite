import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import './Career.css'

const Career = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [expandedJob, setExpandedJob] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null as File | null,
  })

  const jobs = [
    {
      title: 'Executive - Sales, Inside',
      experience: '3-4 years',
      location: 'Chennai & Bangalore',
      description: 'High profile appointment fixing | meeting calendar initiation | meeting follow ups. Clientele data maintenance | willing to travel to complete the CAF Protocols.',
      skills: 'Interested in people handling and networking. Should possess with high telephone mannerism, strong verbal and written communication, along with corporate e-mail etiquettes.',
      qualification: 'Any Degree',
      salary: 'At par with Service sales - Industry',
    },
    {
      title: 'Subject Matter Expert - Level 3, Data Communication',
      experience: '5+ years',
      location: 'Bangalore',
      description: 'Lead technical training sessions and knowledge transfer programs in data communication technologies.',
      skills: 'Expert knowledge in networking, data communication protocols, and training delivery.',
      qualification: 'B.Tech/M.Tech in Computer Science or related field',
      salary: 'Competitive',
    },
  ]

  const positions = [
    'Subject Matter Expert',
    'ATD Full stack developer',
    'UI/UX designer',
    'Marketing and sales expert',
    'Intern, L&D',
  ]

  const toggleJob = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Application submitted successfully! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', position: '', resume: null })
  }

  return (
    <div className="career-page">
      <section className="career-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">WISH YOU JOIN US?</h1>
            <p className="hero-subtitle">SHARE YOUR PART</p>
          </motion.div>
        </div>
      </section>

      <section className="jobs-section" ref={ref1}>
        <div className="container">
          <motion.h2
            className="section-title-career"
            initial={{ opacity: 0, y: 30 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Available Jobs
          </motion.h2>

          <div className="jobs-accordion">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                className="job-item"
                initial={{ opacity: 0, y: 30 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  className={`job-header ${expandedJob === index ? 'active' : ''}`}
                  onClick={() => toggleJob(index)}
                >
                  <div className="job-title-section">
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-experience">{job.experience}</span>
                      <span className="job-location">{job.location}</span>
                    </div>
                  </div>
                  <span className="job-icon">{expandedJob === index ? '−' : '+'}</span>
                </button>
                <div className={`job-content ${expandedJob === index ? 'expanded' : ''}`}>
                  <div className="job-detail">
                    <h4>Job Description | Responsibility</h4>
                    <p>{job.description}</p>
                  </div>
                  <div className="job-detail">
                    <h4>Skills Required</h4>
                    <p>{job.skills}</p>
                  </div>
                  <div className="job-detail">
                    <h4>Academic Qualification</h4>
                    <p>{job.qualification}</p>
                  </div>
                  <div className="job-detail">
                    <h4>Salary</h4>
                    <p>{job.salary}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="application-section" ref={ref2}>
        <div className="container">
          <motion.div
            className="application-form-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title-career">APPLY TO YOUR PREFERRED JOB</h2>
            <form className="career-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="position">Job Position / Functional Area *</label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Position</option>
                    {positions.map((pos, idx) => (
                      <option key={idx} value={pos}>
                        {pos}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="resume">Upload Resume (PDF / JPEG / Word format) *</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.jpg,.jpeg,.doc,.docx"
                  onChange={handleFileChange}
                  required
                />
                <span className="file-info">Accepted formats: PDF, JPEG, Word</span>
              </div>
              <button type="submit" className="submit-btn-career">
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Career
