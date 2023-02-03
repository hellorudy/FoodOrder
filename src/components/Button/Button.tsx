import {ReactNode} from "react";
import {ButtonInterface} from "../../interfaces/button.interface";
import style from './Button.module.scss'

const Button = (props: ButtonInterface) => {
   return (
      <button onClick={props.onClick} className={[props.color, style.button].join(' ')}>
         {props.children}
      </button>
   )
}

export default Button