import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/icon/logo-blue.svg";
import lang from "../../assets/icon/language.svg";
import ru from "../../assets/icon/ru.webp";
import en from "../../assets/icon/en.webp";
import arrow from "../../assets/icon/arrow-down.svg";
import Menu from "./Menu";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleLangChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <img src={logo} alt="" className="logo" />
          <nav className="nav">
            <a href="">Biz haqimizda</a>
            <a href="">Ko'p so'raladigan savollar</a>
            <a href="">Biz bilan ishlash</a>
          </nav>
          <div className="actions">
            <div
              className={`lang-dropdown-wrapper${dropdownOpen ? " open" : ""}`}
              ref={dropdownRef}
            >
              <div className="lang-dropdown-row">
                <button
                  className="lang"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  aria-label="Tilni tanlash"
                >
                  <img src={lang} alt="flag" className="flag" />
                  <img
                    src={arrow}
                    alt="arrow"
                    className={`arrow${dropdownOpen ? " open" : ""}`}
                    style={{
                      transform: dropdownOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>
                {dropdownOpen && (
                  <div className="lang-dropdown lang-dropdown-horizontal">
                    <button
                      className={`lang-option${
                        currentLang === "uz" ? " active" : ""
                      }`}
                      onClick={() => handleLangChange("uz")}
                    >
                      <img src={lang} alt="uz flag" className="flag" />
                    </button>
                    <button
                      className={`lang-option${
                        currentLang === "ru" ? " active" : ""
                      }`}
                      onClick={() => handleLangChange("ru")}
                    >
                      <img src={ru} alt="ru flag" className="flag" />
                    </button>
                    <button
                      className={`lang-option${
                        currentLang === "en" ? " active" : ""
                      }`}
                      onClick={() => handleLangChange("en")}
                    >
                      <img src={en} alt="en flag" className="flag" />
                    </button>
                  </div>
                )}
              </div>
            </div>
            <button className="pm-button blue">Yuklab lish</button>
            <button className="menu" onClick={handleMenuToggle}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 9.33333H28"
                  stroke="#0CC0DF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M4 16H28"
                  stroke="#0CC0DF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M4 22.6667H28"
                  stroke="#0CC0DF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
