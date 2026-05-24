import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHeart, FaStar, FaBuilding, FaGlassCheers, FaBaby, FaMusic } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'חתונות',
    description: 'מוזיקה מדויקת ומרגשת שתרקיד את כל האורחים, משלב קבלת הפנים ועד השעות הקטנות של הלילה.',
    icon: <FaHeart />
  },
  {
    id: 2,
    title: 'בר ובת מצווה',
    description: 'אנרגיות מטורפות, מוזיקה עכשווית והפעלות שירימו את הרחבה ויהפכו את הילד/ה לכוכבים.',
    icon: <FaStar />
  },
  {
    id: 3,
    title: 'אירועי חברה',
    description: 'אירועים עסקיים, מסיבות גיבוש והרמות כוסית באווירה יוקרתית שמותאמת לאופי החברה.',
    icon: <FaBuilding />
  },
  {
    id: 4,
    title: 'חינה ואירוסין',
    description: 'שילוב מנצח של מוזיקה אותנטית, מסורתית ועכשווית לחגיגה המושלמת.',
    icon: <FaGlassCheers />
  },
  {
    id: 5,
    title: 'ברית ובריתה',
    description: 'מוזיקת רקע נעימה ומרגשת שמשלימה את האווירה המיוחדת של קבלת פנים לחבר/ה החדש/ה במשפחה.',
    icon: <FaBaby />
  },
  {
    id: 6,
    title: 'אירועים פרטיים',
    description: 'ימי הולדת, מסיבות הפתעה וכל סיבה למסיבה - נתאים את המוזיקה בדיוק עבורכם.',
    icon: <FaMusic />
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container">
        <h2 className="section-title">השירותים <span>שלי</span></h2>
        
        <motion.div 
          className="services-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map(service => (
            <motion.div key={service.id} className="service-card" variants={itemVariants}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-link">לפרטים נוספים</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
