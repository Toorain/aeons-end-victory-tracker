import './App.css';
import {useTranslation} from "react-i18next";
import {Button, ButtonGroup} from "@mui/material";
import Expansion from "./components/Expansion/Expansion";
import localStorageCustom from "./utils/LocalStorage";

const languages = {
  fr: {nativeName: 'Français'},
  en: {nativeName: 'English'}
}

function App() {
  const { t, i18n } = useTranslation();

  if (localStorageCustom.getFromLocalStorage('saveObject') === null || localStorageCustom.getFromLocalStorage('saveObject') === undefined) {
    localStorageCustom.setInLocalStorage('saveObject', []);
  }

  const sets = [
    {
      setName: t('basicSet'),
      setSlug: 'basicSet',
      mageList: ['Adelhelm', 'Brama', 'Jian', 'Kadir', 'Lash', 'Mist', 'Phaedraxa'],
      nemesisList: [
        {name: 'rageBorne', src: 'rageBorne'},
        {name: 'princeOfGluttons', src: 'princeOfGluttons'},
        {name: 'crookedMask', src: 'crookedMask'},
        {name: 'carapaceQueen', src: 'carapaceQueen'}
      ]
    },
    {
      setName: t('theDepth'),
      setSlug: 'theDepth',
      mageList: ['Nym', 'Reeve', 'Z\'hana'],
      nemesisList: [
        {name: 'horde', src: 'horde'},
      ]
    },
    {
      setName: t('theNameless'),
      setSlug: 'theNameless',
      mageList: ['Malastar'],
      nemesisList: [
        {name: 'blight', src: 'blight'},
        {name: 'wayward', src: 'wayward'},
      ]
    },
  ]

  /*const resetLocalStorage = () => {
    localStorage.clear();
  }*/

  return (
    <div className="App">
      {/*<Button
        type={"submit"}
        onClick={resetLocalStorage}
      >Reset local storage</Button>*/}
      <ButtonGroup variant="contained" aria-label="contained primary button group">
        <div>
          {Object.keys(languages).map((language) => (
            <Button
              type={"submit"}
              key={language}
              onClick={() => i18n.changeLanguage(language)}
              disabled={i18n.resolvedLanguage === language}>{languages[language].nativeName}
            </Button>
          )) }
        </div>
      </ButtonGroup>
      <Expansion sets={sets} />
    </div>
  );
}
export default App;
