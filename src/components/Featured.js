// This component represents the "Featured" section Carousel

/* useContext - for Context API
postsData.json - a prominent data file created by me to hold the data for all the articles
HTML parser library - to interpret HTML string input

React Router - to create links in the website
stopScrollContext - to stop scrolling when the user enables dark mode
prominentContext - to get the scroll position of various components and mark them in Navbar for scrollSpy */
import { useContext } from 'react';
import data from "../data/postsData.json";
import parse from 'html-react-parser';

import { Link } from "react-router-dom";
import stopScrollContext from '../contexts/stopScrollContext';
import prominentContext from '../contexts/prominentContext';

function Featured() {
    const {setstopScroll} = useContext(stopScrollContext);
    const positionRefs = useContext(prominentContext);

    return (
        // Bootstrap Carousel with required useful information
        <section ref={positionRefs[1]} id="myCarousel" className="carousel slide bg-dark" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                {/* First carousel item with useful information */}
                <div className="carousel-item active">

                    <Link onClick={()=>{
                        setstopScroll(false);
                    }}
                    to='/articles/5'>
                        <img src={data[5].image1} className="d-block vw-100 mx-auto" alt="Great Place" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{data[5].title}</h5>
                            {parse(data[5].description)}
                        </div>
                    </Link>
                </div>

                {/* Second carousel item with useful information */}
                <div className="carousel-item">

                    <Link onClick={()=>{
                        setstopScroll(false);
                    }}
                    to='/articles/8'>
                        <img src={data[8].image1} className="d-block vw-100" alt="Wonderful location" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{data[8].title}</h5>
                            {parse(data[8].description)}
                        </div>
                    </Link>
                </div>

                {/* Third carousel item with useful information */}
                <div className="carousel-item">
              
                    <Link onClick={()=>{
                        setstopScroll(false);
                    }} to='/articles/14'>
                        <img src={data[14].image1} className="d-block vw-100" alt="Awesome place" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{data[14].title}</h5>
                            {parse(data[14].description)}
                        </div>
                    </Link>
                </div>
            </div>

            {/* Previous and Next buttons */}
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </section>
    )
}

export default Featured