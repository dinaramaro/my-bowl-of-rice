import Button from '@mui/material/Button';
//  import styles from '../pages/';
import styles from './Button.module.scss';

const ButtonComponent = () => {
  return (
    <>
      <Button variant="contained" className={styles.title}>
        Outlined
      </Button>
    </>
  );
};

export default ButtonComponent;
