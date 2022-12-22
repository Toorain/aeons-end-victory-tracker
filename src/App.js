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
      nemesisList: [
        {name: 'rageBorne', src: 'rageBorne'},
        {name: 'princeOfGluttons', src: 'princeOfGluttons'},
        {name: 'crookedMask', src: 'crookedMask'},
        {name: 'carapaceQueen', src: 'carapaceQueen'}
      ]
    },
    {
      setName: t('warEternal'),
      mageList: ['Adelhelm', 'Brama', 'Jian', 'Kadir', 'Lash', 'Mist', 'Phaedraxa'],
      nemesisList: [
        {name: 'rageBorne', src: 'rageBorne'},
        {name: 'princeOfGluttons', src: 'princeOfGluttons'},
        {name: 'crookedMask', src: 'crookedMask'},
        {name: 'carapaceQueen', src: 'carapaceQueen'}
      ]
    },
  ]

  return (
    <div className="App">
      <ButtonGroup variant="contained" aria-label="contained primary button group">
        <div>
          {Object.keys(languages).map((language) => (
            <Button type={"submit"} key={language} onClick={() => i18n.changeLanguage(language)} disabled={i18n.resolvedLanguage === language}>{languages[language].nativeName}</Button>
          )) }
        </div>
      </ButtonGroup>
      <Expansion sets={sets} />
    </div>
  );
}
export default App;
