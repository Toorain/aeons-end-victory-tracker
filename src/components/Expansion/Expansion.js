import Nemesis from "../Nemesis/Nemesis";
import {Accordion, AccordionDetails, AccordionSummary, Box, Grid, Paper, styled, Typography} from "@mui/material";
// InputLabel, MenuItem, FormControl, Select,
import Difficulty from "../Difficulty/Difficulty";
import {useTranslation} from "react-i18next";
import LocalStorage from "../../utils/LocalStorage";
/*import {useState} from "react";
import Mage from "../Mages/Mage";*/

const Item = styled(Paper)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
}));

function ExpandMoreIcon() {
  return null;
}

function Expansion(props) {
  /*const [nbPlayersValue, setNbPlayersValue] = useState('');
  const [numberOfMages, setNumberOfMages] = useState([]);*/

  const { t } = useTranslation();

  let saveObj = LocalStorage.getFromLocalStorage('saveObject');

  const difficulties = [t('easy'),t('normal'), t('expert'), t('extermination')];
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
            <Accordion expanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant={'h5'}>{set.setName}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {Object.values(set.nemesisList).map((nemesis, nemesisIndex) => (
                    <>
                      <Grid container key={nemesis.name + nemesisIndex}>
                        <Grid item xs={12} md={2}>
                          <Item>
                            <Nemesis nemesisName={nemesis.name} imageSrc={nemesis.src} />
                          </Item>
                        </Grid>
                        <Grid item xs={12} md={10} style={{
                          display: 'flex',
                        }}>
                          {Object.values(difficulties).map((difficulty, difficultyIndex) => {
                              let control;
                              for(let i = 0; i < saveObj.length; i++) {
                                if(i === saveObj.length) {
                                } else {
                                  for(let j = 0; j < difficulties.length; j++) {
                                    control = control || (set.setSlug === saveObj[i].set && nemesis.name === saveObj[i].nemesis && difficulty === saveObj[i].difficulty[j]);
                                  }
                                }
                              }
                              return (
                                <>
                                  <Grid item xs={3} md={3} key={difficulty + difficultyIndex}>
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
              </AccordionDetails>
            </Accordion>
        )) }
        </div>
      </Box>
    </div>
  );
}

export default Expansion;
