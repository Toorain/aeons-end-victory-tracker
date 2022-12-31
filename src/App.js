import './App.css';
import {useTranslation} from "react-i18next";
import {Button, ButtonGroup} from "@mui/material";
import Expansion from "./components/Expansion/Expansion";
import localStorageCustom from "./utils/LocalStorage";
import {Document, Page, PDFDownloadLink, StyleSheet, Text, View} from "@react-pdf/renderer";

const languages = {
  fr: {nativeName: 'Français'},
  en: {nativeName: 'English'}
}

const saveObject = localStorageCustom.getFromLocalStorage('saveObject');

// Create styles
const styles = StyleSheet.create({
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
});
if (localStorageCustom.getFromLocalStorage('saveObject') === null || localStorageCustom.getFromLocalStorage('saveObject') === undefined) {
  localStorageCustom.setInLocalStorage('saveObject', []);
}
// Create Document Component
const MyDocument = () => (
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
);
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
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
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
        <Button type={"submit"}>
          <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : t('download'))}
          </PDFDownloadLink>
        </Button>
      </div>
      <Expansion sets={sets} />
    </div>
  );
}
export default App;
