import classes from './Button.module.scss'
import downloadIcon from '../../assets/icons/download.svg'
import { smoothScrollToSection } from '../../utils/smooth-scroll';

const Button = ({type}) => {

    //Handlers
    const contactMeClickedHandler = (event) => {
        event.preventDefault();
        smoothScrollToSection('contact')
    }
    const projectsClickedHandler = (event) => {
        event.preventDefault();
        smoothScrollToSection('projects')
    }
    const resumeClickedHandler = (event) => {
        event.preventDefault();
        window.open("https://docs.google.com/document/d/1k4IQN1LOXPvVGYoyf9VfNVUcsgeGms5naMfbv3h5wEA/edit?usp=sharing",'_blank') 
    }

    //logic for determining handler and class
    let buttonHandler;
    let buttonClass;

    switch (type){
        case 'Contact Me':
            buttonHandler = contactMeClickedHandler;
            buttonClass = 'button--contact';
            break;
        case 'View My Projects':
            buttonHandler = projectsClickedHandler;
            buttonClass = 'button--projects';
            break;
        case 'Resume':
            buttonHandler = resumeClickedHandler;
            buttonClass = 'button--resume';
            break;
        default:
            break;
    }

    return (
        <button onClick={buttonHandler} className={classes[buttonClass]}>
            {type} 
            {type === 'Resume' && <img src={downloadIcon} alt='a download icon' className={classes['button__icon']}/>}
        </button>
    );
};

export default Button;