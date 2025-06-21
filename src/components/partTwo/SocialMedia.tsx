import tg from "/public/icons/tg.svg";
import insta from "/public/icons/insta.svg";
import facebooks from "/public/icons/facebooks.svg";
import { useTranslation } from "react-i18next";

const SocialMedia = () => {
  const { t } = useTranslation();

  return (
    <section className="SocialMediaSec container">
      <h1 className="HeroTitle">{t("social_media.title")}</h1>
      <div className="SocialMediBox">
        <div className="SocilmediaBox_socialMedia">
          <a href="@fasgo.app">
            <img src={tg} alt="" />
            <div>
              <h4>{t("social_media.telegram")}</h4>
              <p>fasgo.app</p>
            </div>
          </a>
        </div>
        <div className="SocilmediaBox_socialMedia">
          <a href="@fasgo.app">
            <img src={insta} alt="" />
            <div>
              <h4>{t("social_media.instagram")}</h4>
              <p>fasgo_official</p>
            </div>
          </a>
        </div>
        <div className="SocilmediaBox_socialMedia">
          <a href="@fasgo.app">
            <img src={facebooks} alt="" />
            <div>
              <h4>{t("social_media.facebook")}</h4>
              <p>fasgo.app</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia; 