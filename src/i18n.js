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
        translation:
          {
            "basicSet": "Jeu de Base",
            "blight": "Seigneur de la Désolation",
            "buriedSecrets": "Buried Secrets",
            "cancelReset": "Annuler la réinitialisation",
            "carapaceQueen": "Reine Carapace",
            "crookedMask": "Masque Tordu",
            "download": "Télécharger la fiche",
            "easy": "Simple",
            "expert": "Expert",
            "extermination": "Extermination",
            "fourPlayers": "4 Joueurs",
            "horde": "La Mégère",
            "intoTheWild": "Into the Wild",
            "legacy": "Legacy",
            "nbPlayers": "Nombre de joueurs",
            "normal": "Normal",
            "onePlayer2Mages": "1 Joueurs 2 Mages",
            "or": "ou",
            "outcasts": "Outcasts",
            "princeOfGluttons": "Prince des Gloutons",
            "rageBorne": "Rage Incarnée",
            "reset": "Réinitialiser ma progression",
            "returnToGravehold": "Return to Gravehold",
            "shatteredDreams": "Shattered Dreams",
            "southernVillage": "Southern Village",
            "theAncients": "The Ancients",
            "theDepth": "Les Profondeurs",
            "theNameless": "Les Sans-Noms",
            "theNewAge": "The New Age",
            "theOuterDark": "Ténèbres d\\'Ailleurs",
            "theVoid": "Le Vide",
            "threePlayers": "3 Joueurs",
            "true1P": "1 Joueur 1 Mage (True 1P)",
            "twoPlayers": "2 Joueurs",
            "warEternal": "Guerre éternelle",
            "wayward": "L\\'Égaré"
          }
      },
      en: {
        translation: {
          "basicSet": "Basic Set",
          "blight": "Blight Lord",
          "buriedSecrets": "Buried Secrets",
          "cancelReset": "Cancel reset",
          "carapaceQueen": "Carapace Queen",
          "crookedMask": "Crooked Mask",
          "download": "Download",
          "easy": "Simple",
          "expert": "Expert",
          "extermination": "Extermination",
          "fourPlayers": "4 Players",
          "horde": "Horde-Crone",
          "intoTheWild": "Into the Wild",
          "legacy": "Legacy",
          "nbPlayers": "Number of players",
          "normal": "Normal",
          "onePlayer2Mages": "1 Player 2 Mages",
          "or": "or",
          "outcasts": "Outcasts",
          "princeOfGluttons": "Prince of Gluttons",
          "rageBorne": "Rageborne",
          "reset": "Reset my progression",
          "returnToGravehold": "Return to Gravehold",
          "shatteredDreams": "Shattered Dreams",
          "southernVillage": "Southern Village",
          "theAncients": "The Ancients",
          "theDepth": "The Depth",
          "theNameless": "The Nameless",
          "theNewAge": "The New Age",
          "theOuterDark": "The Outer Dark",
          "theVoid": "The Void",
          "threePlayers": "3 Players",
          "true1P": "1 Player 1 Mage (True 1P)",
          "twoPlayers": "2 Players",
          "warEternal": "War Eternal",
          "wayward": "Wayward One"
        }
      }
    }
  })
