import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#hero">
              <span className="gold-text">DJ</span> Ariel
            </a>
            <p className="footer-slogan">
              תקליטן לאירועי יוקרה למגזר החרדי והדתי. עושים שמח מכל הלב.
            </p>
          </div>

          <div className="footer-links">
            <h4>ניווט מהיר</h4>
            <ul>
              <li><a href="#hero">ראשי</a></li>
              <li><a href="#services">שירותים</a></li>
              <li><a href="#about">אודות</a></li>
              <li><a href="#gallery">גלריה</a></li>
              <li><a href="#testimonials">המלצות</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>עקבו אחרינו</h4>
            <div className="social-icons">
              <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="TikTok"><FaTiktok /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} DJ Ariel. כל הזכויות שמורות.</p>
          <p className="credit">נבנה ע"י מפתח אתרים</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
