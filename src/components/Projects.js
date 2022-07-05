import React, { useEffect, useRef } from 'react'
import './Projects.css'
import gsap from 'gsap';
import Transition from './Transition';
function Projects() {
  const projects = gsap.timeline();
  const project1 = useRef(null);
  const project2 = useRef(null);
  const projectimg = useRef(null);
  useEffect(() => {
    projects.from(project1.current, {
      duration: .9,
      skewX: 10,
      x: -400,
      opacity: 0
    }, "-=1.5")
    projects.from(project2.current, {
      duration: .9,
      skewX: 10,
      x: -400,
      opacity: 0
    }, "-=2 ")
    projects.from(projectimg.current, {
      duration: .7,
      y: -200,
      opacity: 0
    }, "-=2")
  })
  return (
    <div className="Projects">
      <Transition timeline={projects} />
      <div className="project-image project-overlay" ref={projectimg}></div>
      <div className="container-project" ref={project1}>
        <a href="https://bitblog-puce.vercel.app/" rel="noreferrer"><div className="project"><p>Project One</p></div></a>
        <a href="https://tip-split-js.vercel.app/" rel="noreferrer"><div className="project"><p>Project Two</p></div></a>
        <a href="https://recipe-app-react-seven.vercel.app/" rel="noreferrer"><div className="project"><p>Project Three</p></div></a>
        <a href="https://rick-and-morty-js.vercel.app/" rel="noreferrer"><div className="project"><p>Project Four</p></div></a>
        <a href="https://tv-shows-react-app.vercel.app/" rel="noreferrer"><div className="project"><p>Project Five</p></div></a>
        <a href="https://gif-search-react.vercel.app/" rel="noreferrer"><div className="project"><p>Project Six</p></div></a>
      </div>
    </div>
  )
}

export default Projects
