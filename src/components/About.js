import React, { useEffect, useRef } from 'react'
import './About.css'
import Transition from './Transition'
import gsap from 'gsap';
function About() {
    const about = gsap.timeline();
    const abouth1 = useRef(null);
    const abouth2 = useRef(null);
    const abouth3 = useRef(null);
    const aboutimg = useRef(null);
    useEffect(() => {
        about.from(abouth1.current, {
            duration: .8,
            skewX: 10,
            x: -400,
            opacity: 0
        },"-=2")
        about.from(abouth2.current, {
            duration: .7,
            skewX: 10,
            x: -400,
            opacity: 0
        },"-=2.3")
        about.from(abouth3.current, {
            duration: .6,
            skewX: 10,
            x: -400,
            opacity: 0
        },"-=2.8")
        about.from(aboutimg.current, {
            duration: .7,
            y: -200,
            opacity: 0
        },"-=2")
    })
    return (
        <div>
        <Transition timeline={about}/>
            <div className="about-image about-overlay" ref={aboutimg}></div>
            <div className="container-about">
                <p className="paragraph1" ref={abouth1}>I'm a 22 year-old front-end Web Developer <br/>from <span>Serbia.</span><br/> I have a passion for creating fast loading, dynamic, and responsive websites using the latest technologies available.</p>
                <div className="paragraph-flex">
                <p className="paragraph2" ref={abouth2}>Technologies & Tools that I use:</p>
                <p className="paragraph3" ref={abouth3}>HTML5 CSS3 React JavaScript</p>
                </div>
            </div>
        </div>
    )
}

export default About
