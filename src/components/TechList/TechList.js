import classes from './TechList.module.scss'
import TechItem from '../TechItem/TechItem';
const TechList = () => {
    const techListArray=["HTML","CSS","JAVASCRIPT","TAILWIND","SASS","REACT","TYPESCRIPT","API'S","EXPRESS","NODE","JIRA","GIT","JEST","MYSQL","NEXT","REDUX"]
    return (
        <section className={classes['tech-list__section']}>
            <ul className={classes['tech-list']}>
                {techListArray.map((techItem,index) => {
                    return(
                       <TechItem key={index} techText={techItem}/>
                    )
                })}
            </ul>
            
            <ul className={classes['tech-list']}>
                {techListArray.map((techItem,index) => {
                    return(
                       <TechItem key={index} techText={techItem}/>
                    )
                })}
               
            </ul>
            
        </section>
    );
};

export default TechList;