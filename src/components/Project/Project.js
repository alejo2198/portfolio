import ProjectTechItem from '../ProjectTechItem/ProjectTechItem';
import classes from './Project.module.scss'
import { useState,useEffect } from 'react';

function getWindowWidth() {
    const { innerWidth: width} = window;
    return width;
}

const Project = ({index,project}) => {
    const [isMobile,setIsMobile] = useState(getWindowWidth() < 767);
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());
    
    useEffect(() => {
        function handleResize() {
          setWindowWidth(getWindowWidth());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(()=>{
        if(windowWidth < 767){
            setIsMobile(true);
        } else{
            setIsMobile(false)
        }

    },[windowWidth])
    const isReverse = (index % 2 === 1)

    return (
        <article className={classes[`project${isReverse?'--reverse':''}`]}>
            <div className={classes["project__content"]}>
                <div className={classes["project__title-container"]}>
                    <h3 className={classes["project__title"]}>{project.name}</h3>
                    <p className={classes["project__in-development"]}>In Development *</p>
                </div>
                <p className={classes["project__description"]}>{project.description}</p>
                {isMobile && <div className={classes["project__image-container"]}>&nbsp;</div>}
                <div className={classes["project__content-layout"]}>
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
                </div>
                
            </div>
            {!isMobile && <div className={classes["project__image-container"]}>&nbsp;</div>}
           
        </article>
    );
};

export default Project;