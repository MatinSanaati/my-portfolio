import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

import videoDashboardBehtime from "../assets/videos/projects/داشبودر مدیریتی بهتایم.mp4";
import videoDigitalStore from "../assets/videos/projects/فروشگاه دیجیتالی موبایل شاپ.mp4";
import videoUserPanel from "../assets/videos/projects/داشبورد تحلیل آمار سایت.mp4";
import videoAdminPanel from "../assets/videos/projects/داشبورد تحلیل آمار سایت.mp4";

const projects = [
  {
    id: 1,
    title: "مدیر پروژه شخصی",
    description: "یک اپلیکیشن تعاملی برای مدیریت وظایف و پروژه‌های شخصی شما.",
    tech: ["React", "Redux Toolkit", "CSS"],
    liveLink: "#",
    codeLink: "https://github.com/MatinSanaati/Management-Panel",
    category: "مدیریت",
    video: videoDashboardBehtime,
  },
  {
    id: 2,
    title: "فروشگاه دیجیتالی",
    description: "فروشگاهی برای محصولات دیجیتالی با فیلتر، جست‌وجو و سبد خرید.",
    tech: ["React", "Context API", "CSS"],
    liveLink: "",
    codeLink: "https://github.com/MatinSanaati/Digi-Tali-Store",
    category: "فروشگاهی",
    video: videoDigitalStore,
  },
  {
    id: 3,
    title: "پنل کاربر",
    description:
      "پنل نمایش داده‌های ساختگی با چارت‌های تعاملی و طراحی ریسپانسیو.",
    tech: [
      "Vite",
      "React (React Router DOM v6)",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    liveLink: "https://user-panel-5gnf.vercel.app/",
    codeLink: "https://github.com/MatinSanaati/Management-Panel",
    category: "داشبورد",
    video: videoUserPanel,
  },
  {
    id: 4,
    title: "پنل مدیریت",
    description: "پنل مدیریتی حرفه‌ای با داشبوردهای تعاملی و داده‌های ساختگی.",
    tech: ["Vite", "React", "Redux", "CSS3", "TypeScript"],
    liveLink: "https://management-panel-nu.vercel.app/",
    codeLink: "https://github.com/MatinSanaati/User-panel",
    category: "داشبورد",
    video: videoAdminPanel,
  },
];

const categories = ["همه", ...new Set(projects.map((p) => p.category))];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("همه");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "همه"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  document.body.style.overflow = selectedProject ? "hidden" : "auto";

  return (
    <main className="projects-page">
      <section className="section">
        <div className="container">
          <h2 className="section-title">نمونه کارها</h2>
          <p className="projects-intro">
            اینجا چند نمونه از پروژه‌هایی که با عشق و دقت ساخته‌ام رو می‌بینید.
          </p>

          <div className="projects-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="project-box"
                  onClick={() => setSelectedProject(project)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <video
                    src={project.video}
                    className="project-video"
                    autoPlay
                    muted
                    loop
                  />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-category">{project.category}</p>
                      <button className="btn-light">مشاهده جزئیات</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <p className="no-projects">پروژه‌ای در این دسته‌بندی وجود ندارد.</p>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal"
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              <div className="modal-video-wrapper">
                <video
                  src={selectedProject.video}
                  controls
                  className="modal-video"
                />
              </div>

              <div className="modal-info">
                <h3>{selectedProject.title}</h3>
                <p className="modal-description">
                  {selectedProject.description}
                </p>

                <div className="modal-tech-section">
                  <h4>تکنولوژی‌های استفاده شده</h4>
                  <p className="modal-tech-text">
                    {selectedProject.tech.join("، ")}
                  </p>
                </div>

                <div className="modal-links">
                  <div className="tooltip-wrapper">
                    <a
                      href={selectedProject.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                    >
                      سورس‌ کد
                    </a>
                    <span className="tooltip-text">مشاهده سورس کد</span>
                  </div>

                  <div className="tooltip-wrapper">
                    <a
                      href={selectedProject.liveLink || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      مشاهده پروژه
                    </a>
                    <span className="tooltip-text">مشاهده پروژه</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Projects;
