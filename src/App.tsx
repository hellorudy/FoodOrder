import Header from "./layout/Header";
import Menu from "./components/Menu/Menu";
import Modal from "./components/Modal/Modal";
import Cart from "./components/Cart/Cart";
import {useSelector} from "react-redux";
import {RootState} from "./store/store";


function App() {
   const showCart = useSelector((state: RootState) => state.ui.cartIsVisible)

   return (
      <div>
         {showCart && <Modal>
            <Cart />
         </Modal>}
         <Header></Header>
         <Menu></Menu>
      </div>
   )
}

export default App
