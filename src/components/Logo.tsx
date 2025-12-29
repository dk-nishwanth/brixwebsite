import React from 'react'
import './Logo.css'
import brixLogo from '../assets/brix-logo.png'

interface LogoProps {
  className?: string
  size?: 'small' | 'medium' | 'large'
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'medium' }) => {
  return (
    <div className={`logo-container ${size} ${className}`}>
      <img 
        src={brixLogo} 
        alt="BRIX Network" 
        className="logo-image"
      />
    </div>
  )
}

export default Logo