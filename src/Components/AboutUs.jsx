import * as React from 'react';

import '../Components.css';

import ScrollAnimation from 'react-animate-on-scroll';

export default function AboutUs() {
    return (
        <div>
              <section id="aboutus">
                    <div className="container-fluid">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6">
                                <ScrollAnimation animateIn="fadeInLeft">
                                    <h1 className="text-center">About Us</h1>
                                    <div class="circle">
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-6">
                                <ScrollAnimation animateIn="fadeInRight">
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </section>
          
        </div>
    )
}