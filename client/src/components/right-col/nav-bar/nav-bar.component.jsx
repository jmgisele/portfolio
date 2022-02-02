import React from 'react';

import './nav-bar-styles.css'

import question from '../../../assets/icons/question.svg'
import resume from '../../../assets/icons/resume.svg'
import magic from '../../../assets/icons/magic.svg'
import code from '../../../assets/icons/code.svg'
import home from '../../../assets/icons/home.svg'



export class NavBar extends React.Component {
    handleClick = (e) => {
        if (e.target.id.includes('fun')) return this.props.onButtonClick('fun')
        if (e.target.id.includes('projects')) return this.props.onButtonClick('projects')
        if (e.target.id.includes('resume')) return this.props.onButtonClick('resume')
        if (e.target.id.includes('skills')) return this.props.onButtonClick('skills')
        if (e.target.id.includes('landing')) return this.props.onButtonClick('landing')
    }

    render() {
        return (
            <nav className="nav">
                <button className="folder" aria-label="view landing page" id="landing" onClick={this.handleClick}>
                    <img src={home} alt="" id="landing-icon" className="dir-icon" />
                    <p id="landing-text">Home</p>
                </button>
                <button className="folder" aria-label="view projects" id="projects" onClick={this.handleClick}>
                    <img src={magic} alt="" id="projects-icon" className="dir-icon" />
                    <p id="projects-text">Projects</p>
                </button>
                <button className="folder" aria-label="view skills" id="skills" onClick={this.handleClick}>
                    <img src={code} alt="" className="dir-icon" id="skills-icon" />
                    <p id="skills-text">Skills</p>
                </button>
                <button className="folder" aria-label="view about me" id="fun" onClick={this.handleClick}>
                    <img src={question} alt="" id="fun-icon" className="dir-icon" />
                    <p id="fun-text">About Me</p>
                </button>
                <button className="folder" aria-label="view resume" id="resume" onClick={this.handleClick}>
                    <img src={resume} alt="" id="resume-icon" className="dir-icon" />
                    <p id="resume-text">Resume</p>
                </button>
            </nav>
        )
    }
}