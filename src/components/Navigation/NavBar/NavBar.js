import classes from './Navbar.module.scss'
import logo from '../../../assets/icons/logo.svg'
import MobileContext from '../../../store/mobile-context';
import { useContext } from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'


const NavBar = () => {
    const mobileContext = useContext(MobileContext);
    const isMobile = mobileContext.isMobile;

    return (
        <nav className={classes.nav}>
            <div className={classes.logo}>
                <a href='/'><img src={logo} alt="logo for site. A desktop with a coding display" className={classes['logo__icon']} /></a>
                <p className={classes['logo__text']}>Junior Developer</p>
            </div> 
            {isMobile && <HamburgerMenu/>}
            {!isMobile && 
                <ul className={classes['nav__links']}>
                    <li className={classes['nav__link-container']}><a  className={classes['nav__link']} href="#about">About</a></li>
                    <li className={classes['nav__link-container']}><a  className={classes['nav__link']} href="#projects">Projects</a></li>
                    <li className={classes['nav__link-container']}><a  className={classes['nav__link']} href="#contact">Contact Me</a></li>
                </ul>
            }
            
        </nav>
    );
};

export default NavBar;