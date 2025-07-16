import { useState, useEffect } from 'react';
import logo from '../../assets/icon/logo-blue.svg';
import { useTranslation } from 'react-i18next';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu = ({ isOpen, onClose }: MenuProps) => {
  const { t } = useTranslation();
  const [isClosing, setIsClosing] = useState(false);
  useEffect(() => {
    if (!isOpen) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setIsClosing(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <>
      <section className={`menu-Page ${isClosing ? 'closing' : ''}`}>
        <header className="menu-header">
          <img src={logo} alt="" className="logo" />
          <button onClick={handleClose}>
            <svg
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6445 35.3553L35.7867 21.2132"
                stroke="#0CC0DF"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M35.7867 35.3553L21.6445 21.2132"
                stroke="#0CC0DF"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </header>
        <nav className="nav">
          <a className="pointer" onClick={handleClose}>
            {t('header.about')}
          </a>
          <a
            href="https://form.jotform.com/251961567252462"
            target="_blank"
            onClick={handleClose}
          >
            {t('header.work')}
          </a>
          <a href="#faq" onClick={handleClose}>
            {t('header.faq')}
          </a>
        </nav>
      </section>
    </>
  );
};

export default Menu;
