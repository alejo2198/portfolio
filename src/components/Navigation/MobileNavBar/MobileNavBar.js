import classes from './MobileNavBar.module.scss'
import closeIcon from '../../../assets/icons/close.svg'

const MobileNavBar = (closeMenuHandler) => {
    return (
        <nav className={classes['nav']}>
            <ul className={classes['nav__links']}>
                <li ><a className={classes['nav__link']} href="/">About</a></li>
                <li ><a className={classes['nav__link']} href="/">Projects</a></li>
                <li ><a className={classes['nav__link']} href="/">Contact Me</a></li>
            </ul>
            <img src={closeIcon} alt="a close icon" className={classes['nav__close-icon']} onClick={(event) => {closeMenuHandler(event)}} />
        </nav>
    );     
};

export default MobileNavBar;