import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/972556633980?text=שלום שמואל, הגעתי דרך האתר ואשמח לקבל פרטים נוספים לגבי אירוע." 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
