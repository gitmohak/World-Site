// This component represents the "Highlights" section.

/* useState - to create hover effect and set the place buttons.
useContext - for Context API
useHighlights - custom React hook function to display the Highlights

PropTypes - to validate the types of props
prominentContext - to get the scroll position of various components and mark them in Navbar for scrollSpy */
import { useState, useContext } from 'react';
import useHighlights from '../functions/useHighlights';

import PropTypes from 'prop-types';
import prominentContext from '../contexts/prominentContext';

function Highlights(props) {
    const positionRefs = useContext(prominentContext);
    const [place, setPlace] = useState("all");

    // use the custom useHighlights React hook function for the functionality of the Highlights panel and generate panel items
    let arr = [];
    useHighlights(place, arr, props.mode);

    return (
        <section ref={positionRefs[2]} id="myHighlights" className='container highlights'>
            <h1 className={`mt-0 mb-4 ${props.mode === "dark" ? "text-light" : ""}`}>Highlights</h1>

            {/* Clickable header buttons to show Highlights items */}
            <ul className='d-flex myHeaders'>
            {/* eslint-disable */}
                <li><a className={`${place === "all" ? "current-select" : ""} ${props.mode === "dark" ? "text-light" : ""}`} onClick={() =>
                    setPlace("all")
                }>Everything</a></li>

                <li><a className={`${place === "india" ? "current-select" : ""} ${props.mode === "dark" ? "text-light" : ""}`} onClick={() =>
                    setPlace("india")
                } >India</a></li>

                <li><a className={`${place === "america" ? "current-select" : ""} ${props.mode === "dark" ? "text-light" : ""}`} onClick={() =>
                    setPlace("america")
                } >America</a></li>

                <li><a className={`${place === "england" ? "current-select" : ""} ${props.mode === "dark" ? "text-light" : ""}`} onClick={() =>
                    setPlace("england")
                } >England</a></li>
                {/* eslint-enable */}
            </ul>

            {/* Main Highlights items */}
            <section className='main-highlights d-flex flex-row justify-content-around flex-wrap mx-auto'>
                {arr}
            </section>
        </section>
    )
}

Highlights.propTypes = {
    mode: PropTypes.string
};

Highlights.defaultProps = {
    mode: "light"
}

export default Highlights