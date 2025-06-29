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
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 12.25C2 11.0074 3.00736 10 4.25 10H13.25C13.6642 10 14 10.3358 14 10.75C14 11.9926 12.9926 13 11.75 13H2.75C2.33579 13 2 12.6642 2 12.25Z"
                      fill="url(#paint0_linear_2010_138)"
                    />
                    <path
                      d="M3 2.25C3 1.00736 4.00736 0 5.25 0H14.25C14.6642 0 15 0.335786 15 0.75C15 1.99264 13.9926 3 12.75 3H3.75C3.33579 3 3 2.66421 3 2.25Z"
                      fill="url(#paint1_linear_2010_138)"
                    />
                    <path
                      d="M0 7.25C0 6.00736 1.00736 5 2.25 5H11.25C11.6642 5 12 5.33579 12 5.75C12 6.99264 10.9926 8 9.75 8H0.75C0.335786 8 0 7.66421 0 7.25Z"
                      fill="url(#paint2_linear_2010_138)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2010_138"
                        x1="2"
                        y1="11.5"
                        x2="36"
                        y2="11"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A471D8" />
                        <stop offset="1" stop-color="white" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2010_138"
                        x1="3"
                        y1="1.5"
                        x2="37"
                        y2="1"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A471D8" />
                        <stop offset="1" stop-color="white" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_2010_138"
                        x1="1.97906e-09"
                        y1="6.5"
                        x2="34"
                        y2="6"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A471D8" />
                        <stop offset="1" stop-color="white" />
                      </linearGradient>
                    </defs>
                  </svg>{" "}
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

      <motion.img
        src={phones}
        alt=""
        min-width="600px"
        className="hero-phone"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
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

      <img src={iembroidery} alt="" className="embroidery1" />
      <img src={iembroidery} alt="" className="embroidery2" />
    </section>
  );
};

export default Hero;
