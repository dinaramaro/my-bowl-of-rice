import { useState } from 'react';
import {
  Box,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  SvgIcon,
  TextField
} from '@mui/material';
import styles from './Recipe.module.scss';
import picture from '../../assets/images/iranian-crusty-rice-sq-2.jpg';
import PineappleIcon from '../../assets/icons/pineapple.svg';

const Icon = () => (
  <div>
    <PineappleIcon />
  </div>
);

export default function Recipe() {
  console.log(PineappleIcon);
  const [ingredients, setIngredients] = useState<any[]>([]);

  const addIngredient = (value: string) => {};

  return (
    <>
      <Box className={styles.recipePage}>
        <Typography variant="h4" align="center">
          Ma liste de courses
        </Typography>
        <TextField
          id="outlined-basic"
          className={styles.ingredientInput}
          label="Ajouter un ingrédient"
          variant="outlined"
          onKeyDown={(e: any) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              setIngredients([...ingredients, e.target.value]);
              e.target.value = '';
            }
          }}
        />

        <List className={styles.ingredientsList} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {ingredients.map((value) => (
            <ListItem key={value}>
              <ListItemText primary={value} className={styles.ingredientItem} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
