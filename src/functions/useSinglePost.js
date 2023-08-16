/* A custom React hook function for various useful settings to display an article.

useContext - for Context API
postsData.json - a prominent data file created by me to hold the data for all the articles
aboutData.json - a prominent data file created by me to hold the data for the About section
stopScrollContext - to stop scrolling when the user enables dark mode
*/
import { useContext } from "react";
import articleData from "../data/postsData.json";
import aboutData from "../data/aboutData.json";
import stopScrollContext from '../contexts/stopScrollContext';

function useSinglePost(articleNum, aboutNum) {
    const { stopScroll } = useContext(stopScrollContext);
    let postNum, date, data;

    // Check if you are getting an article or about section data
    if (articleNum) {
        data = articleData;
        postNum = articleNum;
        date = new Date(data[postNum].date).toUTCString().slice(0, 16);
    }

    else if (aboutNum) {
        data = aboutData;
        postNum = aboutNum;
    }

    // The user should initially be at the top of the page.
    setTimeout(() => {
        if (stopScroll === false)
            window.scrollTo(0, 1);
    }, 0);

    // Return the required useful information.
    return { postNum, date, data }
}

export default useSinglePost