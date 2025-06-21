import { motion } from "framer-motion";
import dodo from "../../assets/icon/dodo.svg";
import evos from "../../assets/icon/evos.svg";
import feedup from "../../assets/icon/feedup.svg";
import komolon from "../../assets/icon/komolon.svg";
import maxway from "../../assets/icon/maxway.svg";
import oqtepa from "../../assets/icon/oqtepa.svg";
import sariqbola from "../../assets/icon/sariqbola.svg";

const brandImages = [komolon, dodo, maxway, evos, feedup, oqtepa, sariqbola];

const Brands = () => {
  return (
    <section className="brands">
      {brandImages.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt={`brand-${index}`}
          className="brandImg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.1 }}
        />
      ))}
    </section>
  );
};

export default Brands;
