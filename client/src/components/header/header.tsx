import logo from 'assets/img/logo-sm.svg'
import HeaderForm from './header-form'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header_component'>
      <div className="container">
        <main>
          <Link to="/" className='logo'>
            <img src={logo} alt="Logo Mercado Livre" />&emsp;
          </Link>
          <HeaderForm />
        </main>
      </div>
    </header>
  )
}

export default Header