import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQ.css';

const faqs = [
  {
    question: 'איך מתבצע תהליך העבודה מולכם?',
    answer: 'התהליך מתחיל בפגישת היכרות שבה נבין את האופי שלכם ושל הקהל. לאחר מכן נבנה יחד פלייליסט שמשלב את הבקשות שלכם עם הניסיון שלי, ונדייק את המוזיקה לכל שלב באירוע.'
  },
  {
    question: 'האם אתה משלב מוזיקה חסידית עם סגנונות נוספים?',
    answer: 'בהחלט! ההתמחות שלי היא בדיוק בשילוב העדין והנכון שבין מוזיקה חסידית מסורתית ועכשווית, לבין סגנונות נוספים כמו ים תיכוני, פופ, אלקטרוני ועוד - הכל בהתאם לגבולות ולסגנון שתגדירו מראש.'
  },
  {
    question: 'מה לגבי ציוד הגברה ותאורה?',
    answer: 'אני עובד עם הציוד המוביל והמתקדם בעולם. ניתן להזמין דרכי חבילות מלאות הכוללות הגברה מקצועית, תאורת רחבה חכמה, עשן כבד לסלואו, לייזרים ואפקטים נוספים.'
  },
  {
    question: 'האם אפשר לתת לך רשימת שירים ספציפית?',
    answer: 'בשמחה. אני מאמין שהאירוע הוא שלכם, ואתם קובעים את הטון. אני אקח את הרשימה שלכם ואשלב אותה בצורה חלקה וזורמת לאורך כל הערב.'
  },
  {
    question: 'כמה זמן מראש כדאי לשריין תאריך?',
    answer: 'מומלץ לשריין תאריך ברגע שיש לכם תאריך סגור לאולם, בדרך כלל 3-6 חודשים מראש, במיוחד בעונות החמות של האירועים.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="container faq-container">
        <h2 className="section-title">שאלות <span>ותשובות</span></h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <p>יש לכם שאלות נוספות?</p>
          <a href="#contact" className="gold-text">שאלו אותי כאן</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
