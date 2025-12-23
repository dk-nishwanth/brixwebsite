import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer dark-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">BRIXNET</h3>
            <p className="footer-tagline">
              BRiX Network Pvt Ltd - A pure play Knowledge transfer Organization. Enabling excellence at each level, process and service delivery. Our core values guide everything we do - Premium Knowledge Transfer, innovation and professional service delivery that drives eminence.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigate</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/alliance">Alliance</a></li>
                <li><a href="/career">Career</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li><a href="mailto:info@brixnet.in">info@brixnet.in</a></li>
                <li><a href="tel:+918041310000">+91 80 4131 0000</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} BRIXNET. ALL RIGHTS RESERVED.</p>
          <div className="footer-social">
            <a href="#">INSTAGRAM</a>
            <a href="#">LINKEDIN</a>
            <a href="#">TWITTER</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
