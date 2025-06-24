import logo from '/public/icons/logo.svg';
import footerelips from '/public/icons/footerelips.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="space"></div>

      <footer className="footer container">
        <div className="footerEklips elips1"></div>
        <div className="footer_links">
          <img src={logo} alt="" />
          <a className='tel' href="tel:+997123456789">{t('footer.tel')}: +997 123 456 789</a>
          <a className='mail' href="mailto:info@fasgo.app">
            {t('footer.email')}: info@fasgo.app
          </a>
          <a href="location" className="footer_location">
            {t('footer.address')}
          </a>
          <div>
            <a href="/offer">{t('footer.offer')}</a>
            <a href="/privacy-policy">{t('footer.privacy')}</a>
          </div>
        </div>
        <img src={footerelips} alt="" className="footerEklips elips1" />
        <img src={footerelips} alt="" className="footerEklips elips2" />
      </footer>
    </>
  );
};

export default Footer;
