import classes from './CustomButton.module.scss';
import { ICustomButtonProps } from '../type/CustomButtonType';
import { FC } from 'react';


const CustomButton:FC<ICustomButtonProps> = (props) => {

  const { text, extraText, disabled } = props;

  return (
    <>
      <button
        className={classes.customButton}
        {...props}
      ><p>{disabled ? extraText : text}</p>
      </button>
    </>
  );
};


export default CustomButton;
