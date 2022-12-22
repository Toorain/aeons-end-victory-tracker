import Nemesis from "../Nemesis/Nemesis";
import {Box, Grid, Paper, styled, Typography} from "@mui/material";
import Difficulty from "../Difficulty/Difficulty";
import {useTranslation} from "react-i18next";

const Item = styled(Paper)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
}));

function Expansion(props) {
  const { t } = useTranslation();

  const difficulties = [t('easy'), t('hard'), t('brutal')];

  return (
    <div>
      <Box sx={{
        width: '100vw'
      }}>
        <div>
        {Object.values(props.sets).map((set) => (
          <Grid container spacing={1}>
            <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center' , height: '15vh'}}>
              <Typography>{set.setName}</Typography>
            </Grid>
            {Object.values(set.nemesisList).map((nemesis) => (
              <>
                <Grid container>
                  <Grid item xs={4}>
                    <Item>
                      <Nemesis nemesisName={nemesis.name} imageSrc={nemesis.src} />
                    </Item>
                  </Grid>
                  <Grid container xs={8}>
                    {Object.values(difficulties).map((difficulty) => (
                    <Grid item xs={4}>
                      <Item sx={{
                          display: 'flex',
                          flexDirection: 'column'
                        }}>
                      <Difficulty level={difficulty} />
                      </Item>
                    </Grid>
                )) }
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
