import './App.css';
import {useTranslation} from "react-i18next";
import {Button, ButtonGroup} from "@mui/material";
import Expansion from "./components/Expansion/Expansion";

const languages = {
  fr: {nativeName: 'Français'},
  en: {nativeName: 'English'}
}

function App() {
  const { t, i18n } = useTranslation();

  const sets = [
    {
      setName: t('basicSet'),
      mageList: ['Adelhelm', 'Brama', 'Jian', 'Kadir', 'Lash', 'Mist', 'Phaedraxa'],
      nemesisList: [t('rageBorne'), t('princeOfGluttons'), t('crooked'), t('carapace')]
    },
    {
      setName: t('warEternal'),
      mageList: ['Adelhelm', 'Brama', 'Jian', 'Kadir', 'Lash', 'Mist', 'Phaedraxa'],
      nemesisList: [t('rageBorne'), t('princeOfGluttons'), t('crooked'), t('carapace')]
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup variant="contained" aria-label="contained primary button group">
          <div>
            {Object.keys(languages).map((language) => (
              <Button type={"submit"} key={language} onClick={() => i18n.changeLanguage(language)} disabled={i18n.resolvedLanguage === language}>{languages[language].nativeName}</Button>
            )) }
          </div>
        </ButtonGroup>
        <Expansion sets={sets} />
      </header>
    </div>
  );
}
export default App;
