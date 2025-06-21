const QuestionsSec = () => {
  return (
    <section className="QuestionsSec container">
      <h1 className="QuestionsSec__title HeroTitle">Ko’p so’raladigan savollar</h1>
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
              Buyurtma joylashgan joyga va restoran bandligiga qarab, o‘rtacha
              30-45 daqiqa ichida yetkaziladi.
            </p>
          </div>
        </div>
        <div className="QuestionsBox_question">
          <div className="QuestionsBox_question_imgBox">
            <img src="/public/icons/QuestionStar3.svg" alt="" />
          </div>

          <div className="QuestionsBox_questions_text">
            <h3>To‘lovni qanday amalga oshiraman?</h3>
            <p>
              Siz to‘lovni istalgan bank karta bilan yoki naqd pulda, yetkazib
              beruvchi orqali amalga oshirishingiz mumkin.
            </p>
          </div>
        </div>
        <div className="QuestionsBox_question">
          <div className="QuestionsBox_question_imgBox">
            <img src="/public/icons/QuestionStar4.svg" alt="" />
          </div>

          <div className="QuestionsBox_questions_text">
            <h3>Taom yetib kelmasa yoki muammo bo‘lsa nima qilaman?</h3>
            <p>
              Mijozlar xizmatiga murojaat qiling – biz muammoni tezda hal
              qilamiz yoki pulingizni qaytaramiz.
            </p>
          </div>
        </div>
        <div className="QuestionsBox_question">
          <div className="QuestionsBox_question_imgBox">
            <img src="/public/icons/QuestionStar5.svg" alt="" />
          </div>

          <div className="QuestionsBox_questions_text">
            <h3>Qanday taomlar mavjud?</h3>
            <p>
              Fasgo’da milliy, fastfud, vegetarian, osiyo, yevropa
              oshxonalaridan minglab taomlar bor – har kun yangi tanlov!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSec;
