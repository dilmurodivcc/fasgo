import choice1 from "../../assets/image/choice1.png";
import choice2 from "../../assets/image/choice2.png";
import choice3 from "../../assets/image/choice3.png";
import choice4 from "../../assets/image/choice5.png";
import choice5 from "../../assets/image/choice6.png";
import { useTranslation, Trans } from "react-i18next";

const WideChoice = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="wideChoice">
        <h2 className="HeroTitle">{t("wide_choice.title")}</h2>
        <p>
          <Trans
            i18nKey="wide_choice.text"
            components={{ 0: <b />, 1: <b /> }}
          />
        </p>
        <div className="choices">
          <img src={choice1} alt="" />
          <img src={choice2} alt="" />
          <img src={choice3} alt="" />
          <img src={choice4} alt="" />
          <img src={choice5} alt="" />
        </div>
      </section>
    </>
  );
};

export default WideChoice;
