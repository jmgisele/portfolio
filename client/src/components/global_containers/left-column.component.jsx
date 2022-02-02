import React from 'react';
import ReactTooltip from 'react-tooltip';

import './left-column-styles.css'

import { Headshot } from '../left-col/headshot/headshot.component'
import { ExternalIcons } from '../left-col/external-icons/external-icons.component';
import { NavArrow } from '../left-col/nav-arrow/nav-arrow.component'

import { motion } from "framer-motion";



export const LeftColumn = (props) => (
    <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="left-col-container"
    >
        <Headshot />
        <h1>james may gisele</h1>
        <h2>software developer</h2>
        <p>self-taught dev with a focus on front-end</p>
        <ExternalIcons />
        <p id="how"
            data-tip
            data-event='mouseenter touchstart focus focusin'
            data-event-off='mouseleave touchmove blur focusout'
            data-for="how-tooltip"
            width="30" height="30"
            tabIndex="0"
        >
            how'd you make this website?
        </p>
        <ReactTooltip className='tooltip' place="top" id="how-tooltip" effect="solid" textColor='#000000' backgroundColor='#eb9dc1'>
            <p id="how-tooltip-text">This website was made with a React front-end and a Node/Express back-end.
            </p>
        </ReactTooltip>
        <NavArrow />
    </motion.div>
)
