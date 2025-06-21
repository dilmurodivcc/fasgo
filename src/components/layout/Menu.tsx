import logo from "../../assets/icon/logo-blue.svg";


const Menu = () => {
  return (
    <>
      <header className="meanu-header">
        <img src={logo} alt="" className="logo" />
      </header>
      <nav className="nav">
        <a href="">Biz haqimizda</a>
        <a href="">Ko’p so’raladigan savollar</a>
        <a href="">Biz bilan ishlash</a>
      </nav>
    </>
  );
};

export default Menu;
