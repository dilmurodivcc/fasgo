import { motion } from "framer-motion";
import choice1 from "../../assets/image/choice1.png";
import choice2 from "../../assets/image/choice2.png";
import choice3 from "../../assets/image/choice3.png";
import choice4 from "../../assets/image/choice5.png";
import choice5 from "../../assets/image/choice6.png";
import { useTranslation, Trans } from "react-i18next";

const choices = [choice1, choice2, choice3, choice4, choice5];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const WideChoice = () => {
  const { t } = useTranslation();

  return (
    <section className="wideChoice">
      <motion.h2
        className="HeroTitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {t("wide_choice.title")}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Trans i18nKey="wide_choice.text" components={{ 0: <b />, 1: <b /> }} />
      </motion.p>

      <motion.div
        className="choices"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {choices.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`choice-${index}`}
            variants={itemVariants}
            className="choice-img"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default WideChoice;
