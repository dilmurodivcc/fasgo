import PartOne from "../components/partOne/page";
import PartTwo from "../components/partTwo/index";
import Header from "../components/layout/Header";

const Home = () => {
  return (
    <div>
      <Header/>
      <PartOne />
      <PartTwo />
    </div>
  );
};

export default Home;
