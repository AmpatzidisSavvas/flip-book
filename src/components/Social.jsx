
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import '../App.css';
const Social = () => {
  return (
    <div className='social-container'>
          <div className='social-info'>
                <span className="artist-name">Savvas Ampatzidis "ThePack"</span>
                <div className="social-icons">
                    <a
                    href="https://www.instagram.com/thepack_art_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    >
                    <FaInstagram size={24} color="#fff" />
                    </a>
                    <a
                    href="https://www.facebook.com/ThePackArte/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    >
                    <FaFacebook size={24} color="#fff" />
                    </a>
                </div>
          </div>
          <div className='social-info'>
                <span className="artist-name">Thomas Kefalas</span>
                <div className="social-icons">
                    <a
                    href="https://www.instagram.com/thomaskef/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    >
                    <FaInstagram size={24} color="#fff" />
                    </a>
                    <a
                    href="https://www.facebook.com/thomaskefalasart"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    >
                    <FaFacebook size={24} color="#fff" />
                    </a>
                </div>
            </div>
     </div>
  )
}

export default Social