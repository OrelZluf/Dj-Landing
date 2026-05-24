import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Gallery.css';

const galleryImages = [
  { id: 1, src: '/assets/images/gallery1.png', alt: 'Wedding Party', size: 'large' },
  { id: 2, src: '/assets/images/gallery2.png', alt: 'Club Event', size: 'small' },
  { id: 3, src: '/assets/images/about.png', alt: 'DJ Setup', size: 'medium' },
  { id: 4, src: '/assets/images/hero.png', alt: 'Crowd Cheering', size: 'wide' }
];

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="container">
        <h2 className="section-title">רגעים <span>בלתי נשכחים</span></h2>
        <p className="gallery-subtitle text-center">הצצה קטנה לאירועים שעשינו לאחרונה</p>
        
        <motion.div 
          className="gallery-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {galleryImages.map((image) => (
            <motion.div 
              key={image.id} 
              className={`gallery-item ${image.size}`}
              variants={itemVariants}
            >
              <div className="gallery-image-wrapper">
                <img src={image.src} alt={image.alt} />
                <div className="gallery-overlay">
                  <span className="gallery-icon">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-4">
          <a href="#contact" className="btn-gold">בואו ניצור רגעים כאלה ביחד</a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
