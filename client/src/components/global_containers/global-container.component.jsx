import React from 'react';

import { LeftColumn } from '../../components/global_containers/left-column.component'
import { RightColumn } from '../../components/global_containers/right-column.component'
import { Column } from './column.component'

import './global-container-styles.css';

export const GlobalContainer = () => (
    <main className='App'>
        <div className="row">
            <Column id="col-left" className="col">
                <LeftColumn />
            </Column>
            <Column id="col-right" className="col">
                <RightColumn />
            </Column>
        </div>
    </main>
)