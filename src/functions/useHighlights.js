/* A custom React hook function to display the Highlights Panel.
Link - from React Router
uuid - library to create unique IDs for array element keys
postsData.json - a prominent data file created by me to hold the data for all the articles.

stopScrollContext - to stop scrolling when the user enables dark mode
useState - state variable to highlight the appropriate item on hover
useContext - for Context API */
import { Link } from "react-router-dom";
import { v4 as uniqueID } from 'uuid';

import data from "../data/postsData.json";
import { useState, useContext } from "react";
import stopScrollContext from '../contexts/stopScrollContext';

function useHighlights(place, arr, mode) {
    const [hover, setHover] = useState(null);
    const { setstopScroll } = useContext(stopScrollContext);

    // Show the appropriate highlights according to the user's choice in header.
    let choices = [];
    switch (place) {
        default:
            choices = [2, 15, 7, 9, 17, 4];
            break;

        case "india":
            choices = [0, 1, 2, 3, 4, 5];
            break;

        case "america":
            choices = [6, 7, 8, 9, 10, 11];
            break;

        case "england":
            choices = [12, 13, 14, 15, 16, 17];
    }

    // Generate the correct Highlights items according to the user's choice.
    for (let i = 0; i < data.length; i++) {
        for (let j of choices) {

            if (i === j) {
                arr.push(
                    <div className="highlights-item" key={uniqueID()} onMouseEnter={() =>
                        setHover(i)
                    }
                        onMouseLeave={() =>
                            setHover(-1)
                        }>

                        <Link onClick={() =>
                            setstopScroll(false)
                        }
                            to={`/articles/${i}`}>
                            <h3 className={`${hover === i ? "d-flex" : "d-none"} align-items-center justify-content-center`}>{data[i].region}</h3>
                        </Link>

                        <div className="d-flex justify-content-center w-100 h-100">

                            <div className={`spinner-border ${mode === "dark" ? "text-light" : ""}`} id={`spinner-${i}`} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>

                        <img className="w-100 h-100" onLoad={() => document.getElementById(`spinner-${i}`).hidden = true}
                            src={place === "all" ? data[i].image2 : data[i].image1} alt="Terrific Location" />
                    </div>
                )
            }
        }
    }
}

export default useHighlights;