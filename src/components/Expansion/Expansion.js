import Nemesis from "../Nemesis/Nemesis";
import {Box, Grid, Paper, styled, Typography} from "@mui/material";
// InputLabel, MenuItem, FormControl, Select,
import Difficulty from "../Difficulty/Difficulty";
import {useTranslation} from "react-i18next";
/*import {useState} from "react";
import Mage from "../Mages/Mage";*/

const Item = styled(Paper)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
}));

function Expansion(props) {
  /*const [nbPlayersValue, setNbPlayersValue] = useState('');
  const [numberOfMages, setNumberOfMages] = useState([]);*/

  const { t } = useTranslation();
  let saveObj = JSON.parse(localStorage.getItem('saveObject'));

  const difficulties = [t('easy'),t('normal'), t('hard'), t('brutal')];
  /*const nbPlayers = [
    {label: t('true1P'), value: 1},
    {label: t('twoPlayers') + ' ' + t('or') + ' ' + t('onePlayer2Mages'), value: 2},
    {label: t('threePlayers'), value: 3},
    {label: t('fourPlayers'), value: 4}
  ]*/

  /*const handleChange = (event) => {
    setNbPlayersValue(event.target.value);
    setNumberOfMages([]);
    for (let i = 0; i < event.target.value; i++) {
      setNumberOfMages(mages => [...mages, '']);
    }
  };*/

  return (
    <div>
      <Box sx={{
        width: '100vw'
      }}>
        <div>
          {/* TODO : Sauvegarder les mages dans le stockage local et les rendre lors du chargement puis réactiver */}
          {/*<FormControl sx={{ m: 1, minWidth: 200 }} >
            <InputLabel>{t('nbPlayers')}</InputLabel>
            <Select
              disabled
              value={nbPlayersValue}
              onChange={handleChange}
              autoWidth
              label={t('nbPlayers')}
            >
              {Object.values(nbPlayers).map((nb) => (
              <MenuItem value={nb.value} disabled>{nb.label}</MenuItem>
              ))}
            </Select>
          </FormControl>*/}
          {Object.values(props.sets).map((set) => (
          <Grid container spacing={1}>
            <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center' , height: '15vh'}}>
              <Typography>{set.setName}</Typography>
            </Grid>
            {Object.values(set.nemesisList).map((nemesis) => (
              <>
                <Grid container>
                  <Grid item xs={2}>
                    <Item>
                      <Nemesis nemesisName={nemesis.name} imageSrc={nemesis.src} />
                    </Item>
                  </Grid>
                  <Grid item xs={10} style={{
                    display: 'flex',
                  }}>
                    {Object.values(difficulties).map((difficulty) => {
                      let control;
                      for(let i = 0; i < saveObj.length; i++) {
                        if(i === saveObj.length) {
                        } else {
                          control = control || (set.setSlug === saveObj[i].set && nemesis.name === saveObj[i].nemesis && difficulty === saveObj[i].difficulty);
                        }
                      }
                      return (
                        <>
                          <Grid item xs={3} key={difficulty}>
                            <Item sx={{
                              display: 'flex',
                              flexDirection: 'column'
                            }}>
                              <Difficulty
                                set={set}
                                nemesis={nemesis}
                                difficulty={difficulty}
                                checked={control}
                              />
                              <Grid container sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                {/*{Object.values(numberOfMages).map(() => {
                                  return (
                                    <Mage set={set} nemesis={nemesis} difficulty={difficulty} nbOfMages={nbPlayersValue} />
                                  )
                                })}*/}
                              </Grid>
                            </Item>
                          </Grid>
                        </>
                      )
                    }
                    ) }
                </Grid>
              </Grid>
              </>
            ))}
          </Grid>
        )) }
        </div>
      </Box>
    </div>
  );
}

export default Expansion;
