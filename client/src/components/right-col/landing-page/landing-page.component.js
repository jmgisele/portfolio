import React from 'react';

import './landing-page-styles.css'

import { NavAnimation } from '../nav-animation/nav-animation.component';
import { ColorfulBackground } from '../colorful-background/colorful-background.component';

export const LandingPage = (props) => (
    <NavAnimation>
        <ColorfulBackground id="contain-landing">
            <div id="bkg-circle">
                <p id="circle-text">
                    Hi there! I'm a software developer currently based in Philadelphia, PA. I'm self-taught,
                    and delight in learning new things. I value maintainability, accessibility,
                    and cleanliness in my work (and hopefully so do you!)
                    <br></br><br></br>
                    I primarily code in JavaScript/TypeScript and Python. I've done work on React, Node/Express, and Django
                    apps, and am always looking forward to picking up new tools and trying something new. I enjoy work on both the front and back-end.
                    <br></br><br></br>
                    I'm currently looking for work! Click around to learn more about my skillset and get in touch.
                </p>
            </div>
        </ColorfulBackground>
    </NavAnimation>
)
