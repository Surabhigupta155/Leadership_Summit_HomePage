import * as React from 'react';

import '../Components.css';

// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax, Background } from "react-parallax";
import image2 from '../images/iit.jpg'

const insideStyles = {
  display: 'box',
  textAlign: 'center',
  background: 'rgb(0,0,0,0.3)',
  padding: 5,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

export default function AboutIIT() {
  return (
    <div>
      <section id="aboutiit" >
        {/* <div className="container-fluid"> */}
        {/* <div className="row justify-content-center align-items-center"> */}
        <Parallax bgImage={image2} strength={-100} >
          <div style={{ height: 850, textAlign: 'center' }}>
            <div style={insideStyles}>
              <h1 style={{ color: 'white' }}>About IIT Jammu</h1>
              <br />
              <p style={{ color: 'white' }}> IIT Jammu, adored by alluring mountains and topography, is where various engineering departments run under the supervision of brilliantly literate faculty and professors, provide education to one of the brightest minds of India and also provides employment to well-informed staff.
                IIT Jammu has a futuristic, farsighted, and ambitious agenda while it is firmly rooted with ground realities as it is looking forward to creating leaders with entrepreneurial skills.

                The institute encourages the spirit of inquiry and trains us to be future leaders.
                The students here are taught to be concerned with social and national issues of importance and always be more creative and innovative.
              </p>
            </div>
          </div>
        </Parallax>

      </section>

    </div>
  )
}