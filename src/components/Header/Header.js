import classes from './Header.module.scss'

import NavBar from '../Navigation/NavBar/NavBar';
import profilePicture from '../../assets/images/profile.png'

import Button from '../Button/Button';

const Header = () => {
    return (
        <header className={classes.header}>
            <NavBar/>
            <div className={classes['header__content-container']}>
                <h1 className={classes['header__title']}>
                    Hello I'm <span className={classes['header__title--name']}>Alejandro Castro</span> A Friendly Developer
                </h1>
                <div className={classes['header__button-container']}>
                    <Button type='Contact Me'/>
                    <Button type='View My Projects'/>
                </div>
            </div>
            <img src={profilePicture} alt="profile of Alejandro Castro" className={classes['header__profile-picture']} />
            <div className={classes['header__resume-container']}>
                <Button type='Resume'/>
            </div>

            
        </header>
    );
};

export default Header;