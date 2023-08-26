import classes from './AboutMe.module.scss'

const AboutMe = () => {
    return (
        <section className={classes['about-section']}>
            <h2 className={classes['about-section__title']}>About Me</h2>
            <h4 className={classes['about-section__text']} >I’m a passionate Full-Stack developer who loves solving problems in innovative ways. You can trust that I will get the job done and be an asset to your tech department.</h4>
            <h4 className={classes['about-section__text']} >I have university, boot-camp and freelance experience that I leverage to find my way around the trickiest problems. </h4>
            <h4 className={classes['about-section__text']} >I specialize in react development, I am continuously exploring the framework to find new tools that will help me find more efficient, robust solutions.</h4>
            <h4 className={classes['about-section__text']} >In terms of who I am as a person, I am a trusting, friendly individual with a ton of hobbies</h4>
        </section>
    );
};

export default AboutMe;