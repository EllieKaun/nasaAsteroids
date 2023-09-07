import classes from './Header.module.scss';
import { FC } from 'react';


const Header:FC = () => {

  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>ARMAGEDDON 2023</p>
      <p className={classes.desc}>ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.</p>
    </div>
  );
};


export default Header;
