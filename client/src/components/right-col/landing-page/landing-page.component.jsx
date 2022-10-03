import React from 'react';

import { NavAnimation } from '../nav-animation/nav-animation.component';
import { ColorfulBackground } from '../colorful-background/colorful-background.component';

import './landing-page-styles.css'

export const LandingPage = () => (
    <NavAnimation>
        <ColorfulBackground id="contain-landing">
            <div id="bkg-circle">
                <p id="circle-text">
                    I'm a software developer currently based in Philadelphia, PA. I'm self-taught,
                    and delight in delving into something new! I value maintainability, accessibility,
                    and cleanliness in my work (and hopefully so do you!)
                    <br></br><br></br>
                    I primarily code in JavaScript/TypeScript and Python. I've previously done work on React/Next, Node, and Flask
                    apps, as well as providing support for a range of legacy apps. I enjoy work on both the front and back-end. 
                    I pride myself on being an excellent communicator
                    and love to work collaboratively and generously across skillsets and backgrounds.
                    <br></br><br></br>
                    I'm currently looking for work! Click around to learn more about my skillset and get in touch.
                </p>
            </div>
        </ColorfulBackground>
    </NavAnimation>
)
