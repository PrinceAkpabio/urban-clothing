import React from 'react'
import CartIcon from '../cart-icon/cart-icon.component';


export default function MenuButton({menu, ToggleMenu}) {
 return (
   <span className="Nav-mb-menu"
   >
     <CartIcon /> 
     {menu ?
       <ion-icon
         onClick={ToggleMenu}
         name="close-outline"></ion-icon>
       :
       <ion-icon
         onClick={ToggleMenu}
         name="menu-outline"></ion-icon>}
   </span>
 )
}


