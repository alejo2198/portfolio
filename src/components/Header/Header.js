import classes from './Header.module.scss'
import logo from '../../assets/icons/logo.svg'
import downloadIcon from '../../assets/icons/download.svg'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="logo">
                <a href='/'><img src={logo} alt="logo for site. A desktop with a coding display" className={classes['logo__icon']} /></a>
                <p className={classes['logo__icon']}>Junior Developer</p>
            </div>  
            <h4 className="header__subTitle">Hello I'm</h4>
        </header>
    );
};

export default Header;