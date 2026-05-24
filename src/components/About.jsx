import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="about-content" ref={ref}>
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="section-title text-right">מי <span>אני?</span></h2>
            <h3 className="about-subtitle">תקליטן שחי ונושם מוזיקה</h3>
            
            <p>
              נעים מאוד, אני אריאל ג'יאן. עם למעלה מ-7 שנות ניסיון בתחום האירועים, אני מביא איתי ידע רחב, אנרגיות שיא ואהבה עצומה לשמח אנשים.
            </p>
            <p>
              ההתמחות שלי היא באירועי יוקרה למגזר הדתי והחרדי-מודרני. אני מבין לעומק את הדקויות, הרגישויות והטעם המוזיקלי הייחודי הנדרש באירועים אלו - החל ממוזיקה חסידית אותנטית, דרך פופ וים תיכוני, ועד למוזיקה אלקטרונית וטראנס לרחבת הריקודים בשעות המאוחרות.
            </p>
            <p>
              המטרה שלי היא לקחת את החזון שלכם לאירוע המושלם, ולהפוך אותו למציאות מוזיקלית שתרקיד את כל האורחים, מגדול ועד קטן, עד שלא יישארו להם כוחות ברגליים!
            </p>

            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number gold-text">+7</span>
                <span className="stat-label">שנות ניסיון</span>
              </div>
              <div className="stat-item">
                <span className="stat-number gold-text">+500</span>
                <span className="stat-label">אירועים מוצלחים</span>
              </div>
              <div className="stat-item">
                <span className="stat-number gold-text">100%</span>
                <span className="stat-label">לקוחות מרוצים</span>
              </div>
            </div>
            
            <a href="#contact" className="btn-gold mt-4">בואו נדבר על האירוע שלכם</a>
          </motion.div>

          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="image-frame">
              <img src="/assets/images/about.png" alt="DJ Ariel Portrait" className="about-image" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
