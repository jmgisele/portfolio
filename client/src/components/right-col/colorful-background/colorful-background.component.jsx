import React from 'react';

import './colorful-background-styles.css'


export const ColorfulBackground = (props) => (
    <div id={props.id} className="colorful-background">
        {props.children}
    </div>
)