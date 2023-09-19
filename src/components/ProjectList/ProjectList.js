import classes from './ProjectList.module.scss'

import Project from '../Project/Project';

const ProjectList = () => {
    const projects = [
        {
            name:"PoshPup",
            isInDevelopment:true,
            description:"An E-commerce store for stylish canines. This store features all the new trends for dog fashion.  Users can browse the market, add items to cart in unique sizes.",
            keyFeatures:["Landing Page","Cart Functionality","Product Pages","Stripe Integration"],
            techStack:["html","sass","css","react","redux","next"]
        },
        {
            name:"FlashBack",
            isInDevelopment:true,
            description:"An Application for couples to remember all the moments they had together.  Each Adventure together can be saved with a description, favorite moment and a unique photo gallery.",
            keyFeatures:["Landing Page","Authentication","Adventure Log","Photo Gallery"],
            techStack:["typescript","api","react","node","mysql","express"]
        }
    ]

    return (
        <section className={classes["project-section"]} id="projects">
            <h2 className={classes["project-section__title"]}>Projects</h2>
            <ul className={classes["projects"]}>
                {projects.map((project,index)=>{
                    return <Project key={index} index={index} project={project} />
                })}
            </ul>

        </section>
    );
};

export default ProjectList;