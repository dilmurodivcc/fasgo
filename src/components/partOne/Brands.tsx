import dodo from "../../assets/icon/dodo.svg";
import evos from "../../assets/icon/evos.svg";
import feedup from "../../assets/icon/feedup.svg";
import komolon from "../../assets/icon/komolon.svg";
import maxway from "../../assets/icon/maxway.svg";
import oqtepa from "../../assets/icon/oqtepa.svg";
import sariqbola from "../../assets/icon/sariqbola.svg";
const Brands = () => {
  return (
    <>
      <section className="brands">
        <img src={komolon} alt="" className="brandImg" />
        <img src={dodo} alt="" className="brandImg"/>
        <img src={maxway} alt="" className="brandImg"/>
        <img src={evos} alt="" className="brandImg"/>
        <img src={feedup} alt="" className="brandImg"/>
        <img src={oqtepa} alt="" className="brandImg"/>
        <img src={sariqbola} alt="" className="brandImg"/>
      </section>
    </>
  );
};

export default Brands;
