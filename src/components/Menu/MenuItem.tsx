import style from "./MenuItem.module.scss";
import ModalForm from "./MenuForm";
import {MenuInterface} from "../../interfaces/menu.interface";
import React, {FormEvent, useRef} from "react";

const MenuItem = (props: MenuInterface) => {

   return (
      <li className={style.item} key={props.id}>
         <div className={style.wrapper}>
            <h3 className={style.name}>{props.name}</h3>
            <span className={style.dsc}>{props.dsc}</span>
            <span className={style.price}>{props.price} USD</span>
         </div>
         <div className={style.addCart}>
            <ModalForm
               id={props.id}
               name={props.name}
               price={props.price}
            />
         </div>
      </li>
   )
}

export default MenuItem