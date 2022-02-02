import React, { Component } from 'react';
import { AnimatePresence } from "framer-motion";

import './right-column-styles.css'

import { NavBar } from '../right-col/nav-bar/nav-bar.component';
import { LandingPage } from '../right-col/landing-page/landing-page.component';
import { FunPage } from '../right-col/fun-facts-page/fun-facts-page.component';
import { ProjectsPage } from '../right-col/projects-page/projects-page.component';
import { ResumePage } from '../right-col/resume-page/resume-page.component';
import { SkillsPage } from '../right-col/skills-page/skills-page.component'


export class RightColumn extends Component {
        constructor(props) {
                super(props);
                this.state = { display: 'landing' };
        }

        handleViewToggle = (view) => {
                this.setState({ display: view })
        }

        render() {
                let displayPage;
                let directory = {
                        landing: <LandingPage key="landing" />,
                        fun: <FunPage key="fun" />,
                        skills: <SkillsPage key="skills" />,
                        projects: <ProjectsPage key="projects" />,
                        resume: <ResumePage key="resume" />

                }
                displayPage = directory[this.state.display]
                return (
                        <div id="full-container">
                                <NavBar onButtonClick={this.handleViewToggle} />
                                <div id="background">
                                        <AnimatePresence exitBeforeEnter initial={false}>
                                                {displayPage}
                                        </AnimatePresence>
                                </div>
                        </div>
                );
        }
}
