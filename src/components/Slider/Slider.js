import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import Slide from '../Slide/Slide';
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
    const swiperElRef = useRef(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('progress', (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
        });

        swiperElRef.current.addEventListener('slidechange', (e) => {
        console.log('slide changed');
        });
    }, []);

    return (
        <swiper-container
            ref={swiperElRef}
            slides-per-view="1"
            navigation="true"
            pagination={{clickable: true,}}
            centeredSlides={true}
            >
            {slides.map((slide,index)=>{
                return <swiper-slide key={index} ><Slide slide={slide}/></swiper-slide>
            })}
            
        </swiper-container>
    );
};

export default Slider;




