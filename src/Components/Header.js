import React from 'react';
import PropTypes from 'prop-types';
import SectionHome from './LandingPage';
import AboutUs from './AboutUs';
import Theme from './Theme';
import Team from './Team';
import RegisterForm from './Register'
import leader1 from '../images/leader1.png';
import { NavLink } from 'react-router-dom'
import '../Components.css';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
    const [colorChange, setColorchange] = React.useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 700) {
            setColorchange(true);
        }
        else {

            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <div>
            <nav className={colorChange ? 'navbar colorChange navbar-expand-lg navbar-light fixed-top px-md-5' : 'navbar navbar-expand-lg navbar-light fixed-top px-md-5'}>
                <div className="container-fluid py-0 px-lg-0 px-md-0 px-3">
                    <a className="navbar-brand" href="/"><img src={leader1} width="80px" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="mx-lg-3 my-lg-0 my-3">
                                <a href="/" className="nav-item">Home</a>
                            </li>
                            <li className="mx-lg-4 my-lg-0 my-3">
                                <Link activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-71} role="button" to="aboutus" className="nav-item">About</Link>
                            </li>
                            <li className="mx-lg-3 my-lg-0 my-3">
                                <Link activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-101} role="button" to="theme" className="nav-item">Theme</Link>
                            </li>
                            <li className="mx-lg-3 my-lg-0 my-3">
                                <Link activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-100} role="button" to="registrationform" className="nav-item">Registration</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
