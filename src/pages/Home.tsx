import PartOne from "../components/partOne/page";
import PartTwo from "../components/partTwo/index";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div>
      <Header/>
      <PartOne />
      <PartTwo />
      <Footer/>
    </div>
  );
};

export default Home;
