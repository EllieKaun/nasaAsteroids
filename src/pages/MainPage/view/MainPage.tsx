import classes from './MainPage.module.scss';
import { AsteroidList } from '../../../components/AsteroidList';
import { Cart } from '../../../components/Cart';
import { FC } from 'react';


const MainPage:FC = () => {

  return (
    <div
      className={classes.wrapper}
    >
      <AsteroidList />
      <Cart />
    </div>
  );
};

export default MainPage;
