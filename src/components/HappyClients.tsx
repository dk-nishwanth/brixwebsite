import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './HappyClients.css';

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: 'Extreme Networks', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Extreme_Networks_logo.svg/320px-Extreme_Networks_logo.svg.png' },
  { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/320px-Wipro_Primary_Logo_Color_RGB.svg.png' },
  { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/320px-Infosys_logo.svg.png' },
  { name: 'TCS', logo: 'https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png' },
  { name: 'Tech Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tech_Mahindra_New_Logo.svg/320px-Tech_Mahindra_New_Logo.svg.png' },
  { name: 'HCL Technologies', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/HCL_Technologies_logo.svg/320px-HCL_Technologies_logo.svg.png' },
  { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/320px-Accenture.svg.png' },
  { name: 'Cognizant', logo: 'https://logos-download.com/wp-content/uploads/2016/03/Cognizant_logo_blue_new.png' },
];

const HappyClients: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(4);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, clients.length - itemsPerView);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <section className="happy-clients-section" ref={ref}>
      <div className="clients-container">
        <motion.div
          className="section-header-clients"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>HAPPY <strong>CLIENTS</strong></h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div
          className="clients-carousel-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button className="carousel-arrow left" onClick={goToPrevious} aria-label="Previous">
            ‹
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="client-slide"
                  style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                >
                  <div className="client-logo-wrapper">
                    <img src={client.logo} alt={client.name} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow right" onClick={goToNext} aria-label="Next">
            ›
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HappyClients;
