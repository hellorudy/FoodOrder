import style from './Modal.module.scss'
import {createPortal} from "react-dom";

const Backdrop = (props: any) => {
   const changeModalStateHandler = () => {}

   return(
      <div className={style.overlay} onClick={changeModalStateHandler}>
      </div>
   )
}

const ModalContent = (props: any) => {
   return (
      <div className={style.content}>
         {props.children}
      </div>
   )
}
const Modal = (props: any) => {
   return(
      <>
         {createPortal(<Backdrop />, document.querySelector('#overlays')!)}
         {createPortal(<ModalContent> {props.children} </ModalContent>, document.querySelector('#overlays')!)}
      </>
   )
}

export default Modal