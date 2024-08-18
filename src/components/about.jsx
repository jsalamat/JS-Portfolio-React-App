import React from 'react';
import '../assets/css/about.css';


const Aboutus  = () => {
    return (
    <section className="flex container" id="about">
        <div className="w-1/2 about-img-container">
        <div className="about-img-border shape-2">
            <div className="about-img shape">
            </div>
        </div>

        </div>
        <div className="w-1/2">
            <div className="about-content">
                <h2 className="title-about">About Jon</h2>
                <p className="decs-about">Jon is a skilled Front-End Developer with 4+ years of experience, specializing in creating engaging user experiences. He excels in website development, feature optimization, and debugging, and is proficient in WordPress, HTML, PHP, CSS, and JavaScript. With a background in Graphic and Web Design, Jon brings a creative edge to his work. He&#x27;s passionate about delivering top-tier digital experiences and is excited to contribute his expertise to new projects and challenges. Let&#x27;s work together to bring your vision to life.</p>
                <p className="decs-about">Let create something fun together</p>
            </div>
        </div>
    </section>
    );
};

export default Aboutus;