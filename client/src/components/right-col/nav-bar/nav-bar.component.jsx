import React from 'react';

import question from '../../../assets/icons/question.svg'
import resume from '../../../assets/icons/resume.svg'
import magic from '../../../assets/icons/magic.svg'
import code from '../../../assets/icons/code.svg'
import home from '../../../assets/icons/home.svg'

import './nav-bar-styles.css'

export const NavBar = ({onButtonClick}) => {
    const handleClick = (e) => {
        // extremely janky way to account for clicks on different targets but it 
        // works and i'm too lazy to fix this rn
        if (e.target.id.includes('fun')) return onButtonClick('fun')
        if (e.target.id.includes('projects')) return onButtonClick('projects')
        if (e.target.id.includes('resume')) return onButtonClick('resume')
        if (e.target.id.includes('skills')) return onButtonClick('skills')
        if (e.target.id.includes('landing')) return onButtonClick('landing')
    }

    return (
        <nav className="nav">
                <NavButton viewName="landing page" id="landing" handleClick={handleClick} src={home} labelText="Home" />
                <NavButton viewName="projects" id="projects" handleClick={handleClick} src={magic} labelText="Projects" />
                <NavButton viewName="skills" id="skills" handleClick={handleClick} src={code} labelText="Skills" />
                <NavButton viewName="about me" id="fun" handleClick={handleClick} src={question} labelText="About Me" />
                <NavButton viewName="resume" id="resume" handleClick={handleClick} src={resume} labelText="Resume" />
        </nav>
    )

}

const NavButton = ({viewName, id, handleClick, src, labelText }) => (
    <button className="folder" aria-label={`view ${viewName}`} id={id} onClick={handleClick}>
        <img src={src} alt="" id={`${id}-icon`} className="dir-icon" />
        <p id={`${id}-text`}>{labelText}</p>
    </button>
)