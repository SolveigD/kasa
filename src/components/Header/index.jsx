import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO.svg'
import '../../sass/components/Header.scss'





 
function Header({ children }) {
    return (
      <nav className='header_nav'>
        <div className='top_link'>
            <Link to="/" className='logo_link'>
                <img src={Logo} alt='logo' className='logo' />
            </Link>
            <div className='link_nav'>
                <Link to="/" className='nav_link'>Accueil</Link>
                <Link to="/A-propos" className='nav_link'>A propos</Link>
            </div>
        </div>
        <main>
          {children}
        </main>
      </nav>
    );
  }
  
  export default Header;