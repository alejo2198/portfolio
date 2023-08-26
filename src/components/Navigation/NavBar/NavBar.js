import classes from './Navbar.module.scss'
import logo from '../../../assets/icons/logo.svg'

import { useEffect, useState } from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

function getWindowWidth() {
    const { innerWidth: width} = window;
    return width;
}

const NavBar = () => {
    const [isMobile,setIsMobile] = useState(getWindowWidth() < 767);
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());
    
    useEffect(() => {
        function handleResize() {
          setWindowWidth(getWindowWidth());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(()=>{
        if(windowWidth < 767){
            setIsMobile(true);
        } else{
            setIsMobile(false)
        }

    },[windowWidth])

    return (
        <nav className={classes.nav}>
            <div className={classes.logo}>
                <a href='/'><img src={logo} alt="logo for site. A desktop with a coding display" className={classes['logo__icon']} /></a>
                <p className={classes['logo__text']}>Junior Developer</p>
            </div> 
            {isMobile && <HamburgerMenu/>}
            <ul className={classes['nav__links']}>
                <li><a href="/">About</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Contact Me</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;