import React, { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from "react-pdf";

import { ColorfulBackground } from '../colorful-background/colorful-background.component';
import { NavAnimation } from '../nav-animation/nav-animation.component';
import { debounce } from '../../custom_utils/debounce';

import resumePdf from './../../../assets/James_Gisele_resume.pdf';
import './resume-page-styles.css'

//i do not use annotations but this fixes a dead space at bottom bug from react-pdf
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

//required for react-pdf to work - correct worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const PdfView = ({ pdf, containerClass, pageClass, height, width } ) => (
        <Document file={pdf} className={containerClass}>
            <Page pageNumber={1} className={pageClass} height={height} scale={1} width={width} />
        </Document>
);

export const ResumePage = () => {
    let containerWidth = () => document.querySelector('#background').offsetWidth;
    let resumeWidth = containerWidth() < 500 ? containerWidth() : 0.75 * containerWidth();
    let resumeHeight = 1.294 * resumeWidth; //correct ratio for a 8.5x11 pdf

    const [resumeDimensions, setResumeDimensions] = useState({
        resumeWidth,
        resumeHeight
    })

    // add an event listener to resize resume when window resizes
    useEffect(() => {
        // debounced so it doesn't impact performance--- only resizes every 150ms 
        const debouncedHandleResize = debounce(() => {
            setResumeDimensions({
                resumeWidth,
                resumeHeight
            })
        }, 150)
        window.addEventListener('resize', debouncedHandleResize)
        return () => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    })

    return (
        <NavAnimation >
            <ColorfulBackground id="resume-container" >
                <PdfView pdf={resumePdf} height={resumeDimensions.resumeHeight} width={resumeDimensions.resumeWidth} containerClass="pdf-container" pageClass="pdf-page" />
                <a href='/James_Gisele_resume.pdf' id="click-download-resume" download>(click to download)</a>
            </ColorfulBackground>
        </NavAnimation>
    );
}
