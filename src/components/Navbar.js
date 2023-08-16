// This component represents the "Navbar"

/* useContext - for Context API
useEffect - to call an important custom "locationUI" method when the component mounts
useRef - to create a reference
useState - to create a state variable for highlighting the current Navbar section position

React Router - to create links in the website
useLocation - to use the current URL location of the user
useNavigate - to redirect the user to the correct destination

scrollSpy - custom function that detects the current position on the webpage for highlighting the Navbar items
stopScrollContext - to stop scrolling when the user enables dark mode
locationUI - a custom method that intitially highlights the user position according to URL location and redirects the user to the correct section if the user directly wants to go there using URL.
darkModeFunc - a custom Navbar method to toggle dark mode of the website.

doDecoration - to decorate the correct point of the Navbar.
PropTypes - to validate the types of props
prominentContext - to get the scroll position of various components and mark them in Navbar for scrollSpy
Helmet - a useful React library to directly manage the head section of the Application */
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import scrollSpy from "../functions/scrollSpy";
import stopScrollContext from '../contexts/stopScrollContext';

import { locationUI, darkModeFunc, doDecoration } from '../functions/navbarFunctions';
import PropTypes from 'prop-types';
import prominentContext from '../contexts/prominentContext';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Navbar(props) {
    const [markSection, setmarkSection] = useState(null);
    const { setstopScroll } = useContext(stopScrollContext);
    const positionRefs = useContext(prominentContext);

    const ref = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        locationUI(location, setmarkSection);
        // eslint-disable-next-line
    }, []);

    window.onscroll = () => {
        let timer;
        clearTimeout(timer);

        timer = setTimeout(() => {
            scrollSpy(location, setmarkSection, positionRefs);
        }, 300);
    }

    document.onmousedown = () => {
        if (!ref.current.classList.contains('collapsed'))
            ref.current.click();
    }

    return (
        // Helmet React library usage
        <HelmetProvider>
            <Helmet>
                <style>
                    {props.mode === "dark" && `body {
                    background-color: black;
                    }
                    
                    input:-webkit-autofill,
                    input:-webkit-autofill:hover, 
                    input:-webkit-autofill:focus, 
                    input:-webkit-autofill:active  {
                        -webkit-box-shadow: 0 0 0 30px black inset !important;
                    }
                    
                    input:-webkit-autofill{
                      -webkit-text-fill-color: #f8f9fa !important;
                    }`}
                </style>
            </Helmet>

            {/* JSX for Navbar with useful information. */}
            <section className='d-flex justify-content-center'>
                <nav className={`navbar navbar-expand-lg myNav ${props.mode === "dark" ? "bg-black navbar-dark" : ""}`}>
                    <div className="container-fluid">

                        {/* Website Logo */}
                        <a onClick={() => {
                            setstopScroll(false);
                            navigate("/");
                            setmarkSection("myHome");
                        }}
                            className={`navbar-brand ${props.mode === "light" ? "text-success" : "darkModeGreen"}`} href="#myHome">World Site</a>

                        <button ref={ref} className={`navbar-toggler collapsed ${props.mode === "dark" ? "darkNavToggler" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className={`border-black navbar-toggler-icon ${props.mode === "dark" ? "darkNavIcon" : ""}`}></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={`navbar-nav d-flex align-items-center me-auto mb-2 mb-lg-0 ${props.mode === "dark" ? "myNav-black" : ""}`}>
                                <li className="nav-item me-4">

                                    {/* Home Navbar Item */}
                                    <a onClick={() => {
                                        setstopScroll(false);
                                        navigate("/");
                                        setmarkSection("myHome");
                                    }}
                                        className={`nav-link fs-4 fw-bold text-primary ${doDecoration(markSection, props.mode, "myHome")}`} aria-current="page" href="#myHome">Home</a>

                                </li>

                                {/* Featured Navbar Item */}
                                <li className="nav-item me-4">

                                    <a onClick={() => {
                                        setstopScroll(false);
                                        navigate("/");
                                    }}
                                        className={`nav-link fs-4 fw-bold text-primary ${doDecoration(markSection, props.mode, "myCarousel")}`} aria-current="page" id="myCarousel-link" href="#myCarousel">Featured</a>

                                </li>

                                {/* Highlights Navbar Item */}
                                <li className="nav-item me-4">

                                    <a onClick={() => {
                                        setstopScroll(false);
                                        navigate("/");
                                    }}
                                        className={`nav-link fs-4 fw-bold text-primary ${doDecoration(markSection, props.mode, "myHighlights")}`} aria-current="page" id="myHighlights-link" href="#myHighlights">Highlights</a>

                                </li>

                                {/* About me Navbar Item */}
                                <li className="nav-item me-4">

                                    <a onClick={() => {
                                        setstopScroll(false);
                                        navigate("/");
                                    }}
                                        className={`nav-link text-center fs-4 fw-bold text-primary ${doDecoration(markSection, props.mode, "myAbout")}`} aria-current="page" href="#myAbout" id="myAbout-link">About me</a>

                                </li>

                                {/* Contact me Navbar Item */}
                                <li className="nav-item">

                                    <a onClick={() => {
                                        setstopScroll(false);
                                        navigate("/");
                                    }}
                                        className={`nav-link text-center fs-4 fw-bold text-primary ${doDecoration(markSection, props.mode, "myContact")}`} aria-current="page" id="myContact-link" href="#myContact">Contact me</a>

                                </li>

                                {/* "All Articles" Navbar Item */}
                                <li className="nav-item ms-4">

                                    <Link onClick={() => {
                                        setstopScroll(false);
                                        window.scrollTo(0, 0);
                                        setmarkSection("myAllArticles");
                                    }}
                                        className={`nav-link text-center fs-4 fw-bold text-primary ${doDecoration(markSection, props.mode, "myAllArticles")}`} aria-current="page" to="/all">All Articles</Link>
                                </li>

                                {/* Dark Mode Navbar Item */}
                                <li className="nav-item form-check form-switch darkSwitchLi">
                                    <label className={`nav-link text-center fs-4 form-check-label ${doDecoration(markSection, props.mode, "")}`} aria-current="page" htmlFor="darkSwitch">Dark Mode</label>

                                    <input onClick={() =>
                                        darkModeFunc(setstopScroll, props.mode, props.setMode)
                                    }
                                        className="form-check-input d-inline" type="checkbox" role="switch" id="darkSwitch" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </HelmetProvider>
    )
}

Navbar.propTypes = {
    mode: PropTypes.string,
    setMode: PropTypes.func
};

Navbar.defaultProps = {
    mode: "light",
    setMode: (newMode) => {
        console.log("There is a problem while setting the " + newMode + " mode. The App is using the previous value of mode.");
    }
}

export default Navbar