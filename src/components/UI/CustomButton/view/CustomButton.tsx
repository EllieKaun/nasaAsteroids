import { ICustomButtonProps } from '../type/CustomButtonType';
import { FC } from 'react';


const CustomButton:FC<ICustomButtonProps> = (props) => {

  const {
    text,
    width,
    height,
  } = props;

  return (
    <>
      <button>{text}</button>
    </>
  );
};


export default CustomButton;
