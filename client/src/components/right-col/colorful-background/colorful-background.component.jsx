import React from 'react';

import './colorful-background-styles.css'

export const ColorfulBackground = ({id, children}) => (
    <div id={id} className="colorful-background">
        {children}
    </div>
)