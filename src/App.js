import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/portfolio.css';

import { ThemeProvider } from './contexts/ThemeContext';
import PageLoader from './components/layout/PageLoader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true,
      offset: 100,
      delay: 100
    });

    // Initialize Portfolio utilities
    const initPortfolio = () => {
      // Page loader
      const loader = document.querySelector('.page-loader');
      if (loader) {
        setTimeout(() => {
          loader.classList.add('hidden');
        }, 2000);
      }

      // Custom cursor
      if (window.innerWidth > 768) {
        const cursor = document.querySelector('.custom-cursor');
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        
        if (cursor && cursorDot && cursorOutline) {
          let mouseX = 0, mouseY = 0;
          let outlineX = 0, outlineY = 0;
          
          document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
          });
          
          const animateOutline = () => {
            outlineX += (mouseX - outlineX) * 0.1;
            outlineY += (mouseY - outlineY) * 0.1;
            
            cursorOutline.style.left = `${outlineX}px`;
            cursorOutline.style.top = `${outlineY}px`;
            
            requestAnimationFrame(animateOutline);
          };
          animateOutline();
          
          document.querySelectorAll('a, button, .btn, .action-btn').forEach(el => {
            el.addEventListener('mouseenter', () => {
              cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
              cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
            });
            
            el.addEventListener('mouseleave', () => {
              cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
              cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            });
          });
        }
      }

      // Navbar scroll behavior
      const navbar = document.querySelector('.navbar');
      let lastScrollY = 0;
      
      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (navbar) {
          if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
          
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.style.transform = 'translateY(-100%)';
          } else {
            navbar.style.transform = 'translateY(0)';
          }
        }
        
        lastScrollY = currentScrollY;
      });

      // Parallax effects
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        document.querySelectorAll('.gradient-orb').forEach((orb, index) => {
          const speed = 0.3 + (index * 0.1);
          orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
      });
    };

    initPortfolio();
  }, []);

  return (
    <ThemeProvider>
      <Router basename="/portfolio-react">
        <div className="App">
          <PageLoader />
          
          <div className="animated-background">
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
            <div className="gradient-orb orb-3"></div>
            <div className="floating-particles">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
          </div>
          
          <div className="custom-cursor">
            <div className="cursor-dot"></div>
            <div className="cursor-outline"></div>
          </div>

          <Navbar />
          
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
