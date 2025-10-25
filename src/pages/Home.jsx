// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
import ProfileImg from '../../public/profile-img/profle-img.jpg';
import LeftArrowIcon from '../assets/icnes/icones_home-page/Portfolio-section-icon/left-arrow/left-arrow-icon';

const projects = [
    {
        id: 1,
        title: 'مدیر پروژه شخصی',
        description: 'یک اپلیکیشن تعاملی ...',
        tech: ['React', 'Redux Toolkit', 'CSS'],
        liveLink: '#',
        codeLink: 'https://github.com/yourusername/personal-project-tracker',
        category: 'مدیریت',
        video: '/public/videos/projects/داشبودر مدیریتی بهتایم.mp4'
    },
    {
        id: 2,
        title: 'فروشگاه دیجیتالی',
        description: 'فروشگاهی برای محصولات دیجیتالی ...',
        tech: ['React', 'Context API', 'CSS'],
        liveLink: '#',
        codeLink: 'https://github.com/yourusername/digital-store',
        category: 'فروشگاهی',
        video: '/public/videos/projects/فروشگاه دیجیتالی موبایل شاپ.mp4'
    },
    {
        id: 3,
        title: 'داشبورد آماری',
        description: 'نمایش داده‌های ساختگی با چارت‌های تعاملی ...',
        tech: ['React', 'Recharts', 'CSS'],
        liveLink: '#',
        codeLink: 'https://github.com/yourusername/analytics-dashboard',
        category: 'داشبورد',
        video: '/public/videos/projects/داشبورد تحلیل آمار سایت.mp4'
    }
];


const Home = () => {
    // ===== تایپ افکت =====
    const texts = [
        "سلام، من متین صنعتی هستم",
        "برنامه نویس و توسعه‌دهندهٔ فرانت‌ وب",
        "عاشق ساخت UI حرفه ای و UX تعاملی خفن",
        "با تکنولوژی های مدرن و آپدیت شده دست و پنجه نرم میکنم",
        "اگه تمایل به همکاری داشتی باهام ارتباط بگیر",
        "مخلصم 🙋‍♂️❤️ . . !"
    ];

    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;
        if (isDeleting) {
            if (subIndex > 0) {
                timer = setTimeout(() => {
                    setText(texts[index].substring(0, subIndex - 1));
                    setSubIndex(subIndex - 1);
                }, 50);
            } else {
                timer = setTimeout(() => {
                    setIndex((prev) => (prev + 1) % texts.length);
                    setIsDeleting(false);
                }, 300);
            }
        } else {
            if (subIndex < texts[index].length) {
                timer = setTimeout(() => {
                    setText(texts[index].substring(0, subIndex + 1));
                    setSubIndex(subIndex + 1);
                }, 100);
            } else {
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000);
            }
        }
        return () => clearTimeout(timer);
    }, [text, index, subIndex, isDeleting, texts]);

    // ===== ویترین نمونه کارها (دسته‌ها و فیلتر) =====
    const [activeCategory, setActiveCategory] = useState('همه');
    const categories = ['همه', ...new Set(projects.map(p => p.category))];
    const filteredProjects =
        activeCategory === 'همه'
            ? projects
            : projects.filter(p => p.category === activeCategory);

    return (
        <main>
            {/* معرفی — دو ستونی (بدون تغییر ساختار) */}
            <section className="section intro-section">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-text-wrapper">
                            <h2 className="intro-title">
                                {text}
                                <span className={`cursor ${!isDeleting && subIndex < texts[index].length ? 'visible' : ''}`}></span>
                            </h2>
                            <p className="intro-text">
                                یک توسعه‌دهندهٔ فرانت‌اند علاقه‌مند به ساخت تجربه‌های کاربری تعاملی و زیبا.
                                با React، Next، Redux و فناوری‌های مدرن وب کار می‌کنم.
                            </p>

                            <Link to="/about" className="btn-section-projects-preview">
                                درباره من
                                <span className="arrow-wrapper"><LeftArrowIcon /></span>
                            </Link>
                        </div>

                        <div className="intro-image">
                            <div className="image-slider">
                                <img src={ProfileImg} alt="عکس من" className="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* وبلاگ (بدون تغییر) */}
            <section className="section blog-section">
                <div className="container">
                    <h2 className="section-title">وبلاگ من</h2>
                    <div className="blog-post">
                        <h3>چرا پورتفولیو برای یک توسعه‌دهندهٔ فرانت‌ ضروری است؟</h3>
                        <p>
                            پورتفولیو تنها راه نمایش مهارت‌های عملی برنامه نویساس. در دنیای رقابتی امروز، شرکت‌ها به دنبال افرادی هستند که بتوانند نشان بدهند چجوری فکر می‌کنند و چجوری مشکلات را حل می‌کنند — نه اینکه صرفا چه فناوری‌هایی بلدند و چجوری سورس میزنن . . . !
                            <br />
                            اگه دنبال این مدل فردی هستید خوب جایی اومدی رفیق 👌🙂
                        </p>
                    </div>
                </div>
            </section>

            {/* نمونه‌کارها — ویترین */}
            <section className="section projects-preview">
                <div className="container">
                    <h2 className="section-title">نمونه کارها</h2>
                    <p className="preview-text">چند تا از پروژه‌هایی که با عشق ساختم رو ببین 😍</p>

                    {/* فیلتر */}
                    <div className="projects-filter">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* ویترین پروژه‌ها: توجه کن اینجا دقیقا از آرایه projects استفاده میشه */}
                    <div className="preview-video-grid">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    className="preview-video-card"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 12 }}
                                    transition={{ duration: 0.28 }}
                                >
                                    {/* ویدیو — autoplay, loop, muted, playsInline برای ویترین */}
                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="preview-video"
                                    // اگر خواستی کنترل کلیک روی ویدیو برای پخش/وقفه اضافه کن
                                    />

                                    <div className="video-info">
                                        {/* عنوان دقیق از آرایه projects گرفته میشه */}
                                        <h3>{project.title}</h3>
                                        <span>{project.category}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <Link to="/projects" className="btn-section-projects-preview projects-btn">
                        مشاهده همه پروژه‌ها
                        <span className="arrow-wrapper"><LeftArrowIcon /></span>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Home;
