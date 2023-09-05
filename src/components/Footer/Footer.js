import classes from './Footer.module.scss'

import emailIcon from '../../assets/icons/footer-icons/email.svg'
import indeedIcon from '../../assets/icons/footer-icons/indeed.svg'
import resumeIcon from '../../assets/icons/footer-icons/resume.svg'
import githubIcon from '../../assets/icons/footer-icons/github.svg'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <h4 className={classes['footer__title']}>Thank You for Visiting</h4>
            <p className={classes['footer__text']}>I appreciate the time you took out of your day to check out my site. </p>
            <ul className={classes['footer__links-container']}>
                <li className={classes['footer__link-container']}><a className={classes['footer__link']} href="/about">About</a></li>
                <li className={classes['footer__link-container']}><a className={classes['footer__link']} href="/projects">Projects</a></li>
                <li className={classes['footer__link-container']}><a className={classes['footer__link']} href="/contact'">Contact Me</a></li >
            </ul>
            <ul className={classes['footer__icon-list']}>
                <li className={classes['footer__icon-container']}><img className={classes['footer__icon']} src={resumeIcon} alt="resume download" /></li>
                <li className={classes['footer__icon-container']}><img className={classes['footer__icon']} src={indeedIcon} alt="indeed link" /></li>
                <li className={classes['footer__icon-container']}><img className={classes['footer__icon']} src={emailIcon} alt="email link" /></li>
                <li className={classes['footer__icon-container']}><img className={classes['footer__icon']} src={githubIcon} alt="github link" /></li>
            </ul>
        </footer>

    );
};

export default Footer;