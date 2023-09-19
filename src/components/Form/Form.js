import classes from './Form.module.scss'
import FormGraphic from '../../assets/images/form-graphic.svg'
import SuccessModal from '../SuccessModal/SuccessModal';
import {isEmpty,isEmail} from 'validator'
import { useState,useReducer, useEffect,useRef } from 'react';
import emailjs from '@emailjs/browser';

const emailReducer = (state,action) => {
    if (action.type === 'USER_INPUT'){
        return {
            value:action.val,
            isEmpty:isEmpty(action.val),
            isValid:isEmail(action.val)
        }
    }
    if (action.type === 'VALID_FORM_SUBMISSION'){
        return {
            value:"",
            isEmpty:true,
            isValid:false,
        }
}
    return {
        value:'',
        isEmpty:true,
        isValid:false,
    }
}
const nameReducer = (state,action) => {
    if (action.type === 'USER_INPUT'){
        return {
            value:action.val,
            isEmpty:isEmpty(action.val),
        }   
    }
    if (action.type === 'VALID_FORM_SUBMISSION'){
        return {
            value:"",
            isEmpty:true,
        }
    }
    return {
        value:'',
        isEmpty:true,
    }
}
const companyReducer = (state,action) => {
    if (action.type === 'USER_INPUT'){
        return {
            value:action.val,
            isEmpty:isEmpty(action.val),
        } 
    }
    if (action.type === 'VALID_FORM_SUBMISSION'){
        return {
            value:"",
            isEmpty:true,
        }
    }
    return {
        value:'',
        isEmpty:true
    }
}
const messageReducer = (state,action) => {
    if (action.type === 'USER_INPUT'){
        return {
            value:action.val,
            isEmpty:isEmpty(action.val),
        }
    }
    if (action.type === 'VALID_FORM_SUBMISSION'){
        return {
            value:"",
            isEmpty:true,
        }
    }
    return {
        value:'',
        isEmpty:true
    }
}

const formReducer = (state,action) => {
    if (action.type === 'FORM_SUBMISSION'){ 
        if(state.isValid){
            return {
                isValid:true,
                isTouched: false,
            } 
        }
        return {
            isValid:state.isValid,
            isTouched: true,
        }
    }
    if (action.type === 'INPUTS_INVALID'){    
        return {
            isValid:false,
            isTouched: state.isTouched,
        }   
    }
    if (action.type === 'ALL_INPUTS_VALID'){   
        return {
            isValid:true,
            isTouched: state.isTouched,
        }    
    }
    return {
        isValid:false,
        isTouched: false,
    }
}

const Form = () => {

    const [isModalOpen,setIsModalOpen] = useState(false);

    const [emailState,dispatchEmail] = useReducer(emailReducer,{value:'',isEmpty:true,isValid:false});
    const [nameState,dispatchName] = useReducer(nameReducer,{value:'',isEmpty:true});
    const [companyState,dispatchCompany] = useReducer(companyReducer,{value:'',isEmpty:true});
    const [messageState,dispatchMessage] = useReducer(messageReducer,{value:'',isEmpty:true});

    const [formState,dispatchForm] = useReducer(formReducer,{isValid:false,isTouched:false});
    const form = useRef();


    const {isValid: emailIsValid} = emailState;
    const {isEmpty: nameIsInvalid} = nameState;
    const {isEmpty: companyIsInvalid} = companyState;
    const {isEmpty: messageIsInvalid} = messageState;
    const {isTouched:formIsTouched} = formState;

    useEffect(()=>{
        
        if(emailIsValid && !nameIsInvalid && !companyIsInvalid && !messageIsInvalid){
            dispatchForm({type:'ALL_INPUTS_VALID'})
        }else{
            dispatchForm({type:'INPUTS_INVALID'})  
        }
        

    },[emailIsValid,nameIsInvalid,companyIsInvalid,messageIsInvalid])

    const openModal = (event) => {
        event.preventDefault();
        dispatchForm({type:'FORM_SUBMISSION'}) 
        if (formState.isValid){
            dispatchCompany("VALID_FORM_SUBMISSION");
            dispatchMessage("VALID_FORM_SUBMISSION");
            dispatchName("VALID_FORM_SUBMISSION");
            dispatchEmail("VALID_FORM_SUBMISSION");
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            setIsModalOpen(true)
            event.target.reset();

        }
        
    }
    const closeModal = (event) => {
        event.preventDefault();
        setIsModalOpen(false)
    }

    const emailChangeHamdler= (event) => {
        event.preventDefault();
        dispatchEmail({type:'USER_INPUT',val:event.target.value})
    }
    const nameChangeHamdler= (event) => {
        event.preventDefault();
        dispatchName({type:'USER_INPUT',val:event.target.value})
    }
    const companyChangeHamdler= (event) => {
        event.preventDefault();
        dispatchCompany({type:'USER_INPUT',val:event.target.value})
    }
    const messageChangeHamdler= (event) => {
        event.preventDefault();
        dispatchMessage({type:'USER_INPUT',val:event.target.value})
    }
    return (
        <section className={classes["form-section"]} id="contact">
            {isModalOpen && <SuccessModal closeModal={closeModal}/>}
            <h2 className={classes["form__title"]}>Contact Me</h2>
            <p className={classes["form__text"]}>If you feel like I would be a good addition to your team, please don’t hesitate to reach out. I would love to hear from you.</p>
            <img className={classes["form__img"]} src={FormGraphic} alt="" />
            <form className={classes["form"]} onSubmit={openModal} ref={form}>
                <label className={classes["form__label"]} htmlFor="user_name">Full Name:</label>
                <input className={classes[`form__input${nameIsInvalid && formIsTouched ? '--error':''}`]} type="text" name="user_name" onInput={nameChangeHamdler}/>
                <label className={classes["form__label"]} htmlFor="user_company">Company:</label>
                <input  className={classes[`form__input${companyIsInvalid && formIsTouched ? '--error':''}`]} type="text" name="user_company" onInput={companyChangeHamdler} />
                <label className={classes["form__label"]} htmlFor="user_email">Email:</label>
                <input  className={classes[`form__input${!emailIsValid && formIsTouched ? '--error':''}`]} type="email" name="user_email" onInput={emailChangeHamdler} />
                <label className={classes["form__label"]} htmlFor="message">Message:</label>
                <textarea className={classes[`form__textarea${messageIsInvalid && formIsTouched ? '--error':''}`]} name="message" onInput={messageChangeHamdler} ></textarea>
                <button className={classes["form__button"]}>SEND</button>
            </form>
        </section>
    );
};

export default Form;

