import * as React from 'react';

import '../Components.css';
import card from '../images/card.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import Grid from "@material-ui/core/Grid";
export default function WhatWeDo() {
  return (
    <div>
      <section id="whatwedo">
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}