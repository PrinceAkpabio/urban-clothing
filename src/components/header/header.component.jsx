import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assets/crown.svg'
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import MenuButton from './menuButton';



const Header = ({ currentUser, hidden }) => {
  const [menu, setMenu] = useState(false)
  const ToogleMenu = () => (
    setMenu(prev => !prev)
  )
  return (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className={`options ${menu && 'active'}`}>
      <Link className={`option ${menu && 'active'}`} to="/shop">
        SHOP
      </Link>
      <Link className={`option ${menu && 'active'}`} to="/shop">
        CONTACT
      </Link>
      
      {currentUser ? (
        <div className={`option ${menu && 'active'}`} onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className={`option ${menu && 'active'}`} to="/signin">
          SIGN IN
        </Link>
        )}
      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropDown />
    }
      <MenuButton
        menu={menu}
        ToggleMenu={ToogleMenu}
      />
  </div>
)};

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden

})

export default connect(mapStateToProps)(Header);