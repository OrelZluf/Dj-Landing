import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'משפחת לוי',
    event: 'חתונה',
    text: 'אריאל עשה לנו את האירוע! המוזיקה הייתה מדויקת, הוא הרגיש את הקהל בצורה פנומנלית, וכולם פשוט לא הפסיקו לרקוד. תודה ענקית על ערב בלתי נשכח!'
  },
  {
    id: 2,
    name: 'משפחת כהן',
    event: 'בר מצווה',
    text: 'חיפשנו מישהו שידע לשלב גם מוזיקה חסידית למבוגרים וגם מוזיקה עכשווית לחברים של החתן. אריאל עשה את זה בצורה חלקה ומושלמת. ממליצים בחום!'
  },
  {
    id: 3,
    name: 'חברת הייטק (אירוע חברה)',
    event: 'מסיבת פורים',
    text: 'אריאל הגיע לאירוע החברה שלנו והרים את המקום באוויר. מוזיקה מעולה, מעברים חלקים וידע לקרוא את הקהל המגוון שלנו. נתראה בשנה הבאה!'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container">
        <h2 className="section-title">לקוחות <span>ממליצים</span></h2>
        
        <div className="testimonials-wrapper">
          <button className="nav-btn prev-btn" onClick={prevTestimonial}>
            <FaChevronRight />
          </button>

          <div className="testimonial-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="testimonial-card"
              >
                <FaQuoteRight className="quote-icon" />
                
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                
                <p className="testimonial-text">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="testimonial-author">
                  <h4>{testimonials[currentIndex].name}</h4>
                  <span>{testimonials[currentIndex].event}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="nav-btn next-btn" onClick={nextTestimonial}>
            <FaChevronLeft />
          </button>
        </div>
        
        <div className="dots-container">
          {testimonials.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
