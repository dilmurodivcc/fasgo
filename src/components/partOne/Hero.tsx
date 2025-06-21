import { motion } from "framer-motion";
import iembroidery from "../../assets/icon/embroidery.png";
import phones from "../../assets/image/heroImg.png";
import phonesMOb from "../../assets/image/heroMobile.png";
import { useTranslation, Trans } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Trans
            i18nKey="hero.title"
            components={{
              1: (
                <span>
                  {/* SVG gradient */}
                  {/* ...svg code remains unchanged */}
                </span>
              ),
            }}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.button
          className="pm-button white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span>{t("download.button_text")}</span>
        </motion.button>
      </div>

      {/* Phones */}
      <motion.img
        src={phones}
        alt=""
        className="hero-phone"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      />

      <motion.img
        src={phonesMOb}
        alt=""
        className="imgMob"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      />

      {/* Decorations */}
      <img
        src={iembroidery}
        alt=""
        className="embroidery1"
        
      />
      <img
        src={iembroidery}
        alt=""
        className="embroidery2"
        
      />
    </section>
  );
};

export default Hero;
