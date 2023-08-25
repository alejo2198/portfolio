import classes from './Header.module.scss'
import logo from '../../assets/icons/logo.svg'
import downloadIcon from '../../assets/icons/download.svg'
import profilePicture from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <a href='/'><img src={logo} alt="logo for site. A desktop with a coding display" className={classes['logo__icon']} /></a>
                <p className={classes['logo__text']}>Junior Developer</p>
            </div>  
            <div className={classes['header__content-container']}>
                <h1 className={classes['header__title']}>
                    Hello I'm <span className={classes['header__title--name']}>Alejandro Castro</span> A Friendly Developer
                </h1>
                <div className={classes['header__button-container']}>
                    
                </div>
                <img src={profilePicture} alt="profile picture of Alejandro Castro" className={classes['header__profile-picture']} />
            </div>
            

            
        </header>
    );
};

export default Header;