import QuestionStar1 from "/public/icons/QuestionStar1.svg";
import QuestionStar2 from "/public/icons/QuestionStar2.svg";
import QuestionStar3 from "/public/icons/QuestionStar3.svg";
import QuestionStar4 from "/public/icons/QuestionStar4.svg";
import QuestionStar5 from "/public/icons/QuestionStar5.svg";
import { useTranslation } from "react-i18next";
import { motion, easeOut } from "framer-motion";

const QuestionsSec = () => {
  const { t } = useTranslation();
  const questions = [
    {
      icon: QuestionStar1,
      title: t("questions.q1_title"),
      text: t("questions.q1_text"),
    },
    {
      icon: QuestionStar2,
      title: t("questions.q2_title"),
      text: t("questions.q2_text"),
    },
    {
      icon: QuestionStar3,
      title: t("questions.q3_title"),
      text: t("questions.q3_text"),
    },
    {
      icon: QuestionStar4,
      title: t("questions.q4_title"),
      text: t("questions.q4_text"),
    },
    {
      icon: QuestionStar5,
      title: t("questions.q5_title"),
      text: t("questions.q5_text"),
    },
  ];

  return (
    <section className="QuestionsSec container">
      <h1 className="QuestionsSec__title HeroTitle">{t("questions.title")}</h1>
      <div className="QuestionsBox">
        {questions.map((q, i) => (
          <motion.div
            className="QuestionsBox_question"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 * i, ease: easeOut }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="QuestionsBox_question_imgBox">
              <img src={q.icon} alt="" />
            </div>
            <div className="QuestionsBox_questions_text">
              <h3>{q.title}</h3>
              <p>{q.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QuestionsSec;
