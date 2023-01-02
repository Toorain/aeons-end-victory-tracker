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
          easy: 'Simple',
          normal: 'Normal',
          expert: 'Expert',
          extermination: 'Extermination',
          basicSet: 'Jeu de Base',
          warEternal: 'Guerre éternelle',
          rageBorne: 'Rage Incarnée',
          carapaceQueen: 'Reine Carapace',
          princeOfGluttons: 'Prince des Gloutons',
          crookedMask: 'Masque Tordu',
          theDepth: 'Les Profondeurs',
          horde: 'La Mégère',
          theNameless: 'Les Sans-Noms',
          blight: 'Seigneur de la Désolation',
          wayward: 'L\'Égaré',
          nbPlayers: 'Nombre de joueurs',
          true1P: '1 Joueur 1 Mage (True 1P)',
          onePlayer2Mages: '1 Joueurs 2 Mages',
          twoPlayers: '2 Joueurs',
          threePlayers: '3 Joueurs',
          fourPlayers: '4 Joueurs',
          or: 'ou',
          download: 'Télécharger la fiche',
          theOuterDark: 'Ténèbres d\'Ailleurs',
          theVoid: 'Le Vide',
          legacy: 'Legacy',
          buriedSecrets: 'Buried Secrets',
          theNewAge: 'The New Age',
          theAncients: 'The Ancients',
          intoTheWild: 'Into the Wild',
          shatteredDreams: 'Shattered Dreams',
          outcasts: 'Outcasts',
          returnToGravehold: 'Return to Gravehold',
          southernVillage: 'Southern Village'
        }
      },
      en: {
        translation: {
          easy: 'Simple',
          normal: 'Normal',
          expert: 'Expert',
          extermination: 'Extermination',
          basicSet: 'Basic Set',
          warEternal: 'War Eternal',
          rageBorne: 'Rageborne',
          carapaceQueen: 'Carapace Queen',
          princeOfGluttons: 'Prince of Gluttons',
          crookedMask: 'Crooked Mask',
          theDepth: 'The Depth',
          horde: 'Horde-Crone',
          theNameless: 'The Nameless',
          blight: 'Blight Lord',
          wayward: 'Wayward One',
          nbPlayers: 'Number of players',
          true1P: '1 Player 1 Mage (True 1P)',
          onePlayer2Mages: '1 Player 2 Mages',
          twoPlayers: '2 Players',
          threePlayers: '3 Players',
          fourPlayers: '4 Players',
          or: 'or',
          download: 'Download',
          theOuterDark: 'The Outer Dark',
          theVoid: 'The Void',
          legacy: 'Legacy',
          buriedSecrets: 'Buried Secrets',
          theNewAge: 'The New Age',
          theAncients: 'The Ancients',
          intoTheWild: 'Into the Wild',
          shatteredDreams: 'Shattered Dreams',
          outcasts: 'Outcasts',
          returnToGravehold: 'Return to Gravehold',
          southernVillage: 'Southern Village'
        }
      }
    }
  })
