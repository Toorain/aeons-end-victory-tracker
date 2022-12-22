// import {useTranslation} from "react-i18next";

import {IconButton, Stack, Tooltip} from "@mui/material";
function Mage(props) {
  // const { t, i18n } = useTranslation();
  let mageSrc = './assets/img/icons/' + props.mageSrc + '-icon.png';
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Tooltip title={props.mageName}>
          <IconButton sx={{ borderRadius: '10px'}}>
            <img src={mageSrc} alt="" style={{ height: 50, width: 50}}  />
          </IconButton>
        </Tooltip>
        <Tooltip title={props.mageName}>
          <IconButton sx={{ borderRadius: '10px'}}>
            <img src={mageSrc} alt="" style={{ height: 50, width: 50}} />
          </IconButton>
        </Tooltip>
        <Tooltip title={props.mageName}>
          <IconButton sx={{ borderRadius: '10px'}}>
            <img src={mageSrc} alt="" style={{ height: 50, width: 50}} />
          </IconButton>
        </Tooltip>
      </Stack>
    </div>
  );
}

export default Mage;
