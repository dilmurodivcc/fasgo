import home from "/public/icons/home.svg";
import banerBg from "/public/icons/banerBg.svg";
import delevery from "/public/icons/delevery.svg";
import { useTranslation } from "react-i18next";

const IntegrationSec = () => {
  const { t } = useTranslation();

  return (
    <section className="IntegratSec container">
      <h1 className="HeroTitle">{t("integration.title")}</h1>
      <div className="IntegratBannersSec">
        <div className="IntegratBannersSec_banner interagB">
          <div className="interbanner_text">
            <h3>{t("integration.partner_title")}</h3>
            <p>{t("integration.partner_text")}</p>
            <button className="pm-button white">
              <span>{t("integration.partner_button")}</span>
            </button>
          </div>
          <img className="BannerImg" src={home} alt="" />
          <img className="bannerBgimg" src={banerBg} alt="" />
        </div>
        <div className="IntegratBannersSec_banner interagB">
          <div className="interbanner_text">
            <h3>{t("integration.courier_title")}</h3>
            <p>{t("integration.courier_text")}</p>
            <button className="pm-button white">
              <span>{t("integration.courier_button")}</span>
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
