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
          <img className="BannerImg" src="/public/icons/home.svg" alt="" />
          <img className="bannerBgimg" src="/public/icons/banerBg.svg" alt="" />
        </div>
        <div className="IntegratBannersSec_banner interagB">
          <div className="interbanner_text">
            <h3>Fasgo hamkori bo’lish</h3>
            <p>Platformamizga qo‘shilib, minglab mijozlarga yetib boring.</p>
            <button className="pm-button white">
              <span>Hamkor bo’lish</span>
            </button>
          </div>
          <img className="BannerImg" src="/public/icons/delevery.svg" alt="" />
          <img className="bannerBgimg" src="/public/icons/banerBg.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default IntegrationSec;
