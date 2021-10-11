import * as React from 'react';

import '../Components.css';

import ScrollAnimation from 'react-animate-on-scroll';

export default function FAQ() {
    return (
        <div>
            
               <section id="FAQ">
                    <div className="container-fluid">
                        <div className="row justify-content-center align-items-center">
                            <ScrollAnimation animateIn="fadeInDown">
                                <h1 className="text-center mb-lg-5 mb-md-5 mb-4">Frequently Answered Questions</h1>
                            </ScrollAnimation>
                            <div className="flex justify-content-center align-items-center mx-0">
                                <div className="mb-4">
                                    <ScrollAnimation animateIn="fadeInLeft">
                                        <p className="mb-2">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <p>Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </ScrollAnimation>
                                </div>
                                <div className="mb-4">
                                    <ScrollAnimation animateIn="fadeInRight">
                                        <p className="mb-2">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <p>Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        
                                    </ScrollAnimation>
                                </div>
                                <div className="mb-4">
                                    <ScrollAnimation animateIn="fadeInLeft">
                                        <p className="mb-2">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <p>Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </ScrollAnimation>
                                </div>
                                <div>
                                    <ScrollAnimation animateIn="fadeInRight">
                                    <p className="mb-2">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <p>Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
    )
}