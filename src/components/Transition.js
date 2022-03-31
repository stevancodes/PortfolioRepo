import React, {useRef, useEffect} from 'react'
import './Transition.css'
import {Power4} from 'gsap'
function Transition({timeline}) {
    const trans = useRef(null);
    useEffect(() => {
        timeline.to(trans.current, {
            duration: 3.5,
            x: 2000,
            ease: Power4.easeInOut
        });
    })
    return (
        <div>
           <div className="transition-effect" ref={trans}></div> 
        </div>
    )
}

export default Transition
