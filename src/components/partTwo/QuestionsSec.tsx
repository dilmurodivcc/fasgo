import QuestionStar1 from "/public/icons/QuestionStar1.svg";
import QuestionStar2 from "/public/icons/QuestionStar2.svg";
import QuestionStar3 from "/public/icons/QuestionStar3.svg";
import QuestionStar4 from "/public/icons/QuestionStar4.svg";
import QuestionStar5 from "/public/icons/QuestionStar5.svg";
import { useTranslation } from "react-i18next";

const QuestionsSec = () => {
  const { t } = useTranslation();

  return (
    <section className="QuestionsSec container">
      <h1 className="QuestionsSec__title HeroTitle">{t("questions.title")}</h1>
      <div className="QuestionsBox">
        <div className="QuestionsBox_question">
          <div className="QuestionsBox_question_imgBox">
            <img src={QuestionStar1} alt="" />
          </div>

          <div className="QuestionsBox_questions_text">
            <h3>{t("questions.q1_title")}</h3>
            <p>{t("questions.q1_text")}</p>
          </div>
        </div>
        <div className="QuestionsBox_question">
          <div className="QuestionsBox_question_imgBox">
            <img src={QuestionStar2} alt="" />
          </div>

          <div className="QuestionsBox_questions_text">
            <h3>{t("questions.q2_title")}</h3>
            <p>{t("questions.q2_text")}</p>
          </div>
        </div>
        <div className="QuestionsBox_question">
          <div className="QuestionsBox_question_imgBox">
            <img src={QuestionStar3} alt="" />
          </div>

          <div className="QuestionsBox_questions_text">
            <h3>{t("questions.q3_title")}</h3>
            <p>{t("questions.q3_text")}</p>
          </div>
        </div>
        <div className="QuestionsBox_question">
          <div className="QuestionsBox_question_imgBox">
            <img src={QuestionStar4} alt="" />
          </div>

          <div className="QuestionsBox_questions_text">
            <h3>{t("questions.q4_title")}</h3>
            <p>{t("questions.q4_text")}</p>
          </div>
        </div>
        <div className="QuestionsBox_question">
          <div className="QuestionsBox_question_imgBox">
            <img src={QuestionStar5} alt="" />
          </div>

          <div className="QuestionsBox_questions_text">
            <h3>{t("questions.q5_title")}</h3>
            <p>{t("questions.q5_text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSec;
