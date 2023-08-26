import classes from './Button.module.scss'
import downloadIcon from '../../assets/icons/download.svg'

const Button = ({type}) => {

    //Handlers
    const contactMeClickedHandler = (event) => {
        event.preventDefault();
    }
    const projectsClickedHandler = (event) => {
        event.preventDefault();
    }
    const resumeClickedHandler = (event) => {
        event.preventDefault();
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