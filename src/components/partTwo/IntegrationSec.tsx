import home from "/public/icons/home.svg";
import banerBg from "/public/icons/banerBg.svg";
import delevery from "/public/icons/delevery.svg";
import { useTranslation } from "react-i18next";
import { motion, easeOut } from "framer-motion";

const IntegrationSec = () => {
  const { t } = useTranslation();

  return (
    <section className="IntegratSec container">
      <h1 className="HeroTitle">{t("integration.title")}</h1>
      <div className="IntegratBannersSec">
        {[0, 1].map((i) => (
          <motion.div
            className="IntegratBannersSec_banner interagB"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * i, ease: easeOut }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="banner-content">
              {" "}
              <div className="interbanner_text">
                <h3>
                  {t(
                    i === 0
                      ? "integration.partner_title"
                      : "integration.courier_title"
                  )}
                </h3>
                <p>
                  {t(
                    i === 0
                      ? "integration.partner_text"
                      : "integration.courier_text"
                  )}
                </p>
              </div>
              <button className="pm-button white">
                <span>
                  {t(
                    i === 0
                      ? "integration.partner_button"
                      : "integration.courier_button"
                  )}
                </span>
              </button>
            </div>
            <img className="BannerImg" src={i === 0 ? home : delevery} alt="" />
            <img className="bannerBgimg" src={banerBg} alt="" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationSec;
