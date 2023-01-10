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
          "agelessWalker": "Ageless Walker",
          "arachnos": "Arachnos",
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
          "fenrix": "Fenrix",
          "fourPlayers": "4 Joueurs",
          "gateWitch": "Sorcière du Portail",
          "hollowCrown": "Couronne Creuse",
          "horde": "La Mégère",
          "intoTheWild": "Into the Wild",
          "legacy": "Legacy",
          "maggoth": "Maggoth",
          "magusOfCloaks": "Démon des Voiles",
          "nbPlayers": "Nombre de joueurs",
          "necroswarm": "Necroswarm",
          "normal": "Normal",
          "onePlayer2Mages": "1 Joueurs 2 Mages",
          "or": "ou",
          "outcasts": "Outcasts",
          "princeOfGluttons": "Prince des Gloutons",
          "rageBorne": "Rage Incarnée",
          "rektCount": "Compteur de morts",
          "reset": "Réinitialiser ma progression",
          "returnToGravehold": "Return to Gravehold",
          "shatteredDreams": "Shattered Dreams",
          "southernVillage": "Southern Village",
          "theAncients": "The Ancients",
          "theDepth": "Les Profondeurs",
          "theNameless": "Les Sans-Noms",
          "theNewAge": "The New Age",
          "theOuterDark": "Ténèbres d'Ailleurs",
          "theVoid": "Le Vide",
          "theWailing": "The Wailing",
          "theWanderer": "The Wanderer",
          "threePlayers": "3 Joueurs",
          "thriceDeadProphet": "Prophète aux Trois Trépas",
          "true1P": "1 Joueur 1 Mage (True 1P)",
          "twoPlayers": "2 Joueurs",
          "umbraTitan": "Titan de l'Ombre",
          "warEternal": "Guerre éternelle",
          "wayward": "L'Égaré",
          "wraithMonger": "Maître des Spectres"
        }
      },
      en: {
        translation: {
          "agelessWalker": "Ageless Walker",
          "arachnos": "Arachnos",
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
          "fenrix": "Fenrix",
          "fourPlayers": "4 Players",
          "gateWitch": "Gate Witch",
          "hollowCrown": "Hollow Crown",
          "horde": "Horde-Crone",
          "intoTheWild": "Into the Wild",
          "legacy": "Legacy",
          "maggoth": "Maggoth",
          "magusOfCloaks": "Magus of Cloaks",
          "nbPlayers": "Number of players",
          "necroswarm": "Necroswarm",
          "normal": "Normal",
          "onePlayer2Mages": "1 Player 2 Mages",
          "or": "or",
          "outcasts": "Outcasts",
          "princeOfGluttons": "Prince of Gluttons",
          "rageBorne": "Rageborne",
          "rektCount": "Death count",
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
          "theWailing": "The Wailing",
          "theWanderer": "The Wanderer",
          "threePlayers": "3 Players",
          "thriceDeadProphet": "Thrice-Dead Prophet",
          "true1P": "1 Player 1 Mage (True 1P)",
          "twoPlayers": "2 Players",
          "umbraTitan": "Umbra Titan",
          "warEternal": "War Eternal",
          "wayward": "Wayward One",
          "wraithMonger": "Wraithmonger"
        }
      }
    }
  })
