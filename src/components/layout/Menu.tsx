import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icon/logo-blue.svg";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="menu-Page">
        <header className="menu-header">
          <Link to="/">
            <img src={logo} alt="" className="logo" />
          </Link>
          <button onClick={() => navigate(-1)}>
            {" "}
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
          <a href="">Biz haqimizda</a>
          <a href="">Ko’p so’raladigan savollar</a>
          <a href="">Biz bilan ishlash</a>
        </nav>
      </section>
    </>
  );
};

export default Menu;
