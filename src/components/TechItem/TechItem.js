import classes from './TechItem.module.scss'

import apiIcon from '../../assets/icons/tech-icons/api.svg'
import cssIcon from '../../assets/icons/tech-icons/css.svg'
import expressIcon from '../../assets/icons/tech-icons/express.svg'
import gitIcon from '../../assets/icons/tech-icons/git.svg'
import htmlIcon from '../../assets/icons/tech-icons/html.svg'
import javascriptIcon from '../../assets/icons/tech-icons/javascript.svg'
import jestIcon from '../../assets/icons/tech-icons/jest.svg'
import jiraIcon from '../../assets/icons/tech-icons/jira.svg'
import mysqlIcon from '../../assets/icons/tech-icons/mysql.svg'
import nextIcon from '../../assets/icons/tech-icons/next.svg'
import nodeIcon from '../../assets/icons/tech-icons/node.svg'
import reactIcon from '../../assets/icons/tech-icons/react.svg'
import reduxIcon from '../../assets/icons/tech-icons/redux.svg'
import sassIcon from '../../assets/icons/tech-icons/sass.svg'
import tailwindIcon from '../../assets/icons/tech-icons/tailwind.svg'
import typescriptIcon from '../../assets/icons/tech-icons/typescript.svg'


const TechItem = ({techText}) => {

    let techIcon;
    let techAlt;
   
    switch(techText){
        case "HTML":
            techIcon = htmlIcon;
            techAlt = "html design"
            break;
        case "CSS":
            techIcon = cssIcon;
            techAlt = "css design"
            break;
        case "JAVASCRIPT":
            techIcon = javascriptIcon;
            techAlt = "javascript design"
            break;
        case "TAILWIND":
            techIcon = tailwindIcon;
            techAlt = "tailwind design"
            break;
        case "SASS":
            techIcon = sassIcon;
            techAlt = "sasss design"
            break;
        case "REACT":
            techIcon = reactIcon;
            techAlt = "react design"
            break;
        case "TYPESCRIPT":
            techIcon = typescriptIcon;
            techAlt = "typescript design"
            break;
        case "API'S":
            techIcon = apiIcon;
            techAlt = "api design"
            break;
        case "EXPRESS":
            techIcon = expressIcon;
            techAlt = "express design"
            break;
        case "NODE":
            techIcon = nodeIcon;
            techAlt = "node design"
            break;
        case "JIRA":
            techIcon = jiraIcon;
            techAlt = "jira design"
        break;
        case "GIT":
            techIcon = gitIcon;
            techAlt = "git design"
            break; 
        case "JEST":
            techIcon = jestIcon;
            techAlt = "jest design"
            break;
        case "MYSQL":
            techIcon = mysqlIcon;
            techAlt = "mysql design"
            break;
        case "NEXT":
            techIcon = nextIcon;
            techAlt = "next design"
            break;
        case "REDUX":
            techIcon = reduxIcon;
            techAlt = "redux design"
            break;
        default:
            break;    
        
    }

    return (
        <li className={classes['tech-item']}>
            <img src={techIcon} alt={techAlt} className={classes['tech-item__img']}/>
            <p className={classes['tech-item__text']}>{techText} </p>
        </li>
    );
};

export default TechItem;