import classes from './HamburgerMenu.module.scss'
import hamburgerIcon from '../../../assets/icons/hamburger-menu.svg'
import { useState } from 'react';
import MobileNavBar from '../MobileNavBar/MobileNavBar';

const HamburgerMenu = () => {
    const [showMobileNav,setShowMobileNav] = useState(false)

    const openMenuHandler = (event) =>{
        event.preventDefault();
        setShowMobileNav(true);
    }

    function closeMenuHandler(event) {
        event.preventDefault();
        setShowMobileNav(false);
    }

    return (
        <>
        <div className={classes['menu-container']} onClick={openMenuHandler}>
            <img src={hamburgerIcon} alt="hamburger icon" className={classes['menu__icon']} />
        </div>
        {showMobileNav && <MobileNavBar closeMenuHandler={closeMenuHandler}/>}

        </>
    );
};

export default HamburgerMenu;