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
                                <h1 className="text_circle2">About Us</h1>
                                    <div className="circle">
                                    <h1 className="text_circle">About Us</h1>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-6">
                                <ScrollAnimation animateIn="fadeInRight">
                                   <p>
                                   Leadership conclave 2021 is a novel initiative by IIT Jammu which aims at bringing together some of the most illuminated thinkers and idea smiths across the nation to discuss and find the way forward towards the resolution of major modern-day problems faced by the global community. 
                                   All the conclusions made in this two-day conclave will be carried forward by the participating leaders in such a way that they can bring about a revolution in the near future.
                                   </p>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </section>
          
        </div>
    )
}