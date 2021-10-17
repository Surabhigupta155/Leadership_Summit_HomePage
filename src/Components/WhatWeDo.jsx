import * as React from 'react';

import '../Components.css';
import card from '../images/card.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import Grid from "@material-ui/core/Grid";
export default function WhatWeDo() {
  return (
    <div>
      <section id="whatwedo">
        <div className="design1"></div>
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
              <ScrollAnimation animateIn="fadeInLeft">
                <img className="mb-lg-0 mb-4" src={card} alt="" />
              </ScrollAnimation>
            </div>
            <div className="col-lg-6">
              <ScrollAnimation animateIn="fadeInRight">
                <h1 className="text-center mb-lg-4 mb-md-4 mb-3">What We Do</h1>
                <p>Leadership conclave 2021 is a novel initiative by IIT Jammu which aims at bringing together some of the most illuminated thinkers and idea smiths across the nation to discuss and find the way forward towards the resolution of major modern-day problems faced by the global community. All the conclusions made in this two-day conclave will be carried forward by the participating leaders in such a way that they can bring about a revolution in the near future.
 </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}