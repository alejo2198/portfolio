import classes from './SuccessModal.module.scss'

import closeIcon from '../../assets/icons/close_round.svg'
import checkmarkIcon from '../../assets/icons/checkmark.svg'

import ReactDOM  from 'react-dom';

const Modal = ({closeModal}) => {
    return (
        <div className={classes.overlay} onClick={closeModal}>
<           div className={classes.modal} onClick={e => e.stopPropagation()}>
                <img className={classes['modal__close-icon']} src={closeIcon} alt="a rounded x" onClick={closeModal}/>
                <div className={classes['layout-container']}>
                    <img className={classes['modal__checkmark-icon']} src={checkmarkIcon} alt="a checkmark" />
                    <div className={classes['text-container']}>
                        <h2 className={classes['modal__title']}>Success</h2>
                        <p className={classes['modal__text']}>Thank you! Your message has been received. I will contact you in 1-2 business days. </p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

const SuccessModal = ({closeModal}) => {
    return (
        <>
            {ReactDOM.createPortal(<Modal closeModal={closeModal}/>,document.getElementById('modal-root'))}
        </>
    )
}

export default SuccessModal;