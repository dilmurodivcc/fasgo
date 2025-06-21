const QuestionsSec = () => {
  return (
    <section className="QuestionsSec container">
      <h1 className="QuestionsSec__title">Ko’p so’raladigan savollar</h1>
      <div className="QuestionsBox">
        <div className="QuestionsBox_question">
          <div className="QuestionsBox_question_imgBox">
            <img src="/public/icons/QuestionStar1.svg" alt="" />
           
          </div>

          <div className="QuestionsBox_questions_text">
            <h3>Fasgo ilovasi orqali qanday buyurtma beraman?</h3>
            <p>
              Ilovani yuklab olib, ro‘yxatdan o‘tasiz, menyudan taom tanlaysiz
              va “Buyurtma berish” tugmasini bosasiz. Qolganini biz hal qilamiz!
            </p>
          </div>
        </div>
        <div className="QuestionsBox_question">
          <div className="QuestionsBox_question_imgBox">
            <img src="/public/icons/QuestionStar2.svg" alt="" />
        
          </div>

          <div className="QuestionsBox_questions_text">
            <h3>Yetkazib berish qancha vaqt oladi?</h3>
            <p>
            Buyurtma joylashgan joyga va restoran bandligiga qarab, o‘rtacha 30-45 daqiqa ichida yetkaziladi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSec;
