import React from 'react';

export const Column = ({className, id, children}) => (
    <section className={className} id={id}>
        {children}
    </section>
)
