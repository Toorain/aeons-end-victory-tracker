import {useEffect, useState} from "react";
import {Checkbox, FormControl, FormControlLabel, FormGroup} from "@mui/material";
import localStorage from "../../utils/LocalStorage";

function Difficulty(props) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if(localStorage.getFromLocalStorage('saveObject').length !== 0) {
      setChecked(props.checked);
    }
  }, [props.checked])

  const handleChange = (event) => {
    let checker = arr => arr.every(Boolean);
    let saveObjectLocalStorage = localStorage.getFromLocalStorage('saveObject');
    setChecked(event.target.checked);
    if(event.target.checked) {
      saveObjectLocalStorage = localStorage.getFromLocalStorage('saveObject');
      if(saveObjectLocalStorage.length !== 0) {
        saveObjectLocalStorage.map((item, index) => {
          let arrCanPushNemesis = [];
          let arrCanPushDifficulty = [];
          for(let i = 0; i < saveObjectLocalStorage.length; i++) {
            arrCanPushNemesis.push(saveObjectLocalStorage[i].nemesis !== props.nemesis.name);
          }
          if(checker(arrCanPushNemesis)) {
             saveObjectLocalStorage.push({
              set: props.set.setSlug,
              nemesis: props.nemesis.name,
              difficulty: [props.difficulty],
              mages: []
            })
          }

          for(let j = 0; j < saveObjectLocalStorage[index].difficulty.length; j++) {
            arrCanPushDifficulty.push(saveObjectLocalStorage[index].difficulty[j] !== props.difficulty);
          }
          if(checker(arrCanPushDifficulty) && saveObjectLocalStorage[index].nemesis === props.nemesis.name) {
            saveObjectLocalStorage[index].difficulty.push(props.difficulty);
          }
          return saveObjectLocalStorage;
        })
        // console.log(resultArray);
      } else {
        saveObjectLocalStorage.push({
          set: props.set.setSlug,
          nemesis: props.nemesis.name,
          difficulty: [props.difficulty],
          mages: []
        })
      }
      localStorage.setInLocalStorage('saveObject', saveObjectLocalStorage);

      /*saveObjectLocalStorage.push({
        set: props.set.setSlug,
        nemesis: props.nemesis.name,
        difficulty: props.difficulty,
        mages: []
      })*/
    } else {
      for (let i = 0; i < saveObjectLocalStorage.length; i++) {
        if(
          saveObjectLocalStorage[i].set === props.set.setSlug &&
          saveObjectLocalStorage[i].nemesis === props.nemesis.name) {
          const difficultyIndex = saveObjectLocalStorage[i].difficulty.indexOf(props.difficulty);
          if(saveObjectLocalStorage[i].difficulty.length === 1) {
            saveObjectLocalStorage.splice(i, 1);
          } else {
            saveObjectLocalStorage[i].difficulty.splice(difficultyIndex, 1)
          }
        }
      }
    }
    localStorage.setInLocalStorage('saveObject', saveObjectLocalStorage);
  };

  return (
    <div>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value={props.difficulty}
            control={<Checkbox
              checked={checked}
              onChange={handleChange} />}
            label={props.difficulty}
            labelPlacement="top"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
export default Difficulty;
