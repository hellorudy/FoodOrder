import style from "./Cart.module.scss";
import Button from "../Button/Button";
import buttonStyle from "../Button/Button.module.scss";
import {OrderItemInterface} from "../../interfaces/order.interface";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice";

const CartItem = (props: OrderItemInterface) => {
   const dispatch = useDispatch()
   const incrementHandler = () => {
      dispatch(cartActions.increment(props.id))
      dispatch(cartActions.sumPrice())
   }
   const decrementHandler = () => {
      dispatch(cartActions.decrement(props.id))
      dispatch(cartActions.sumPrice())
   }
   const removeHandler = () => {
      dispatch(cartActions.remove(props.id))
      dispatch(cartActions.sumPrice())
   }
   return (
      <li className={style.item} key={props.id}>
         <div>
            <span className={style.name}>{props.name}</span>
            <div className={style.priceWrapper}>
               <span className={style.price}>{(props.price * props.quantity).toFixed(2)} USD</span>
               <span className={style.quantity}>{props.quantity}</span>
            </div>
         </div>
         <div className={style.buttonWrapper}>
            <div className={style.buttonContainer}>
               <button className={style.decrement} onClick={decrementHandler}>-</button>
               <button className={style.increment} onClick={incrementHandler}>+</button>
            </div>
            <Button onClick={removeHandler} color={buttonStyle.dangerBorder}>Remove</Button>
         </div>

      </li>
   )
}

export default CartItem