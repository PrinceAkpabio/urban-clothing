import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) =>(
 <button id={otherProps.invert ? 'inverted' : ''}
  className={`${isGoogleSignIn  ? 'google-sign-in' : ''} custom-button`} {...otherProps}>

 {children}

 </button>
)

export default CustomButton;