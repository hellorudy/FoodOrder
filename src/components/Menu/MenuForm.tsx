import style from "./MenuForm.module.scss";
import Button from "../Button/Button";
import buttonStyle from "../Button/Button.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";
import React, {FormEvent, useRef} from "react";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice";

const ModalForm = (props: any) => {
   const inputRef = useRef<HTMLInputElement>(null)
   const dispatch = useDispatch()

   const incrementQuantityHandler = (e: FormEvent) => {
      e.preventDefault()
      if (inputRef.current != null) {
         inputRef.current.value = String(Number(inputRef.current.value) + 1)
      }
   }

   const decrementQuantityHandler = (e: FormEvent) => {
      e.preventDefault()
      if (inputRef.current != null) {
         if (Number(inputRef.current.value) > 0) {
            inputRef.current.value = String(Number(inputRef.current.value) - 1)
         }
      }
   }

   const addToBasketHandler = (e: FormEvent) => {
      e.preventDefault()

      const newOrderItem = {
         id: props.id,
         name: props.name,
         price: props.price,
         quantity: inputRef.current != null ? inputRef.current.value : 0
      }

      dispatch(cartActions.addToBasket(newOrderItem))
      dispatch(cartActions.sumPrice())

      inputRef.current != null && (inputRef.current.value = '0')
   }

   return (
      <form className={style.addCart}>
         <div className={style.inputWrapper}>
            <button className={style.decrement} onClick={decrementQuantityHandler}>-</button>
            <input type="number" id={props.id} ref={inputRef} min={0} defaultValue={0}/>
            <button className={style.increment} onClick={incrementQuantityHandler}>+</button>
         </div>
         <Button onClick={addToBasketHandler} color={buttonStyle.accent}>
            <FontAwesomeIcon icon={faBasketShopping}/>
            <span>Add</span>
         </Button>
      </form>
   )
}

export default ModalForm