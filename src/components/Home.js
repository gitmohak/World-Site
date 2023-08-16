// This component represents the "Home" section
/* PropTypes - to validate the types of props
useContext - for Context API
prominentContext - to get the scroll position of various components and mark them in Navbar for scrollSpy */

import PropTypes from 'prop-types';
import { useContext } from 'react';
import prominentContext from '../contexts/prominentContext';

function Home(props) {
    const positionRefs = useContext(prominentContext);
    
    return (
        <header ref={positionRefs[0]} id="myHome" className='container d-flex justify-content-around position-relative'>
                {/* Animated moving figures for the "Home" section */}
                <div className={`animation1 ${props.mode === "dark" ? "opacity-75" : ""}`}></div>
                <div className={`animation2 ${props.mode === "dark" ? "opacity-75" : ""}`}></div>
                <div className={`animation3 ${props.mode === "dark" ? "opacity-75" : ""}`}></div>

                <div className='d-flex flex-column justify-content-center align-items-center home-left-section'>

                    {/* Heading */}
                    <h1 className={`home-heading mt-0 mb-0 ${props.mode === "dark" ? "text-light" : ""}`}>Visit the Entire World</h1>

                    {/* Description */}
                    <p className={`home-info mb-5 mt-4 ${props.mode === "dark" ? "text-light" : ""}`}>World Site provides extremely interesting and useful information about the world. You can go to various fantastic places in the world just by visiting here.</p>
                    
                    {/* Button */}
                    <a className="btn btn-primary btn-lg" href='#myCarousel'>Check It Out</a>
                </div>

                {/* Image */}
                <img className='home-img mb-1' src="/images/home.png" alt="Beautiful Landmark with Dome top" />
        </header>
    )
}

Home.propTypes = {
    mode: PropTypes.string
};

Home.defaultProps = {
    mode: "light"
}

export default Home