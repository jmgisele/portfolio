import React from 'react'
import { NavAnimation } from '../nav-animation/nav-animation.component';

import './skills-page-styles.css'

const SkillItems = ({items}) => {
    const list = items.map((item, i) => <li key={i}>{item}</li>)
    return list;
}


const SkillCard = ({title, items}) => (
    <div className="skill-card">
        <h6>{title}</h6>
        <ul>
            <SkillItems items={items} />
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
            <SkillCard title="Langauages, Frameworks, Libraries" items={['React/Next.js', 'Flask', 'Django', 'Node', 'TypeScript', '(legacy) ColdFusion', '(legacy) jQuery' ]} />
            <SkillCard title="Styling" items={['SCSS', 'Bootstrap', 'MUI/Chakra', 'Figma']} />
            <SkillCard title="Databases" items={['SQL Server', 'Postgres', 'MongoDB']} />
            <SkillCard title="Tools, Testing, Etc" items={['CI/CD', 'Agile', 'Linux/Bash', 'Jest/Enzyme', 'React Testing Library', 'RESTful API design' ]} />
        </section>
    </NavAnimation>
)