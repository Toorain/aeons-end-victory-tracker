import Nemesis from "../Nemesis/Nemesis";
import {Box, Grid, Paper, styled} from "@mui/material";
import Difficulty from "../Difficulty/Difficulty";
import {useTranslation} from "react-i18next";

const Item = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
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
            <Grid item xs={4}>
              <Item>
                <Nemesis nemesisName={'rageBorne'} imageSrc={'rageBorne'} />
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
        )) }
        </div>
      </Box>
    </div>
  );
}

export default Expansion;
