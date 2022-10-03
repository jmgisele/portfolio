import React from 'react';
import ArrowIcon from './../../../assets/icons/arrow.svg';

import './nav-arrow-styles.css';
import '../../../assets/pulse-anim.css'


export const NavArrow = () => (
    <a href="#col-right" tabIndex="-1"><img src={ArrowIcon} alt="" id="nav-arrow" className="pulse-anim" /></a>
)