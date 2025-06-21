import '../utils/i18n';
import { useTranslation } from 'react-i18next';
import PartOne from "../components/partOne/page";
import PartTwo from "../components/partTwo/index";

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button onClick={() => changeLang('en')}>English</button>
      <button onClick={() => changeLang('uz')}>O‘zbekcha</button>
      <PartOne />
      <PartTwo/>
    </div>
  );
};

export default Home