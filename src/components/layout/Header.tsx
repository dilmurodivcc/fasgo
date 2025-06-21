import logo from "../../assets/icon/logo-blue.svg";
import lang from "../../assets/icon/language.svg";
import arrow from "../../assets/icon/arrow-down.svg";
const Header = () => {
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
            <button className="lang">
              <img src={lang} alt="" className="flag" />
              <img src={arrow} alt="" />
            </button>
            <button className="pm-button blue">Yuklab lish</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
