import React, { useEffect, useRef } from 'react'
import './Contact.css'
import gsap from 'gsap';
import Transition from './Transition';
function Contact() {
    const contact = gsap.timeline();
    const contacth1 = useRef(null);
    const contacth2 = useRef(null);
    const contactimg = useRef(null);
    useEffect(() => {
        contact.from(contacth1.current, {
            duration: .9,
            skewX: 10,
            x: -400,
            opacity: 0
        },"-=2.5")
        contact.from(contacth2.current, {
            duration: .9,
            skewX: 10,
            x: -400,
            opacity: 0
        },"-=2")
        contact.from(contactimg.current, {
            duration: .7,
            y: -200,
            opacity: 0
        },"-=2")
    })
    return (
        <div>
        <Transition timeline={contact} />
            <div className="contact-image contact-overlay" ref={contactimg}></div>
            <div className="container-contact">
                <h1 ref={contacth1}>Contact me via email</h1>
                <h2 ref={contacth2}>stevan.code@gmail.com</h2>
            </div>
        </div>
    )
}

export default Contact
