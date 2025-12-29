import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import './Header.css'

interface HeaderProps {
  scrolled: boolean
}

const Header = ({ scrolled }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Alliance', path: '/alliance' },
    { label: 'Career', path: '/career' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <header className={`header ${scrolled || !isHomePage ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo-link">
            <Logo size="small" />
          </Link>

          <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
