import classes from './Slide.module.scss';

import chessGraphic from '../../assets/images/slider-images/chess.svg'
import crochetGraphic from '../../assets/images/slider-images/crochet.svg'
import guitarGraphic from '../../assets/images/slider-images/guitar.svg'
import designGraphic from '../../assets/images/slider-images/design.svg'
import cyclingGraphic from '../../assets/images/slider-images/cycling.svg'

const Slide = ({slide}) => {

    let graphic;

    switch(slide.title) {
        case "Chess":
          graphic = chessGraphic;
          break;
        case "Crochet":
           graphic = crochetGraphic;
           break;
        case "Guitar":
            graphic = guitarGraphic;
           break;
        case "Design":
            graphic = designGraphic;
            break;
        case "Cycling":
            graphic = cyclingGraphic;
            break;
        default:
          break;
      }
    return (
        <article className={classes.slide}>
            <h5 className={classes['slide__title']}>{slide.title}</h5>
            <img src={graphic} alt={slide.alt}  className={classes['slide__graphic']}/>
            <p className={classes['slide__text']}>{slide.text}</p>
        </article>
    );
};

export default Slide;