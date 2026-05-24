import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-title">
            <span className="gold-text">DJ Ariel</span><br />
            תקליטן לאירועי יוקרה
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="hero-subtitle">
            המוזיקה המושלמת לאירוע בלתי נשכח למגזר הדתי והחרדי
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#contact" className="btn-gold hero-btn">
            שריינו תאריך עכשיו
          </a>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
