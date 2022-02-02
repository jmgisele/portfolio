import React from 'react';
import './nav-arrow-styles.css';
import '../../../assets/pulse-anim.css'
import ArrowIcon from './../../../assets/icons/arrow.svg';

export const NavArrow = (props) => (
    <a href="#col-right" tabIndex="-1"><img src={ArrowIcon} alt="" id="nav-arrow" className="pulse-anim" /></a>
)