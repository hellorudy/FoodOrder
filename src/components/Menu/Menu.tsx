import style from './Menu.module.scss'
import {MenuInterface} from "../../interfaces/menu.interface";
import ModalForm from "./MenuForm";
import MenuItem from "./MenuItem";

const Menu = () => {
   const menu: MenuInterface[] = [
      {
         id: 'm1',
         name: 'Big Daddy',
         dsc: 'The largest burger on offer.',
         price: 32.99
      },
      {
         id: 'm2',
         name: 'Bobby Burger',
         dsc: 'A true feast of flavors.',
         price: 28.99
      },
      {
         id: 'm3',
         name: 'Cheese',
         dsc: 'A classic combination of 100% beef and cheese.',
         price: 26.99
      },
      {
         id: 'm4',
         name: 'Double Trouble with Bacon',
         dsc: 'Just in time for a cheat meal.',
         price: 32.99
      },
      {
         id: 'm5',
         name: 'Kimchi & Kiszony',
         dsc: 'This is one of the boldest compositions in our new MENU.',
         price: 27.99
      },
   ]

   const renderMenu = menu.map((item) =>
      <MenuItem id={item.id} name={item.name} dsc={item.dsc} price={item.price} key={item.id}/>
   )

   return (
      <ul className={style.wrapper}>
         {renderMenu}
      </ul>
   )
}

export default Menu