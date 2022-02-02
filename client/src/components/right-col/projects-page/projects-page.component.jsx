import React from 'react'
import { NavAnimation } from '../nav-animation/nav-animation.component';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards"

import './projects-page-styles.css'

import campPic from '../../../assets/generic.jpeg'
import todoPic from '../../../assets/desktop.png'


// import Swiper core and required modules
import SwiperCore, {
    EffectCards
} from 'swiper';
import { ColorfulBackground } from '../colorful-background/colorful-background.component';

// install Swiper modules
SwiperCore.use([EffectCards]);

const ProjectCard = (props) => {
    const { link, title, pic, imgAltText, toolsUsed, codeLink,
        projectDescription, knownBugs } = props;
    return (
        <article className="project-card">
            <img src={pic} alt={imgAltText}></img>
            <a href={link} className="project-title" target="_blank" rel="noreferrer">{title}</a>
            <div className="tools-box">
                <h3 className="tools-content">Languages + Tools Used</h3>
                <div>{toolsUsed.map((tool) => <span className="tools-tag">{tool}</span>)}</div>
            </div>
            <a href={codeLink} className="code-link" target="_blank" rel="noreferrer">Github Link</a>
            <div className="inner-content">
                <h3>Project Description</h3>
                <p>{projectDescription}</p>
                <h4>Future Development & Known Bugs</h4>
                <p>{knownBugs}</p>
            </div>
        </article>
    )
}

export const ProjectsPage = () => (
    <NavAnimation id="flex-projects-container">
        <ColorfulBackground>
            <Swiper navigation={true} modules={[Navigation]} className="swiper-container">
                <SwiperSlide>
                    <ProjectCard
                        link="https://fast-meadow-29979.herokuapp.com/campgrounds"
                        title="YelpCamp"
                        pic={campPic}
                        imgAltText="campground at night, as seen in YelpCamp portfolio project"
                        toolsUsed={['Node.js', 'MongoDB', 'Express', 'Bootstrap', 'Vanilla JS', 'EJS', 'Cloudfare', 'Mapbox']}
                        codeLink="https://github.com/jmgisele/YelpCamp"
                        projectDescription={<div>A crowd-sourcing campsite review board mock-up completed as part of a
                            <a href="https://www.udemy.com/course/the-web-developer-bootcamp/">
                                Udemy full-stack course</a>.
                            Implements full CRUD, authentication/authorization, basic sanitation of user inputs, and more. I
                            also implemented custom error-handling and both client- and server-side validation to make sure
                            nobody was uploading 1000s of images to my free cloudfare account. . . .</div>}
                        knownBugs="An edit option for comments would be very easy to add. The main page loads all campsites at once, which isn't the 
                            best visual experience; I might add in lazy loading at some point. I'd also love to add a more robust user panel
                            where users can see all the campsites they've added, and perhaps a favoriting feature for users to collect others' campsites."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectCard
                        link="https://jmgisele.github.io/todo-app-main/"
                        title="Todo App"
                        pic={todoPic}
                        imgAltText="screenshot of todo app interface"
                        toolsUsed={['IndexedDB', 'Vanilla JS']}
                        codeLink="https://github.com/jmgisele/todo-app-main"
                        projectDescription={<div>A basic Front End Mentors challenge I completed. I decided
                            to add persistent storage to store the todos for an extra challenge.
                            Storage is handled client-side using IndexedDB. I assumed
                            working with IDB would be quicker than setting up a full back end and hosting it,
                            but working with IDB is a bit of a pain. If I were remaking this project, I'd probably
                            just whip up a quick Node/Express/Mongo backend with session that refreshed after a
                            week or so and cleared their data from the database. That way users wouldn't have to
                            log in, could still have semi-persistent storage using session, and the DB wouldn't be
                            cluttered with old unused entries.</div>}
                        knownBugs="Order of the todos doesn't persist on re-load. This could be implemented using a property on
                            the IDB entry for each todo that kept track of its place in the page, maybe using on-drop
                            handlers thru Sortablejs."
                    />
                </SwiperSlide>
            </Swiper>
        </ColorfulBackground>
    </NavAnimation>

)