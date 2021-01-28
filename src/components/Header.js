import React from 'react'
import logo from '../../src/images/logo_mesto.svg'

function Header(props) {
  // eslint-disable-next-line no-cond-assign
  if(!props.loggedIn) {
    return(
      <div className="header">
      <img className="logo" src={logo} alt="Логотип"/>
      <p className="header__user"></p>
      <p className="header__logout"></p>
    </div>
    )
  }
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Логотип"/>
      <p className="header__login"></p>
    </div>
  )
}

export default Header
