import React, {useRef, useEffect} from 'react'
import './Home.css';
import Transition from './Transition';
import gsap from 'gsap';
function Home() {
    const home = gsap.timeline();
    const homeh1 = useRef(null);
    const homeh2 = useRef(null);
    const homeh3 = useRef(null);
    const homeimg = useRef(null);
    useEffect(() => {
        home.from(homeh1.current, {
            duration: .6,
            skewX: 10,
            x: -400,
            opacity: 0
        },"-=3.5")
        home.from(homeh2.current, {
            duration: .6,
            skewX: 10,
            x: -400,
            opacity: 0,
        },"-=3")
        home.from(homeh3.current, {
            duration: .6,
            skewX: 10,
            x: -400,
            opacity: 0,
        },"-=2.8")
        home.from(homeimg.current, {
            duration: .3,
            y: -200,
            opacity: 0
        },"-=3")
    })
    return (
        <div>
        <Transition timeline={home}/>
            <div className="home-image home-overlay" ref={homeimg}></div>
            <div className="container-home">
                <h2 ref={homeh1}>Hi</h2>
                <h1 ref={homeh2}>I'm Stevan</h1>
                <h3 ref={homeh3}>web developer.</h3>
            </div>
        </div>
    )
}

export default Home
