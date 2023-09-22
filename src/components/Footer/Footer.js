import classes from './Footer.module.scss'

import emailIcon from '../../assets/icons/footer-icons/email.svg'
import indeedIcon from '../../assets/icons/footer-icons/indeed.svg'
import resumeIcon from '../../assets/icons/footer-icons/resume.svg'
import githubIcon from '../../assets/icons/footer-icons/github.svg'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes['layout-container']}>
                <div className={classes['layout-container-text']}>
                    <h4 className={classes['footer__title']}>Thank You for Visiting</h4>
                    <p className={classes['footer__text']}>I appreciate the time you took out of your day to check out my site. </p>
                </div>
                <ul className={classes['footer__links-container']}>
                    <li className={classes['footer__link-container']}><a className={classes['footer__link']} href="/about">About</a></li>
                    <li className={classes['footer__link-container']}><a className={classes['footer__link']} href="/projects">Projects</a></li>
                    <li className={classes['footer__link-container']}><a className={classes['footer__link']} href="/contact'">Contact Me</a></li >
                </ul>
            </div>
            
            <ul className={classes['footer__icon-list']}>
                <li className={classes['footer__icon-container']}><a href="https://docs.google.com/document/d/1k4IQN1LOXPvVGYoyf9VfNVUcsgeGms5naMfbv3h5wEA/view?usp=sharing" className={classes['footer__anchor']} target='_blank' rel='noreferrer'><img className={classes['footer__icon']} src={resumeIcon} alt="resume download" /></a></li>
                <li className={classes['footer__icon-container']}><a href="https://www.linkedin.com/in/alejandro-castro-professional/" className={classes['footer__anchor']} target='_blank' rel='noreferrer'><img className={classes['footer__icon']} src={indeedIcon} alt="indeed link" /></a></li>
                <li className={classes['footer__icon-container']}><a href="mailto:alejo199821@gmail.com" className={classes['footer__anchor']}><img className={classes['footer__icon']} src={emailIcon} alt="email link" /></a></li>
                <li className={classes['footer__icon-container']}><a href="https://github.com/alejo2198" className={classes['footer__anchor']} target='_blank' rel='noreferrer'><img className={classes['footer__icon']} src={githubIcon} alt="github link" /></a></li>
            </ul>
            
        </footer>


    );
};

export default Footer;