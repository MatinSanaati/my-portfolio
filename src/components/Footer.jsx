// src/components/Footer.jsx
import './Footer.css';

// آیکون‌های اجتماعی
import GithubIcon from '../assets/icnes/icones_contact-page/GitHub_Icon/GitHubIcon';
import LinkedInIcon from '../assets/icnes/icones_contact-page/LinkedIn_Icon/LinkedInIcon';
import InstagramIcon from '../assets/icnes/icones_contact-page/Instagram_Icon/InstagramIcon';
import TelegramIcon from '../assets/icnes/icones_contact-page/Telegram_Icon/TelegramIcon';
import WhatsAppIcon from '../assets/icnes/icones_contact-page/WhatsApp_Icon/WhatsAppIcon';
import EitaaIcon from '../assets/icnes/icones_contact-page/Eitaa_Icon/EitaaIcon';

const Footer = () => {

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/matin-sanati', icon: GithubIcon },
        { name: 'لینکدین', url: 'https://linkedin.com/in/matin-sanati', icon: LinkedInIcon },
        { name: 'اینستاگرام', url: 'https://instagram.com/Dev.01_01', icon: InstagramIcon },
        { name: 'تلگرام', url: 'https://t.me/Matin0011SA', icon: TelegramIcon },
        { name: 'واتس‌اپ', url: 'https://wa.me/989050450901', icon: WhatsAppIcon },
        { name: 'ایتا', url: 'https://eitaa.com/Matin1384SA', icon: EitaaIcon },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="footer-copy">
                        طراحی شده با ❤️ . . !
                    </p>

                    <div className="footer-social">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="footer-social-link"
                                aria-label={link.name}
                            >
                                <link.icon className="social-icon" />
                                <span className="tooltip">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
