import { FaGithub } from 'react-icons/fa'; // GitHub icon
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn icon

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      {/* <div className="flex gap-3">
        
      <div className="social-icon flex items-center justify-center">
  <a href="https://github.com/Zeshig01" target="_blank">
    <img src="/assets/github.svg" alt="github" className="w-8 h-8" />
  </a>
</div>

        <div className="social-icon">
          <img src="/assets/whatsapp.svg" alt="twitter" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </div>
      </div> */}
      <div className="social-icons rounded-md text-white-500 border px-7 py-2 flex space-x-4">
      <a  href="https://github.com/Zeshig01" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} className='hover:text-white' />
      </a>
      <a href="https://wa.me/03174652685" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={30} className='hover:text-white' />
      </a>
      <a href="https://www.linkedin.com/in/muhammad-zeeshan-ashraf-a3b99a30a" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} className='hover:text-white' />
      </a>
    </div>

      <p className="text-white-500 hover:text-white">© 2024 Zeeshan Ashraf. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
