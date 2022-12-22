import {Checkbox, FormControl, FormControlLabel, FormGroup} from "@mui/material";
// import {useTranslation} from "react-i18next";

function Difficulty(props) {
  // const { t, i18n } = useTranslation();
  return (
    <div>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value={props.level}
            control={<Checkbox />}
            label={props.level}
            labelPlacement="top"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default Difficulty;
