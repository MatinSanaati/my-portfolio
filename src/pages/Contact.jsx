import PhoneIcon from '../assets/icnes/Phone_icon/PhoneIcon';
import EitaaIcon from '../assets/icnes/icones_contact-page/Eitaa_Icon/EitaaIcon';
import EmailIcon from '../assets/icnes/icones_contact-page/Email_Icon/EmailIcon';
import GitHubIcon from '../assets/icnes/icones_contact-page/GitHub_Icon/GitHubIcon';
import InstagramIcon from '../assets/icnes/icones_contact-page/Instagram_Icon/InstagramIcon';
import LinkedInIcon from '../assets/icnes/icones_contact-page/LinkedIn_Icon/LinkedInIcon';
import TelegramIcon from '../assets/icnes/icones_contact-page/Telegram_Icon/TelegramIcon';
import WhatsAppIcon from '../assets/icnes/icones_contact-page/WhatsApp_Icon/WhatsAppIcon';
import './Contact.css';

const directContacts = [
    {
        name: "شماره تماس",
        value: "0905 045 0901",
        icon: PhoneIcon,
        link: "tel:+989050450901",
        hoverText: "منتظر تماست هستم . . ."
    },
    {
        name: "ایمیل",
        value: "matinsanati0901@gmail.com",
        icon: EmailIcon,
        link: "mailto:matinsanati0901@gmail.com",
        hoverText: "منتظر ایمیلت هستم . . ."
    }
];

const socialLinks = [
    {
        name: 'ایمیل',
        url: 'www.matinsanati0901@gmail.com',
        icon: EmailIcon,
        hoverText: 'منتظر ایمیلت هستم . . .',
        hoverDetail: 'matinsanati0901@gmail.com'
    },
    {
        name: 'لینکدین',
        url: 'https://linkedin.com/in/matin-sanati',
        icon: LinkedInIcon,
        hoverText: 'در لینکدین همکاری کنیم؟',
        hoverDetail: 'matin-sanati'
    },
    {
        name: 'گیت‌هاب',
        url: 'https://github.com/matin-sanati',
        icon: GitHubIcon,
        hoverText: 'کدهام رو ببین و ستاره بده',
        hoverDetail: 'matin-sanati'
    },
    {
        name: 'اینستاگرام',
        url: 'https://instagram.com/Dev.01_01',
        icon: InstagramIcon,
        hoverText: 'لحظه‌های کدنویسی من',
        hoverDetail: 'Dev.01_01'
    },
    {
        name: 'تلگرام',
        url: 'https://t.me/Matin0011SA',
        icon: TelegramIcon,
        hoverText: 'همین الان چت کنیم . . !',
        hoverDetail: 'Dev.01_01'
    },
    {
        name: 'واتس آپ',
        url: 'https://t.me/+989050450901',
        icon: WhatsAppIcon,
        hoverText: 'منتظر پیامت هستم . . .',
        hoverDetail: 'Dev.01_01'
    },
    {
        name: 'ایتا',
        url: 'https://eitaa.com/Matin1384SA',
        icon: EitaaIcon,
        hoverText: 'در ایتا با هم صحبت کنیم!',
        hoverDetail: 'Dev.01_01'
    }
];

const Contact = () => {
    return (
        <main className="contact-page">
            <section className="section">
                <div className="container">
                    <h2 className="section-title">راه های ارتباط با من</h2>
                    <p className="contact-intro">
                        سوالی دارید؟ یا پیشنهاد همکاری؟ خوشحال می‌شم از شما خبر بگیرم!
                    </p>

                    {/* بخش ارتباط مستقیم – بالای social-grid */}
                    <div className="direct-contact-wrapper">
                        {directContacts.map((contact, index) => (
                            <a
                                key={index}
                                href={contact.link}
                                className="direct-contact-card"
                                aria-label={contact.name}
                            >
                                <div className="direct-icon-wrapper">
                                    <contact.icon />
                                </div>
                                <div className="direct-info">
                                    <span className="direct-name">{contact.name}</span>
                                    <span className="direct-value">{contact.value}</span>
                                    <span className="direct-hover">{contact.hoverText}</span>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* شبکه‌های اجتماعی – بدون تغییر */}
                    <div className="social-grid">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="social-card"
                                aria-label={`ارتباط از طریق ${link.name}`}
                            >
                                <div className="card-content">
                                    <div className="social-icon-wrapper">
                                        <link.icon />
                                    </div>
                                    <span className="social-card-title">{link.name}</span>
                                </div>

                                <div className="hover-overlay">
                                    <div className="hover-content">
                                        <span className="hover-text">{link.hoverText}</span>
                                        <span className="hover-detail">{link.hoverDetail}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
