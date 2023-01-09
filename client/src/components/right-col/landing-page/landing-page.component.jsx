import React from "react";

import { NavAnimation } from "../nav-animation/nav-animation.component";
import { ColorfulBackground } from "../colorful-background/colorful-background.component";

import "./landing-page-styles.css";

export const LandingPage = () => (
  <NavAnimation>
    <ColorfulBackground id="contain-landing">
      <div id="bkg-circle">
        <p id="circle-text">
          I'm a software developer currently based in Philadelphia, PA. I value
          maintainability, accessibility, and cleanliness in my work (and
          hopefully so do you!).{" "}
          <b>
            This site is a bit out of date! If you want to know what I'm up to
            right now, head on over to{" "}
            <a href="https://blog.jamesgisele.com">blog.jamesgisele.com</a>. But
            feel free to take a look around here to see what I was doing as a
            wee baby dev. . .
          </b>
          <br />
          <br />
          My professional work thus far has been in full stack web development.
          I've worked on React/Next, Node, Svelte, and Flask apps, as well as
          providing support for a range of legacy web applications. I pride
          myself on being an excellent communicator and love to work
          collaboratively and generously across skillsets and backgrounds.
          <br></br>
          <br></br>
          I'm currently looking for work! Click around to learn more about my
          skillset and get in touch.
        </p>
      </div>
    </ColorfulBackground>
  </NavAnimation>
);
