import React from 'react';

export const Column = (props) => (
    <section className={props.className} id={props.id}>
        {props.children}
    </section>
)
