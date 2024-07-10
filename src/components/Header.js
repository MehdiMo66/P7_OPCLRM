import { Link } from "react-router-dom";
import LOGO from '../assets/images/LOGO.svg'
import '../assets/styles/header.scss'


function Header() {
    return (

        <header>
            <img src={LOGO} alt='logo' className='logo' />
            <nav>
                <Link to='/'>Acceuil</Link>
                <Link to='/about'>A propos</Link>
            </nav>
        </header>

    )
}

export default Header