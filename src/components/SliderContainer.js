import React, { useState, useEffect, useRef } from 'react'
import SliderContent from './SliderContent';
import Slide from './Slide';

const getWidth = () => window.innerWidth <= 1200 ? window.innerHeight : 1200; // 1200 is the min width of page wrapper
const containerStyle = {
                            position: 'relative',
                            height: '100%',
                            width: '100vw', 
                            whiteSpace: 'nowrap',
                            display: 'flex',
                            alignItems: 'center',
                        };


const SliderContainer = props => {
    const {slides} = props;
    const currentSlide = slides[0];
    const nextSlide = slides[1];

    const [state, setState] = useState({
        activeSlide: 0,
        translate: 0,
        transition: 0.3,
        slideList: [currentSlide, nextSlide]
    });

    const { activeSlide, translate, slideList, transition } = state;

    const sliderRef = useRef();
    const transitionRef = useRef();
    const autoPlayRef = useRef();
    const resizeRef = useRef();

    useEffect(() => {
        transitionRef.current = refreshSlideList;
        autoPlayRef.current = slideRight;
        resizeRef.current = handleResize;
    });

    useEffect(() => {
        const slider = sliderRef.current;

        const refreshSlide = e => {
            transitionRef.current();
        }

        const play = () => {
            autoPlayRef.current();
        }

        let interval = null;

        if (props.autoPlay) {
            interval = setInterval(play, props.autoPlay * 1000);
        }

        const resize = () => {
            clearInterval(interval); // pauses autoPlay
            resizeRef.current();
            interval = setInterval(play, props.autoPlay * 1000);
        }

        const transitionEnd = slider.addEventListener('transitionend', refreshSlide);
        const onResize = window.addEventListener('resize', resize);

        return () => {
            slider.removeEventListener('transitionend', transitionEnd);
            window.removeEventListener('resize', onResize);

            if (props.autoPlay) {
                clearInterval(interval);
            }
        }
    }, []);

    const slideRight = () => {
        setState({
            ...state,
            translate: translate + getWidth(),
            activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
        });
    }

    const refreshSlideList = () => {
        const activeIndex = activeSlide === slides.length ? 0 : activeSlide;
        const nextToActiveIndex = activeSlide === slides.length - 1 ? 0 : activeSlide + 1;
        let slideList = [slides[activeIndex], slides[nextToActiveIndex]];
        setState({
            ...state,
            slideList,
            translate: 0,
            transition: 0
        });
    }

    useEffect(() => {
        if(transition === 0) setState({...state, transition: 0.3});
    }, [transition])

    const handleResize = () => {
        setState({
            ...state,
            translate: 0,
            transition: 0
        })
    }
    let width = 0;
    let margin = 0;
    let inwidth = 0;
    if (props.refA.current && props.refB.current){
        width = props.refA.current.getBoundingClientRect().width;
        inwidth = props.refB.current.getBoundingClientRect().width;
    }
    else {
        width = props.width;
        inwidth = props.inwidth;
    }
    margin = (width-inwidth) / 2;
    
    return <div style={containerStyle} ref={sliderRef}>
        <SliderContent 
            translate={translate}
            transition={transition}
            width={width * slideList.length}
        >
            {slideList.map((slide, i) => (
                <Slide refA={inwidth} refB={margin} key={slide + i} content={slide}/>
            ))}
        </SliderContent>
    </div>
}

export default SliderContainer;