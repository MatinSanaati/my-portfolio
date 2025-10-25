// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Header.css";
import ToggleMenuIcon from "../assets/icnes/Toggle_Menu/ToggleMenu";

const navItems = [
  { name: "درباره من", path: "/about" },
  { name: "نمونه کارها", path: "/projects" },
  { name: "تماس با من", path: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // قفل اسکرول هنگام باز بودن منو
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container header-container">
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(true)}
          aria-label="باز کردن منو"
        >
          <ToggleMenuIcon isActive={isMenuOpen} />
        </button>

        <Link to="/" className="logo">
          پورتفولیوی من
        </Link>

        {/* منوی دسکتاپ */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ThemeToggle />
      </div>

      {/* منوی موبایل */}
      {isMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <button
              className="mobile-menu-close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="بستن منو"
            >
              ×
            </button>
            <nav className="mobile-nav">
              <ul className="mobile-nav-list">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`mobile-nav-link ${
                        location.pathname === item.path ? "active" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
