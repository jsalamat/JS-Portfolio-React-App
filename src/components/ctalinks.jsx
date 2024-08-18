import React from 'react'

import bgTypingVid from '../video/bg-typing-vid.mp4';
import githubIcon from '../images/icon/icon-github.svg';
import linkedinIcon from '../images/icon/icon-linkedin.svg';
import mailIcon from '../images/icon/icon-mail.svg';
import '../assets/css/ctalinks.css';
const Ctalinks = () => {
  return (
  <div className="v-header" id="contact">

    <div className="video-container">

        <video video="true" autoPlay muted loop playsInline>
            <source src={bgTypingVid} type="video/mp4" />
        </video>

        <div className="header-overlay">
          <div className="header-content">
                <h2 className="title-cta">Contact Me</h2>
                <div>
                  <a className="btn circle-link" href="https://www.linkedin.com/in/jonsalamat/" target="_blank"><img src={linkedinIcon} alt="LinkedIn" /></a>
                  <a className="btn circle-link gitlink" href="https://github.com/jsalamat" target="_blank"><img src={githubIcon} alt="Github" /></a>
                  {/* <a className="btn circle-link" href="mailto:someone@yoursite.com"><img src={mailIcon} alt="Email" /></a> */}
                  <a className="btn circle-link" href="#"><img src={mailIcon} alt="Email" /></a>
                </div>
            </div>
        </div>

    </div>
  </div>
  )
};

export default Ctalinks