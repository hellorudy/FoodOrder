import style from './Header.module.scss'
import Button from "../components/Button/Button";
import buttonStyle from '../components/Button/Button.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";
import {uiActions} from "../store/ui-slice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";

const Header = () => {
   const totalPrice = useSelector((state: RootState) => state.cart.totalAmount)
   const dispatch = useDispatch()
   const openCartHandler = () => {
      dispatch(uiActions.toggle())
   }

   return (
      <header className={style.header}>
         <h1 className={style.title}>OrderFood</h1>
         <Button onClick={openCartHandler} color={buttonStyle.accent}>
            <FontAwesomeIcon icon={faBasketShopping}/>
            <span>Cart</span>
            <span> | </span>
            <span>{totalPrice} USD</span>
         </Button>
      </header>
   )
}

export default Header