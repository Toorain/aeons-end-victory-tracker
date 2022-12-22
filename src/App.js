import './App.css';
import {useTranslation} from "react-i18next";

const languages = {
  fr: {nativeName: 'Français'},
  en: {nativeName: 'English'}
}
function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {Object.keys(languages).map((language) => (
            <button type={"submit"} key={language} onClick={() => i18n.changeLanguage(language)} disabled={i18n.resolvedLanguage === language}>{languages[language].nativeName}</button>
            )) }
        </div>
        {t('rageBorne')}
      </header>
    </div>
  );
}

export default App;
