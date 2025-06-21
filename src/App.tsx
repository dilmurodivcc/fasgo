import './utils/i18n';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button onClick={() => changeLang('en')}>English</button>
      <button onClick={() => changeLang('uz')}>O‘zbekcha</button>
    </div>
  );
};

export default App;
