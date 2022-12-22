import {useTranslation} from "react-i18next";
import {Typography} from "@mui/material";
function Nemesis(props) {
  const { t } = useTranslation();
  let src = './assets/img/' + props.imageSrc + '-500.jpg';
  let nemesisName = props.nemesisName;
  return (
    <div>
      <img src={src} alt={t(nemesisName)} style={{ width: '100%' }} />
      <Typography paragraph>{t(nemesisName)}</Typography>
    </div>
  );
}

export default Nemesis;
