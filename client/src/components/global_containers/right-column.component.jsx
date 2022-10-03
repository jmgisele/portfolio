import React, { useState } from 'react';
import { AnimatePresence } from "framer-motion";

import { NavBar } from '../right-col/nav-bar/nav-bar.component';
import { LandingPage } from '../right-col/landing-page/landing-page.component';
import { FunPage } from '../right-col/fun-facts-page/fun-facts-page.component';
import { ProjectsPage } from '../right-col/projects-page/projects-page.component';
import { ResumePage } from '../right-col/resume-page/resume-page.component';
import { SkillsPage } from '../right-col/skills-page/skills-page.component'

import './right-column-styles.css'

export const RightColumn = () => {
        const [state, setState] = useState({display: 'landing'});

        const handleViewToggle = (view) => setState({ display: view })

        let directory = {
                landing: <LandingPage key="landing" />,
                fun: <FunPage key="fun" />,
                skills: <SkillsPage key="skills" />,
                projects: <ProjectsPage key="projects" />,
                resume: <ResumePage key="resume" />

        }
        const displayPage = directory[state.display]

        return (
                 <div id="full-container">
                        <NavBar onButtonClick={handleViewToggle} />
                        <div id="background">
                                <AnimatePresence exitBeforeEnter initial={false}>
                                        {displayPage}
                                </AnimatePresence>
                        </div>
                </div>
        )
}