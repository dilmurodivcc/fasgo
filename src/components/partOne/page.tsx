import Brands from "./Brands";
import Hero from "./Hero";
import WideChoice from "./WideChoice";

const page = () => {
  return (
    <>
      <div className="container">
        <Hero />
        <Brands/>
        <WideChoice/>
      </div>
    </>
  );
};

export default page;
