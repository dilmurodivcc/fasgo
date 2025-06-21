import  { useState, useRef, useEffect } from "react";
import logo from "../../assets/icon/logo-blue.svg";
import lang from "../../assets/icon/language.svg";
import arrow from "../../assets/icon/arrow-down.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <header className="header">
        <div className="container">
          <img src={logo} alt="" className="logo" />
          <nav className="nav">
            <a href="">Biz haqimizda</a>
            <a href="">Ko’p so’raladigan savollar</a>
            <a href="">Biz bilan ishlash</a>
          </nav>
          <div className="actions">
            <div
              className={`lang-dropdown-wrapper${dropdownOpen ? " open" : ""}`}
              ref={dropdownRef}
            >
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
                    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>
              {dropdownOpen && (
                <div className="lang-dropdown">
                  <button className="lang-option">
                    <img src={lang} alt="uz flag" className="flag" />
                  </button>
                  <button className="lang-option">
                    <img src={lang} alt="ru flag" className="flag" />
                  </button>
                </div>
              )}
            </div>
            <button className="pm-button blue">Yuklab lish</button>
            <Link to="/menu">
            <button className="menu">
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
            </Link>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
