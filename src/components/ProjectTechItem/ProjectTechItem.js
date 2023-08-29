import classes from './ProjectTechItem.module.scss';


import htmlIcon from '../../assets/icons/tech-icons/html.svg'
import cssIcon from '../../assets/icons/tech-icons/css.svg'
import sassIcon from '../../assets/icons/tech-icons/sass.svg'
import reactIcon from '../../assets/icons/tech-icons/react.svg'
import reduxIcon from '../../assets/icons/tech-icons/redux.svg'
import nextIcon from '../../assets/icons/tech-icons/next.svg'
import typeIcon from '../../assets/icons/tech-icons/typescript.svg'
import apiIcon from '../../assets/icons/tech-icons/api.svg'
import nodeIcon from '../../assets/icons/tech-icons/node.svg'
import mysqlIcon from '../../assets/icons/tech-icons/mysql.svg'
import expressIcon from '../../assets/icons/tech-icons/express.svg'

const ProjectTechItem = ({techItem}) => {

    let techIcon;
    let techAlt;
   
    switch(techItem){
        case "html":
            techIcon = htmlIcon;
            techAlt = "html design"
            break;
        case "css":
            techIcon = cssIcon;
            techAlt = "css design"
            break;
        case "redux":
            techIcon = reduxIcon;
            techAlt = "javascript design"
            break;
        case "next":
            techIcon = nextIcon;
            techAlt = "tailwind design"
            break;
        case "sass":
            techIcon = sassIcon;
            techAlt = "sasss design"
            break;
        case "react":
            techIcon = reactIcon;
            techAlt = "react design"
            break;
        case "typescript":
            techIcon = typeIcon;
            techAlt = "typescript design"
            break;
        case "api":
            techIcon = apiIcon;
            techAlt = "api design"
            break;
        case "node":
            techIcon = nodeIcon;
            techAlt = "node design"
            break;
        case "mysql":
            techIcon = mysqlIcon;
            techAlt = "mysql design"
            break;
        case "express":
            techIcon = expressIcon;
            techAlt = "express design"
            break;
       default:
            break;
    }
    return (
        <div className={classes["tech-item"]}>
            <img className={classes["tech-item__img"]} src={techIcon} alt={techAlt} />
        </div>
    );
};

export default ProjectTechItem;