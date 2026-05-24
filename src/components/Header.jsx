import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ראשי', href: '#hero' },
    { name: 'השירותים שלי', href: '#services' },
    { name: 'אודות', href: '#about' },
    { name: 'גלריה', href: '#gallery' },
    { name: 'שאלות ותשובות', href: '#faq' },
    { name: 'המלצות', href: '#testimonials' },
    { name: 'צור קשר', href: '#contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#hero">
            <span className="gold-text">DJ</span> Ariel
          </a>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href="tel:0556633980" className="phone-btn">
            <FaPhoneAlt /> 055-663-3980
          </a>
          <div 
            className="hamburger" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
