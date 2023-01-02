import './App.css';
import {useTranslation} from "react-i18next";
import {Button, ButtonGroup} from "@mui/material";
import Expansion from "./components/Expansion/Expansion";
import localStorageCustom from "./utils/LocalStorage";

// import {Document, Page, PDFDownloadLink, StyleSheet, Text, View} from "@react-pdf/renderer";

const languages = {
  fr: {nativeName: 'Français'},
  en: {nativeName: 'English'}
}

// const saveObject = localStorageCustom.getFromLocalStorage('saveObject');

// Create styles
/*const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});*/
if (localStorageCustom.getFromLocalStorage('saveObject') === null || localStorageCustom.getFromLocalStorage('saveObject') === undefined) {
  localStorageCustom.setInLocalStorage('saveObject', []);
}
// Create Document Component
/*const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {saveObject.map((obj) => {
        return (
          <View style={styles.section} key={obj.set + obj.nemesis + obj.difficulty} debug={true}>
            <Text debug={true}>{obj.nemesis}</Text>
            <Text debug={true}>{obj.difficulty}</Text>
          </View>
        )
      })}
    </Page>
  </Document>
);*/
function App() {
  const { t, i18n } = useTranslation();

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
    {
      setName: t('warEternal'),
      setSlug: 'warEternal',
      mageList: ['Dezmodia', 'Garu', 'Gex', 'Mazahaedron', 'Mist', 'Quilius', 'Ulgimor', 'Yan Magda'],
      nemesisList: [
        {name: 'umbraTitan', src: 'umbraTitan'},
        {name: 'hollowCrown', src: 'hollowCrown'},
        {name: 'gateWitch', src: 'gateWitch'},
        {name: 'magusOfCloaks', src: 'magusOfCloaks'},
      ]
    },
    {
      setName: t('theOuterDark'),
      setSlug: 'theOuterDark',
      mageList: [],
      nemesisList: [
        {name: 'thriceDeadProphet', src: 'thriceDeadProphet'},
        {name: 'wraithMonger', src: 'wraithMonger'},
      ]
    },
    {
      setName: t('legacy'),
      setSlug: 'legacy',
      mageList: [],
      nemesisList: []
    },
    {
      setName: t('buriedSecrets'),
      setSlug: 'buriedSecrets',
      mageList: [],
      nemesisList: []
    },
    {
      setName: t('theNewAge'),
      setSlug: 'theNewAge',
      mageList: [],
      nemesisList: [
        {name: 'agelessWalker', src: 'agelessWalker'},
        {name: 'arachnos', src: 'arachnos'},
        {name: 'fenrix', src: 'fenrix'},
        {name: 'maggoth', src: 'maggoth'},
      ]
    },
    {
      setName: t('theAncients'),
      setSlug: 'theAncients',
      mageList: [],
      nemesisList: [
        {name: 'theWanderer', src: 'theWanderer'},
      ]
    },
    {
      setName: t('intoTheWild'),
      setSlug: 'intoTheWild',
      mageList: [],
      nemesisList: [
        {name: 'necroswarm', src: 'necroswarm'},
      ]
    },
    {
      setName: t('shatteredDreams'),
      setSlug: 'shatteredDreams',
      mageList: [],
      nemesisList: [
        {name: 'theWailing', src: 'theWailing'},
      ]
    },
    {
      setName: t('outcasts'),
      setSlug: 'outcasts',
      mageList: ['Arachnos (Outcasts)', 'Dezmodia (Outcasts)', 'Ilya', 'Kel', 'Qu (Outcasts)', 'Taqren (Outcasts)', 'Thraxir', 'Z\'hana (Outcasts)'],
      nemesisList: [
        {name: 'placeholder', src: 'placeholder'},
        {name: 'placeholder', src: 'placeholder'},
        {name: 'placeholder', src: 'placeholder'},
        {name: 'placeholder', src: 'placeholder'},
      ]
    },
    {
      setName: t('returnToGravehold'),
      setSlug: 'returnToGravehold',
      mageList: ['Cairna', 'Ohat and Ulgimor'],
      nemesisList: [
        {name: 'placeholder', src: 'placeholder'},
        {name: 'placeholder', src: 'placeholder'},
      ]
    },
    {
      setName: t('southernVillage'),
      setSlug: 'southernVillage',
      mageList: ['Lucien', 'Reth'],
      nemesisList: [
        {name: 'placeholder', src: 'placeholder'},
      ]
    },
  ]

  const resetLocalStorage = () => {
    localStorage.clear();
  }

  return (
    <div className="App">
      <Button
        type={"submit"}
        onClick={resetLocalStorage}
      >{t('reset')}</Button>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <ButtonGroup style={{ marginTop: '2rem' }} variant="contained" aria-label="contained primary button group">
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
        {/*<Button type={"submit"} disabled>
          <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf" hidden>
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : t('download'))}
          </PDFDownloadLink>
        </Button>*/}
      </div>
      <Expansion sets={sets} />
    </div>
  );
}
export default App;
