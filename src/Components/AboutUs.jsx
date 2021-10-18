import * as React from 'react';
import leader1 from '../images/leader1.png';
import '../Components.css';

import ScrollAnimation from 'react-animate-on-scroll';

export default function AboutUs() {
    return (
        <div>
            <section id="aboutus">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 floatinglogo mb-lg-0 mb-5">
                            <ScrollAnimation animateIn="fadeInLeft" className="mb-lg-5">
                                <img src={leader1} width="60%"></img>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-6">
                            <ScrollAnimation animateIn="fadeInRight" className="mb-lg-5">
                                <h1 className="text_circle2">About Us</h1>
                                <div className="circle mx-auto">
                                    <h1 className="text_circle">About Us</h1>
                                </div>
                            </ScrollAnimation>
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