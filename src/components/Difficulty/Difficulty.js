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
    let saveObjectLocalStorage = localStorage.getFromLocalStorage('saveObject');
    setChecked(event.target.checked);
    if(event.target.checked) {
      saveObjectLocalStorage = localStorage.getFromLocalStorage('saveObject');
      saveObjectLocalStorage.push({
        set: props.set.setSlug,
        nemesis: props.nemesis.name,
        difficulty: props.difficulty,
        mages: []
      })
    } else {
      for (let i = 0; i < saveObjectLocalStorage.length; i++) {
        if(
          saveObjectLocalStorage[i].set === props.set.setSlug &&
          saveObjectLocalStorage[i].nemesis === props.nemesis.name &&
          saveObjectLocalStorage[i].difficulty === props.difficulty) {
          saveObjectLocalStorage.splice(i, 1);
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
