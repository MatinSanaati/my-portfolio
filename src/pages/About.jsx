// src/pages/About.jsx
import "./About.css";

import profleimg from "../assets/img/profile-img/profle-img.jpg";
import InstagramIcon from "../assets/icnes/icones_contact-page/Instagram_Icon/InstagramIcon";
import EmailIcon from "../assets/icnes/icones_contact-page/Email_Icon/EmailIcon";
import TelegramIcon from "../assets/icnes/icones_contact-page/Telegram_Icon/TelegramIcon";
import PhoneIcon from "../assets/icnes/Phone_icon/PhoneIcon";
import LeftArrowIcon from "../assets/icnes/icones_home-page/Portfolio-section-icon/left-arrow/left-arrow-icon";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="about-page">
      <section className="section">
        <div className="container">
          <h2 className="section-title">درباره من</h2>
          <div className="about-content">
            <div className="about-text">
              <p>متین صنعتی هستم 🙋‍♂️</p>
              <p>
                یه برنامه نویس معمولی که تخصصم سمت توسعه ی فراند و کلاینت وبسایت
                هست و از سال 1402 وارد این محیط جذاب و پرچالش برنامه نویسی و
                توسعه نرم افزار تحت وب شدم.
              </p>
              <p>
                موقع ورورد به پایه یازدهم وارد حوزه نرم افزار شدم (به پیشنهاد
                اقوام) و به صورت حرفه ای و مشتاقانه دارم فعالیت میکنم. رشته ی
                تحصلیم کشاورزی (شاخه گل و گیاهان جالیزی) بوده ولی بعد از ورود به
                این حوزه علاقم به کامپوتر و نرم افزار بیشتر شده و بعد از ورود به
                دانشگاه قصد تاغیر رشته به رشته ی کامپوتر دارم.
              </p>
              <p>
                درحال حاظر دارم روی مهارت های خودم کار میکنم که بتونم در ساخت و
                توسعه ی پلتفرم های تحت وب یه ابتکار عمل بدست بیارم. برای آشنایی
                بیشتر میتونی به پلفترم هام پیام بدی . . . :)
              </p>

              <Link to="/contact" className="btn-section-projects-preview">
                تماس با من
                <span className="arrow-wrapper">
                  <LeftArrowIcon />
                </span>
              </Link>

              <hr className="about-divider" />

              {/* راه‌های ارتباطی با آیکون‌های SVG و UI خفن */}
              <div className="contact-info-section">
                <h3>راه‌های ارتباطی</h3>
                <div className="contact-cards">
                  <a
                    href="https://instagram.com/matin_sanati_"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-card"
                    aria-label="اینستاگرام"
                  >
                    <div className="contact-icon">
                      <InstagramIcon />
                    </div>
                    <div className="contact-text">
                      <span className="contact-platform">اینستاگرام</span>
                      <span className="contact-handle">@Dev.01_01</span>
                    </div>
                  </a>

                  <a
                    href="tel:+989050450901"
                    className="contact-card"
                    aria-label="تلفن همراه"
                  >
                    <div className="contact-icon">
                      <PhoneIcon />
                    </div>
                    <div className="contact-text">
                      <span className="contact-platform">تلفن همراه</span>
                      <span className="contact-handle">0905 045 0901</span>
                    </div>
                  </a>

                  <a
                    href="mailto:matinsanati0901@gmail.com"
                    className="contact-card"
                    aria-label="ایمیل"
                  >
                    <div className="contact-icon">
                      <EmailIcon />
                    </div>
                    <div className="contact-text">
                      <span className="contact-platform">ایمیل</span>
                      <span className="contact-handle">
                        matinsanati0901@gmail.com
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://t.me/Matin0011SA"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-card"
                    aria-label="تلگرام"
                  >
                    <div className="contact-icon">
                      <TelegramIcon />
                    </div>
                    <div className="contact-text">
                      <span className="contact-platform">تلگرام</span>
                      <span className="contact-handle">@Matin0011SA</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* مهارت‌ها با سطح */}
              <div className="skills-section">
                <h3>مهارت‌های من</h3>
                <div className="skill-item">
                  <span className="skill-name" data-level="80%">
                    HTML & CSS
                  </span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name" data-level="90%">
                    CSS3 / Tailwind
                  </span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name" data-level="80%">
                    JavaScript
                  </span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name" data-level="50%">
                    TypeScript
                  </span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "50%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name" data-level="85%">
                    React
                  </span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name" data-level="60%">
                    Next JS
                  </span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name" data-level="50%">
                    ابزار های Redux
                  </span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "50%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name" data-level="85%">
                    Git & GitHub
                  </span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name" data-level="90%">
                    UI/UX Design
                  </span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image">
              <div className="placeholder-image">
                <img
                  src={profleimg}
                  alt="متین صنعتی"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
