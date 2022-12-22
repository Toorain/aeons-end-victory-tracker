import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next )
  .use(I18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      fr: {
        translation: {
          easy: 'Facile',
          hard: 'Difficile',
          brutal: 'Brutal',
          basicSet: 'Jeu de Base',
          warEternal: 'Guerre éternelle',
          rageBorne: 'Rage Incarnée',
          carapaceQueen: 'Reine Carapace',
          princeOfGluttons: 'Prince des Gloutons',
          crookedMask: 'Masque Tordu',
        }
      },
      en: {
        translation: {
          easy: 'Easy',
          hard: 'Hard',
          brutal: 'Brutal',
          basicSet: 'Basic Set',
          warEternal: 'War Eternal',
          rageBorne: 'Rageborne',
          carapaceQueen: 'Carapace Queen',
          princeOfGluttons: 'Prince of Gluttons',
          crookedMask: 'Crooked Mask',
        }
      }
    }
  })
