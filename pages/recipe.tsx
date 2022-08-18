import { Box, CardMedia, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, SvgIcon } from '@mui/material';
import styles from './Recipe.module.scss';
import picture from '../assets/images/iranian-crusty-rice-sq-2.jpg';
import PineappleIcon from '../assets/icons/pineapple.svg';

const Icon = () => (
  <div>
    <PineappleIcon />
  </div>
);

const Recipe = () => {
  console.log(PineappleIcon);

  return (
    <Box className={styles.recipePage}>
      <Grid container className={styles.gridContainer}>
        <Grid item xs={10} md={4} className={styles.leftContentBox}>
          <Typography variant="h4" align="center">
            Riz croustillant de Pooya
          </Typography>
          <Typography>Ingrédients</Typography>
          <ListItem>
            {/* <Icon /> */}
            <SvgIcon component={Icon} inheritViewBox />

            {/* </PineappleIcon> */}
            <ListItemText primary="Sel, poivre" />
          </ListItem>
        </Grid>
        <Grid item xs={10} md={8} className={styles.rightContentBox}>
          <CardMedia component="img" image={picture.src} height="375" alt="recipeTitle" className={styles.image} />
          <Typography>Préparation</Typography>
          <Box></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recipe;
