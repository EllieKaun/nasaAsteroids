import classes from './AsterooidCard.module.scss';
import { IAsteroidCardProps } from '../type/AsteroidCardType';
import { CustomButton } from '../../CustomButton';
import asteroid from '../../../../assets/asteroid.png';
import dangerIcon from '../../../../assets/danger.svg';
import { cartActions } from '../../../Cart/model/CartModel';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import { FC, useEffect, useState } from 'react';


const big = 200;

const AsteroidCard:FC<IAsteroidCardProps> = (props) => {

  const {
    date,
    name,
    diameter,
    distanceMeter,
    distanceLunar,
    dangerous,
    type,
    buttonCheck,
  } = props;

  const [ asteroidSize, setAsteroidSize ] = useState('asteroidSmall');
  const [ isDisabled, setIsDisabled ] = useState(false);

  const dispatch = useAppDispatch();

  const distance = type === 'meter' ?
    Math.round(+distanceMeter) + ' километров' :
    Math.round(+distanceLunar) + ' лунные орбиты';

  const roundDiameter = Math.round(+diameter);

  useEffect(() => {
    roundDiameter > big && setAsteroidSize('asteroidBig');
  }, []);

  const handleOrder = () => {
    const item = {
      date,
      distance,
      name,
      diameter,
      distanceMeter,
      distanceLunar,
      dangerous,
    };
    dispatch(cartActions.addProduct(item));
    setIsDisabled(true);
  };

  return (
    <div className={classes.wrapper}>
      <p className={classes.date}>{date}</p>
      <div className={classes.dataBlock}>
        <div className={classes.distanceBlock}>
          <p className={classes.distance}>{distance}</p>
          <div className={classes.arrowLeft}></div>
          <div className={classes.arrow}></div>
          <div className={classes.arrowRight}></div>
        </div>
        <img className={classes[ asteroidSize ]} src={asteroid}/>
        <div className={classes.nameBlock}>
          <p className={classes.name}>{name}</p>
          <p className={classes.diameter}>⌀{roundDiameter}</p>
        </div>
      </div>

      <div className={classes.order}>
        {buttonCheck ||
        <CustomButton
          disabled={isDisabled}
          text='заказать'
          extraText='в корзине'
          onClick={handleOrder}
        />
        }
        <p>{dangerous ?
          <img src={dangerIcon}/> : ''}</p>
      </div>
    </div>
  );
};

export default AsteroidCard;
