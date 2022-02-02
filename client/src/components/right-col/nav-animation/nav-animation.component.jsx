import React from 'react'
import { motion } from "framer-motion";

import './nav-animation-styles.css'


export const NavAnimation = (props) => (
    <motion.div
        initial={{ scaleY: 0, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        animate={{ scaleY: 1, scaleX: 1 }}
        exit={{ scaleY: 0, scaleX: 1 }}
        className="contain-nav"
        id={props.id}
    >
        {props.children}
    </motion.div>
)