import tg from "/public/icons/tg.svg";
import insta from "/public/icons/insta.svg";
import facebooks from "/public/icons/facebooks.svg";

const SocialMedia = () => {
  return (
    <section className="SocialMediaSec container">
      <h1 className="HeroTitle">Fasgo ijtimoiy tarmoqlarda</h1>
      <div className="SocialMediBox">
        <div className="SocilmediaBox_socialMedia">
          <a href="@fasgo.app">
            <img src={tg} alt="" />
            <div>
              <h4>Telegram</h4>
              <p>fasgo.app</p>
            </div>
          </a>
        </div>
        <div className="SocilmediaBox_socialMedia">
          <a href="@fasgo.app">
            <img src={insta} alt="" />
            <div>
              <h4>Instagram</h4>
              <p>fasgo_official</p>
            </div>
          </a>
        </div>
        <div className="SocilmediaBox_socialMedia">
          <a href="@fasgo.app">
            <img src={facebooks} alt="" />
            <div>
              <h4>Facebook</h4>
              <p>fasgo.app</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
