import home from "/public/icons/home.svg";
import banerBg from "/public/icons/banerBg.svg";
import delevery from "/public/icons/delevery.svg";

const IntegrationSec = () => {
  return (
    <section className="IntegratSec container">
      <h1 className="HeroTitle">Biz bilan ishlash</h1>
      <div className="IntegratBannersSec">
        <div className="IntegratBannersSec_banner interagB">
          <div className="interbanner_text">
            <h3>Fasgo hamkori bo’lish</h3>
            <p>Platformamizga qo‘shilib, minglab mijozlarga yetib boring.</p>
            <button className="pm-button white">
              <span>Hamkor bo’lish</span>
            </button>
          </div>
          <img className="BannerImg" src={home} alt="" />
          <img className="bannerBgimg" src={banerBg} alt="" />
        </div>
        <div className="IntegratBannersSec_banner interagB">
          <div className="interbanner_text">
            <h3>Fasgo hamkori bo’lish</h3>
            <p>Platformamizga qo‘shilib, minglab mijozlarga yetib boring.</p>
            <button className="pm-button white">
              <span>Hamkor bo’lish</span>
            </button>
          </div>
          <img className="BannerImg" src={delevery} alt="" />
          <img className="bannerBgimg" src={banerBg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default IntegrationSec;
