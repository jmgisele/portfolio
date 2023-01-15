import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import { NavAnimation } from "../nav-animation/nav-animation.component";
import { ColorfulBackground } from "../colorful-background/colorful-background.component";

import campPic from "../../../assets/generic.avif";
import todoPic from "../../../assets/desktop.avif";
import "./projects-page-styles.css";

// Swiper modules
SwiperCore.use([EffectCards]);

const ProjectCard = ({
  link,
  title,
  pic,
  imgAltText,
  toolsUsed,
  codeLink,
  projectDescription,
  knownBugs,
}) => (
  <article className="project-card">
    <img src={pic} alt={imgAltText} loading="lazy"></img>
    <a href={link} className="project-title" target="_blank" rel="noreferrer">
      {title}
    </a>
    <div className="tools-box">
      <h3 className="tools-content">Languages + Tools Used</h3>
      <div>
        {toolsUsed.map((tool) => (
          <span className="tools-tag">{tool}</span>
        ))}
      </div>
    </div>
    <a href={codeLink} className="code-link" target="_blank" rel="noreferrer">
      Github Link
    </a>
    <div className="inner-content">
      <h3>Project Description</h3>
      {projectDescription}
      <h4>Future Development & Known Bugs</h4>
      {knownBugs}
    </div>
  </article>
);

export const ProjectsPage = () => (
  <NavAnimation id="flex-projects-container">
    <ColorfulBackground>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="swiper-container"
      >
        <SwiperSlide>
          <ProjectCard
            link="https://yelpcamp-jamesgisele.fly.dev/"
            title="YelpCamp"
            pic={campPic}
            imgAltText="campground at night, as seen in YelpCamp portfolio project"
            toolsUsed={[
              "Node.js",
              "MongoDB",
              "Express",
              "Bootstrap",
              "Vanilla JS",
              "EJS",
              "Cloudfare",
              "Mapbox",
            ]}
            codeLink="https://github.com/jmgisele/YelpCamp"
            projectDescription={
              <p>
                Baby's first CRUD app! I completed this crowd-sourcing campsite
                review board mock-up as part of a{" "}
                <span>
                  <a href="https://www.udemy.com/course/the-web-developer-bootcamp/">
                    Udemy full-stack course
                  </a>
                </span>
                , in order to learn the basics of full stack web. Implements
                full CRUD, authentication/authorization, basic sanitation of
                user inputs, etc. I also added on custom error-handling and both
                client- and server-side validation to make sure nobody was
                uploading 1000s of images to my free cloudfare account. . . .
              </p>
            }
            knownBugs={
              <p>
                An edit option for comments would be very easy to add. The main
                page loads all campsites at once, which isn't the best visual
                experience; lazy loading would be better. It's unlikely I'll
                ever touch this project again; it was an excellent way to learn
                the basics but isn't the most exciting app.
              </p>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            link="https://jmgisele.github.io/todo-app-main/"
            title="Todo App"
            pic={todoPic}
            imgAltText="screenshot of todo app interface"
            toolsUsed={["IndexedDB", "Vanilla JS"]}
            codeLink="https://github.com/jmgisele/todo-app-main"
            projectDescription={
              <p>
                The obligatory web dev todo app. I decided to add persistent
                storage to store the todos for an extra challenge. Storage is
                handled client-side using IndexedDB. I assumed working with IDB
                would be quicker than setting up a full back end and hosting it,
                but working with IDB is a bit of a pain. If I were remaking this
                project, I'd probably just whip up a quick Node/Express/Mongo
                backend with session that refreshed after a week or so and
                cleared their data from the database; users wouldn't have to log
                in, could still have semi-persistent storage using session, and
                the DB wouldn't be cluttered with old unused entries.
              </p>
            }
            knownBugs={
              <p>
                Order of the todos doesn't persist on re-load. This could be
                implemented using a property on the IDB entry for each todo that
                kept track of its place in the page, maybe using on-drop
                handlers thru Sortablejs.
              </p>
            }
          />
        </SwiperSlide>
      </Swiper>
    </ColorfulBackground>
  </NavAnimation>
);
