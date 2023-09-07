import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import Slide from '../Slide/Slide';
import classes from './Slider.module.scss'
import navigationRight from '../../assets/icons/navigation-right.svg'
import navigationLeft from '../../assets/icons/navigation-left.svg'

register();

const slides = [
    {
        title:'Design',
        text:'I love to design websites. There is so much thought that goes into choosing colors, layouts, graphics. ',
        alt:'A man on a computer, The computer screens shows design software'},
    {
        title:'Chess',
        text:'I started playing chess after watching the Queen’s Gambit. I am currently an 1800 elo player on Chess.com',
        alt:'A man holding a chess piece'},
    {
        title:'Guitar',
        text:'I’ve been playing guitar for 3 years now. I am an intermediate fingerstyle guitarist. I love to find arrangements online and learn them',
        alt:'A man holding a guitar'},
    {
        title:'Crochet',
        text:'I learned to crochet during Covid. I started with hats, scarfs and mittens. But now I’ve moved on to tops and sweaters',
        alt:'A ball of yarn, with a crochet hook attached to it.'},
    {
        title:'Cycling',
        text:'I’ve cycling since I was 6. My longest ride is Toronto to Niagara Falls. It is the best thing to do when you need a bit of fresh air.',
        alt:' A man on a bike'}
]

const Slider = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: true,
            pagination: true,
            loop:true,
            injectStyles: [
                `
                .swiper-button-next,
                .swiper-button-prev {
                    height:1.5rem;
                }

                .swiper-button-prev {
                    background-image: url(${navigationLeft});
                    background-repeat:no-repeat;
                    background-position:left;
                  }
        
                  .swiper-button-next {
                    background-image: url(${navigationRight});
                    background-repeat:no-repeat;
                    background-position:right;

                  }

                .swiper-button-next svg,
                .swiper-button-prev svg{
                    display:none
                }
                
                .swiper-pagination-bullet{
                    height:.75rem;
                    width:.75rem;
                    background-color: #0D7Ca0;
                }
            `,
            ]
        };
    
        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);

    return (
        <div className={classes['slider-wrapper']}>
             <swiper-container
            ref={swiperRef}
            slides-per-view="1"
            centeredSlides={true}
            init='false'
            >
            {slides.map((slide,index)=>{
                return <swiper-slide key={index} ><Slide slide={slide}/></swiper-slide>
            })}
            
            </swiper-container>
        </div>
       
    );
};

export default Slider;




