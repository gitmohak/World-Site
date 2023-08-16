// This component represents the "All Articles" page.

/* useContext - for Context API
postsData.json - a prominent data file created by me to hold the data for all the articles
HTML parser library - to interpret HTML string input
React Router - to create links in the website

stopScrollContext - to stop scrolling when the user enables dark mode
uuid - library to create unique IDs for array element keys
PropTypes - to validate the types of props
prominentContext - to get the scroll position of various components and mark them in Navbar for scrollSpy
*/
import { useContext } from 'react';
import data from "../data/postsData.json";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";

import stopScrollContext from '../contexts/stopScrollContext';
import { v4 as uniqueID } from 'uuid';
import PropTypes from 'prop-types';
import prominentContext from '../contexts/prominentContext';

function AllArticles(props) {
    const { setstopScroll } = useContext(stopScrollContext);
    const positionRefs = useContext(prominentContext);

    // Process JSX to fill useful information and generate the "All Articles" section cards.
    let arr = [];
    for (let i = 0; i < data.length; i++) {

        arr[i] = <div className={`card mt-5 ${props.mode === "dark" ? "bg-black border-light" : "border-black"}`} key={uniqueID()}>

            <Link onClick={() =>
                setstopScroll(false)
            }
                to={`/articles/${i}`}>
                <img src={data[i].image1} className="card-img-top" alt="Beautiful Article" />
                <div className={`card-body d-flex flex-wrap justify-content-center text-center ${props.mode === "dark" ? "text-light" : ""}`}>
                    <h5 className="card-title fs-3">{data[i].title}</h5>
                    <span className="card-text">{parse(data[i].description)}</span>
                    <button className='btn btn-primary align-self-end'>Read More</button>
                </div>
            </Link>
        </div>
    }

    return (
        // JSX for "All Articles" page.
        <section ref={positionRefs[5]} id="myAllArticles" className='container d-flex flex-wrap justify-content-between about mb-5'>
            <h1 className={`w-100 mt-5 mb-0 ${props.mode === "dark" ? "text-light" : ""}`}>Articles for your Liking</h1>
            {arr}
        </section>
    )
}

AllArticles.propTypes = {
    mode: PropTypes.string
};

AllArticles.defaultProps = {
    mode: "light"
}

export default AllArticles