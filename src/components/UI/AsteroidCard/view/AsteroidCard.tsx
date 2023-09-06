import classes from './AsterooidCard.module.scss';
import { IAsteroidCardProps } from '../type/AsteroidCardType';
import { CustomButton } from '../../CustomButton';
import { FC } from 'react';


const AsteroidCard:FC<IAsteroidCardProps> = (props) => {

  const {
    date,
    name,
    diameter,
    distanceMeter,
    distanceLunar,
    dangerous,
    type,
  } = props;

  const distance = type === 'meter' ? distanceMeter : distanceLunar;

  return (
    <div>
      <p>{date}</p>
      <div>
        <div>
          <p>{distance}</p>
        </div>
        <img />
        <div>
          <p>{name}</p>
          <p>{diameter}</p>
        </div>
      </div>

      <div>
        <CustomButton text='заказать'/>
        <p>{dangerous ? '1' : '0'}</p>
      </div>
    </div>
  );
};

export default AsteroidCard;
