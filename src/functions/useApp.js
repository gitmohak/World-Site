// A custom React hook function that provides useful settings to "App.js" (essential React App file).
// Import various necessary components.
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SinglePost from '../components/SinglePost';
import Navbar from '../components/Navbar';
import Highlights from '../components/Highlights';
import About from '../components/About';
import Featured from '../components/Featured';

/* postsData.json - a prominent data file created by me to hold the data for all the articles.
aboutData.json - a prominent data file created by me to hold the data for the About section. */
import articlesData from "../data/postsData.json";
import aboutData from "../data/aboutData.json";

// useState - to set the appropriate mode (light or dark)
// React Router - to create links in the website
// uuid - library to create unique IDs for array element keys
import { useState } from 'react';
import { Route } from "react-router-dom";
import { v4 as uniqueID } from 'uuid';

function useApp() {
    const [mode, setMode] = useState("light");
    let arr = [];
    let arr2 = [];

    const lowerSection = <>
        <Contact mode={mode} />
        <Footer mode={mode} />
    </>

    // Components to include for any article page.
    for (let i in articlesData) {
        arr.push(<Route key={uniqueID()} exact path={`/articles/${i}`} element={
            <>
                <Navbar mode={mode} setMode={setMode} />
                <SinglePost mode={mode} articleNum={i} />
                <Highlights mode={mode} />
                <About mode={mode} />
                {lowerSection}
            </>
        } />);
    }

    // Components to include for any About page.
    for (let i in aboutData) {
        arr2.push(<Route key={uniqueID()} exact path={`/about/${i}`} element={
            <>
                <Navbar mode={mode} setMode={setMode} />
                <SinglePost mode={mode} aboutNum={i} />
                <Featured />
                <Highlights mode={mode} />
                {lowerSection}
            </>
        } />);
    }

    return {lowerSection, mode, setMode, arr, arr2}
}

export default useApp