import {Button, IconButton, Popover, Stack, Tooltip} from "@mui/material";
import {useState} from "react";
import StringFunctions from "../../utils/StringFunctions";
import localStorage from "../../utils/LocalStorage";

function Mage(props) {
  const [mageSrc, setMageSrc] = useState('./assets/img/icons/placeholder-icon.png');
  const [anchorEl, setAnchorEl] = useState(null);
  const [mageName, setMageName] = useState('Choisissez un mage');
  const [canPushMage, setCanPushMage] = useState(true);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const baseUrl = './assets/img/icons/';
  const placeholder = 'placeholder';
  const endUrl = '-icon.png';
  const mageList = ['adelhelm', 'brama', 'jian', 'kadir', 'lash', 'mist', 'phaedraxa'];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickAction = (event) => {
    setMageName(event.target.attributes[2].value);
    setMageSrc(event.target.alt);
    let saveObjectLocalStorage = localStorage.getFromLocalStorage('saveObject');
    for (let i = 0; i < saveObjectLocalStorage.length; i++) {
      if(
        saveObjectLocalStorage[i].set === props.set.setSlug &&
        saveObjectLocalStorage[i].nemesis === props.nemesis.name &&
        saveObjectLocalStorage[i].difficulty === props.difficulty) {
        saveObjectLocalStorage[i].mages.forEach((mage, index)=> {
          if(mage === event.target.attributes[2].value) {
            setCanPushMage(false);
          }
        })
        if(canPushMage || saveObjectLocalStorage[i].mages.length === 0) {
          saveObjectLocalStorage[i].mages = [];
          if(saveObjectLocalStorage[i].mages.length < props.nbOfMages) {
            saveObjectLocalStorage[i].mages.push(event.target.attributes[2].value);
          }
        }
      }
    }
    localStorage.setInLocalStorage('saveObject', saveObjectLocalStorage);
    handleClose();
  }

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button aria-describedby={id} onClick={handleClick}>
          <Tooltip title={mageName}>
            <IconButton sx={{ borderRadius: '10px'}}>
              <img src={mageSrc} alt="" style={{ height: 50, width: 50}}  />
            </IconButton>
          </Tooltip>
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Tooltip title={StringFunctions.capitalizeFirstLowercaseRest('placeholder')} key={'placeholder'}>
            <IconButton sx={{ borderRadius: '10px'}} onClick={clickAction}>
              <img
                src={baseUrl + placeholder + endUrl}
                alt={baseUrl + placeholder + endUrl}
                aria-label={placeholder}
                style={{ height: 50, width: 50}}  />
            </IconButton>
          </Tooltip>
          {Object.values(mageList).map((mage) => (
            <Tooltip title={StringFunctions.capitalizeFirstLowercaseRest(mage)} key={mage}>
              <IconButton sx={{ borderRadius: '10px'}} onClick={clickAction}>
                <img
                  src={baseUrl + mage + endUrl}
                  alt={baseUrl + mage + endUrl}
                  aria-label={StringFunctions.capitalizeFirstLowercaseRest(mage)} style={{ height: 50, width: 50}} />
              </IconButton>
            </Tooltip>
          ))}
        </Popover>
      </Stack>
    </div>
  );
}

export default Mage;
