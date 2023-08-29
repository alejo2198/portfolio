import ProjectTechItem from '../ProjectTechItem/ProjectTechItem';
import classes from './Project.module.scss'



const Project = ({index,project}) => {
    return (
        <article className={classes["project"]}>
            <div className={classes["project__title-container"]}>
                <h3 className={classes["project__title"]}>{project.name}</h3>
                <p className={classes["project__in-development"]}>In Development *</p>
            </div>
            <p className={classes["project__description"]}>{project.description}</p>
            <div className={classes["project__image-container"]}>&nbsp;</div>
            <div className={classes["project__features"]}>
                <h3 className={classes["project__title"]}>Key Features</h3>
                <ul className={classes["project__features-container"]}>
                    {project.keyFeatures.map((feature,index) => {
                        return <li key = {index} className={classes["project__feature"]}>{feature}</li>
                    })}
                </ul>
            </div>
            <div className={classes["project__tech-stack"]}>
                <h3 className={classes["project__title"]}>Tech Stack</h3>
                <ul className={classes["project__tech-stack-container"]}>
                {project.techStack.map((techItem,index) => {
                       return  <li key = {index} className={classes["project__tech-item"]}><ProjectTechItem techItem={techItem}/></li>
                    })}
                </ul>
            </div>
        </article>
    );
};

export default Project;