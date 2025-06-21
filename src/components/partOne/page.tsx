import Brands from "./Brands";
import Download from "./Download";
import Hero from "./Hero";
import WideChoice from "./WideChoice";

const page = () => {
  return (
    <>
      <div className="container">
        <Hero />
        <Brands/>
        <WideChoice/>
        <Download/>
      </div>
    </>
  );
};

export default page;
