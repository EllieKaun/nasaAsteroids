import classes from './Cart.module.scss';
import { CustomButton } from '../../UI/CustomButton';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { AsteroidCard } from '../../../components/UI/AsteroidCard';
import { FC, useState } from 'react';
import Dialog from 'rc-dialog';
import 'rc-dialog/assets/index.css';


const Cart:FC = () => {

  const { products } = useAppSelector(state => state.cart);
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const amount = products.length;

  return (
    <>
      <div className={classes.wrapper}>
        <div>
          <p className={classes.cart}>Корзина</p>
          <p className={classes.item}>{amount} астероид(а)</p>
        </div>
        <CustomButton
          text='отправить'
          onClick={() => setIsModalOpen(true)}
          style={{ padding: '10px 20px', borderRadius: '40px' }}
        />
      </div>
      <Dialog
        animation="zoom"
        maskAnimation="fade"
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={'Корзина'}
      >
        {products.map((item, i) => (
          <AsteroidCard
            key={i}
            date={item.date}
            name={item.name}
            diameter={item.diameter}
            distanceMeter={item.distanceMeter}
            distanceLunar={item.distanceLunar}
            dangerous={item.dangerous}
            type='meter'
            buttonCheck={true}
          />
        ))}
      </Dialog>
    </>

  );
};


export default Cart;
