const Footer = () => {
  return (
    <>
      <div className="space"></div>

      <footer className="footer container">
        <div className="footerEklips elips1"></div>
        <div className="footer_links">
          <img src="/public/icons/logo.svg" alt="" />
          <a href="tel:+997123456789">Tel: +997 123 456 789</a>
          <a href="mailto:info@fasgo.app">Email: info@fasgo.app</a>
          <a href="location" className="footer_location">
            Manzil: O’zbekiston, Toshkent shahar, Chilonzor tumani Obod mavzesi,
            Istiqlol ko’chasi, 23A uy.
          </a>
          <div>
            <a href="">Ommaviy oferta</a>
            <a href="">Maxfiylik siyosati</a>
          </div>
        </div>
        <img
          src="/public/icons/footerelips.svg"
          alt=""
          className="footerEklips elips1"
        />
        <img
          src="/public/icons/footerelips.svg"
          alt=""
          className="footerEklips elips2"
        />
      </footer>
    </>
  );
};

export default Footer;
