import React from "react";
import CartIcon from "../cart-icon/cart-icon.component";

export default function MenuButton({ menu, ToggleMenu, navRef }) {
  return (
    <span className="Nav-mb-menu">
      <CartIcon />
      {menu ? (
        <ion-icon
          ref={navRef}
          onClick={ToggleMenu}
          name="close-outline"
        ></ion-icon>
      ) : (
        <ion-icon
          ref={navRef}
          onClick={ToggleMenu}
          name="menu-outline"
        ></ion-icon>
      )}
    </span>
  );
}
