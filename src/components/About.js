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
            duration: .6,
            skewX: 10,
            x: -400,
            opacity: 0
        },"-=3.5")
        about.from(abouth2.current, {
            duration: .6,
            skewX: 10,
            x: -400,
            opacity: 0
        },"-=3")
        about.from(abouth3.current, {
            duration: .6,
            skewX: 10,
            x: -400,
            opacity: 0
        },"-=2.8")
        about.from(aboutimg.current, {
            duration: .5,
            y: -200,
            opacity: 0
        },"-=3")
    })
    return (
        <div>
        <Transition timeline={about}/>
            <div className="about-image about-overlay" ref={aboutimg}></div>
            <div className="container-about">
                <p className="paragraph1" ref={abouth1}>I'm a 22 year-old front-end Web Developer <br/>from <span>Serbia.</span><br/> I have a passion for creating fast loading, dynamic, and responsive websites using the latest technologies available.</p>
                <div className="paragraph-flex" ref={abouth2}>
                <p className="paragraph2">Technologies & Tools that I use:</p>
                <p className="paragraph3">HTML5 CSS3 React JavaScript</p>
                </div>
            </div>
        </div>
    )
}

export default About
