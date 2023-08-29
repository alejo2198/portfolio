import classes from './Form.module.scss'
import FormGraphic from '../../assets/images/form-graphic.svg'
import SuccessModal from '../SuccessModal/SuccessModal';

import { useState } from 'react';
const Form = () => {

    const [isModalOpen,setIsModalOpen] = useState(false)

    const openModal = (event) => {
        event.preventDefault();
        setIsModalOpen(true)
    }
    const closeModal = (event) => {
        event.preventDefault();
        setIsModalOpen(false)
    }
    return (
        <section className={classes["form-section"]}>
            {isModalOpen && <SuccessModal closeModal={closeModal}/>}
            <h2 className={classes["form__title"]}>Contact Me</h2>
            <p className={classes["form__text"]}>If you feel like I would be a good addition to your team, please don’t hesitate to reach out. I would love to hear from you.</p>
            <img className={classes["form__img"]} src={FormGraphic} alt="" />
            <form className={classes["form"]} onSubmit={openModal}>
                <label className={classes["form__label"]} htmlFor="full-name">Full Name:</label>
                <input className={classes["form__input"]} type="text" name="full-name" />
                <label className={classes["form__label"]} htmlFor="company">Company:</label>
                <input  className={classes["form__input"]} type="text" name="company"  />
                <label className={classes["form__label"]} htmlFor="email">Email:</label>
                <input  className={classes["form__input"]} type="email" name="email"/>
                <label className={classes["form__label"]} htmlFor="message">Message:</label>
                <textarea className={classes["form__textarea"]} name="message" ></textarea>
                <button className={classes["form__button"]}>SEND</button>
            </form>
        </section>
    );
};

export default Form;