import style from './Cart.module.scss'
import buttonStyle from '../Button/Button.module.scss'
import Button from "../Button/Button";
import CartItem from "./CartItem";
import {OrderInterface, OrderItemInterface} from "../../interfaces/order.interface";
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/ui-slice";
import {RootState} from "../../store/store";

const Cart = () => {
   const dispatch = useDispatch()
   const orderItems = useSelector((state: RootState) => state.cart)

   const closeCartHandler = () => {
      dispatch(uiActions.toggle())
   }
   const dummyHandler = () => {
   }

   const order = orderItems.items.map((item: OrderItemInterface) => <CartItem
      id={item.id}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      key={item.id}
   />)

   return (
      <>
         {orderItems.items.length && <ul className={style.orderList}> {order} </ul>}
         {!orderItems.items.length && <span className={style.empty}>Your cart is empty 😔</span>}
         <div className={style.amountWrapper}>
            <span className={style.totalName}>Total amount</span>
            <span className={style.totalPrice}>{orderItems.totalAmount} USD</span>
         </div>
         <div className={style.btnWrapper}>
            <Button onClick={closeCartHandler} color={buttonStyle.dangerBorder}>Close</Button>
            <Button onClick={dummyHandler} color={buttonStyle.accent}>Order</Button>
         </div>
      </>
   )
}

export default Cart