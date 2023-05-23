import '../../styles/header.scss';
import {Link} from "react-router-dom";
import logo from "../../assets/logo.svg";

/**
 * @function Header
 * @description Show the header of the site with the navigation
 * @returns { HTMLElement }
 */
function Header() {
    return(
        <header>
            <nav className="header__nav">
                <Link to="/" className="header__link-img-wrapper">
                    <img src={logo} alt="" className="header__img" />
                </Link>
                <ul className="header__links">
                    <Link to="/" className="header__link">
                        <li>Accueil</li>
                    </Link>
                    <Link to="/" className="header__link">
                        <li>Profil</li>
                    </Link>
                    <Link to="/settings" className="header__link">
                        <li>Réglage</li>
                    </Link>
                    <Link to="community" className="header__link">
                        <li>Communauté</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}
export default Header