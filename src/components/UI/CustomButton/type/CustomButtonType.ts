import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';


export interface ICustomButtonProps extends
DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    text: string
    extraText?: string
}
