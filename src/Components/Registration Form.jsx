import * as React from "react";

import Grid from "@material-ui/core/Grid";

import "../Components.css";
import card from "../images/card.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export default function Registration() {
  return (
    <div>
      <section id="regsform">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <ScrollAnimation animateIn="fadeInDown">
              <h1 className="text-center mb-lg-5 mb-md-5 mb-4">Registration Form</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft">
              <div className="justify-content-center align-items-center">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdPMQ-KiaUjtAFYN3mL4RMvhJBJWE0y-3DkhhcVzNLQOzcjkw/viewform?embedded=true"
                  width="100%"
                  height="1600"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="-2%"
                >
                  Loading…
                </iframe>
              </div>
            </ScrollAnimation>
          </div>
         
        </div>
      </section>
    </div>
  );
}
