import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip'


import './external-icon-styles.css'

import githubIcon from '../../../assets/icons/github.svg'
import linkedinIcon from '../../../assets/icons/linkedin.svg'
import phone from '../../../assets/icons/phone.svg'
import email from '../../../assets/icons/email.svg'
import clipboard from '../../../assets/icons/clipboard.svg'
import clipboardCheck from '../../../assets/icons/clipboard-check.svg'

const Email = (props) => (
    <p id="email-tooltip" className="tooltip">james.may.gisele@protonmail.com <br></br> {props.text} <span><img alt="" src={props.clip}></img></span></p>
)

const Phone = (props) => (
    <p id="phone-tooltip" className="tooltip">503-708-4217 <br></br> {props.text} <span><img alt="" src={props.clip}></img></span></p>
)


export const ExternalIcons = (props) => {
    const [emailText, setEmailText] = useState(<Email clip={clipboard} text="double click!" />);
    const [phoneText, setPhoneText] = useState(<Phone clip={clipboard} text="double click!" />)

    const clicked = (e, text, target) => {
        switch (e.detail) {
            case 1:
                break;
            case 2:
                if (target === 'phone') {
                    setPhoneText(<Phone clip={clipboardCheck} text="" />)
                } else {
                    setEmailText(<Email clip={clipboardCheck} text="" />)
                }
                navigator.clipboard.writeText(text)
                break;
            default:
                return;
        }
    }

    let tappedTwice = false;

    const touched = (e, text, target) => {
        if (!tappedTwice) {
            tappedTwice = true;
            setTimeout(function () { tappedTwice = false; }, 300);
            return false;
        }
        if (target === 'phone') {
            setPhoneText(<Phone clip={clipboardCheck} text="" />)
        } else {
            setEmailText(<Email clip={clipboardCheck} text="" />)
        }
        navigator.clipboard.writeText(text)
    }


    return (
        <>
            <div id="flexbox-icons">
                <a href="https://github.com/jmgisele/" target="_blank" rel="noreferrer" className="external-links"><img
                    src={githubIcon} alt="" width="30" height="30" /></a>
                <a href="https://www.linkedin.com/in/james-gisele-00177a217" target="_blank" rel="noreferrer"
                    className="external-links"><img src={linkedinIcon} alt="" width="30"
                        height="30" /></a>
                <button className="external-links" id="email-button" tabIndex="-1">
                    <img src={email} alt="my email - james.may.gisele@protonmail.com"
                        data-tip
                        data-event='mouseenter touchstart focus focusin'
                        data-event-off='mouseleave touchmove blur focusout'
                        data-for="email-tooltip"
                        width="30" height="30"
                        onTouchStartCapture={(e) => touched(e, "james.may.gisele@protonmail.com", 'email')}
                        onClick={(e) => clicked(e, "james.may.gisele@protonmail.com", 'email')}
                        onMouseOver={() => setEmailText(<Email clip={clipboard} text="double click!" />)}
                        tabIndex="0"
                    />
                </button>
                <ReactTooltip className="tooltip" place="top" id="email-tooltip" effect="solid" textColor='#000000' backgroundColor='#eb9dc1' getContent={() => emailText} />
                <button className="external-links" id="phone-button" tabIndex="-1">
                    <img src={phone} alt="phone number - 503-708-4217"
                        data-tip
                        data-event='mouseenter touchstart focus focusin'
                        data-event-off='mouseleave touchmove blur focusout'
                        data-for="phone-tooltip"
                        width="30" height="30"
                        onTouchStartCapture={(e) => touched(e, "503-708-4217", 'phone')}
                        onClick={(e) => clicked(e, "503-708-4217", 'phone')}
                        onMouseOver={() => setPhoneText(<Phone clip={clipboard} text="double click!" />)}
                        tabIndex="0"
                    />
                </button>
                <ReactTooltip className='tooltip' place="top" id="phone-tooltip" effect="solid" textColor='#000000' backgroundColor='#eb9dc1' getContent={() => phoneText} />
            </div>
        </>
    )
}