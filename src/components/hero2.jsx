import React from 'react'

const Hero2 = () => {
  return (
  <div className="v-header container">
    <div className="fullscreen-video-wrap">
       <iframe  src="https://www.youtube.com/embed/q5KWiXYVRlI?autoplay=1&amp;mute=1&amp;loop=1&amp;list=PLQuJOeT9OIOtv98DY3FIoP_NeXoqIo7e5" frameborder="0" allowfullscreen>
        </iframe>
    </div>

    <div className="header-overlay"></div>
   <div className="header-content">
      <h1>&lt;JSDesign&gt;</h1>
      <p className="line anim-typewriter">Imagine. Create. Innovate.</p>
      <a className="btn scroll" href="#about">Find Out More</a>
    </div>
  </div>
  )
};

export default Hero2