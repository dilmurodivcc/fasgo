import choice1 from "../../assets/image/choice1.png";
import choice2 from "../../assets/image/choice2.png";
import choice3 from "../../assets/image/choice3.png";
import choice4 from "../../assets/image/choice5.png";
import choice5 from "../../assets/image/choice6.png";

const WideChoice = () => {
  return (
    <>
      <section className="wideChoice">
        <h2 className="HeroTitle">Keng tanlov imkoniyati</h2>
        <p>
          <b>Fasgo</b>’da ta’bingizga mos ming xil taom bor! Milliy palovdan
          tortib, italyan pizzasi, yapon sushisi yoki amerika burgerigacha —
          hammasi <b>bir joyda</b>. Bugun lag'mon, ertaga sushi? Tanlov sizdan!
          Har kun yangi ta’m, har buyurtma – mazali sarguzasht!
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
