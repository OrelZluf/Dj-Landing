import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    date: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here would be the API call to submit the form
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        eventType: '',
        date: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className="section-title">בואו <span>נדבר</span></h2>
        
        <div className="contact-wrapper">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>מוכנים לאירוע של השנה?</h3>
            <p>השאירו פרטים ואחזור אליכם בהקדם לתכנון המוזיקלי של האירוע שלכם.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><FaPhoneAlt /></div>
                <div>
                  <h4>טלפון</h4>
                  <p dir="ltr">055-663-3980</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><FaEnvelope /></div>
                <div>
                  <h4>אימייל</h4>
                  <p>dj.shmuel@example.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><FaMapMarkerAlt /></div>
                <div>
                  <h4>אזור פעילות</h4>
                  <p>כל הארץ</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>הפרטים נשלחו בהצלחה!</h3>
                <p>אחזור אליכם בהקדם האפשרי.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">שם מלא *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">טלפון *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="date">תאריך האירוע</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date" 
                      value={formData.date} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="eventType">סוג האירוע</label>
                  <select 
                    id="eventType" 
                    name="eventType" 
                    value={formData.eventType} 
                    onChange={handleChange}
                  >
                    <option value="">בחרו סוג אירוע...</option>
                    <option value="חתונה">חתונה</option>
                    <option value="בר/בת מצווה">בר/בת מצווה</option>
                    <option value="חינה/אירוסין">חינה/אירוסין</option>
                    <option value="אירוע חברה">אירוע חברה</option>
                    <option value="אחר">אחר</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">הודעה (אופציונלי)</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message} 
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-gold submit-btn">
                  שליחת פרטים
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
