import React from 'react'
import { NavAnimation } from '../nav-animation/nav-animation.component';

import './skills-page-styles.css'

const SkillItems = (props) => {
    const list = props.items.map((item, i) => <li key={i}>{item}</li>)
    return list;
}


const SkillCard = (props) => (
    <div className="skill-card">
        <h6>{props.title}</h6>
        <ul>
            <SkillItems items={props.items} />
        </ul>
    </div>
)


export const SkillsPage = () => (
    <NavAnimation id="skills-nav-container">
        <div id="skills-title-box">
            <h1 id="skills-title">Languages, Skills, Tools, Frameworks</h1>
            <h5 id="skills-subtitle">Don't see your stack? I'm always looking to pick up something new....</h5>
        </div>
        <section id="flex-skills-container">
            <SkillCard title="Libraries & Frameworks" items={['React', 'Django', 'Sass/SCSS', 'Framer Motion', 'Bootstrap']} />
            <SkillCard title="Back-End & Databases" items={['Node.js', 'Express', 'AJAX & APIs', 'RESTful routing', 'EJS']} />
            <SkillCard title="Misc Tools/Languages" items={['Git/Github', 'NPM', 'Python 3', 'Linux/Bash', 'Postman']} />
            <SkillCard title="Web Fundamentals" items={['Semantic & Accessible HTML5', 'CSS3', 'Javascript (ES6)']} />
        </section>
    </NavAnimation>
)