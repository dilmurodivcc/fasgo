import iembroidery from "../../assets/icon/embroidery.png";
import phones from "../../assets/image/heroImg.png";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="content">
          <h1>Sevimli restoranlardan taomlarni  tez yetkazib berish</h1>
          <p>Milliy taomlar, fast-food, desert va ichimliklar bir ilovada!</p>
          <button>Ilovani yuklab olish</button>
        </div>
        <img src={phones} alt="" />

        <img src={iembroidery} className="embroidery1" alt="" />
        <img src={iembroidery} className="embroidery2" alt="" />
      </section>
    </>
  );
};

export default Hero;
