import logo from '../../src/images/logo_mesto.svg'

function Header() {
    return(
        <div className="header">
        <img className="logo" src={logo} alt="Логотип"/>
      </div>
    )
}

export default Header