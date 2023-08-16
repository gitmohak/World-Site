/* This project has been created by Mohak Arora

This Application extensively uses various advanced technologies including HTML, CSS, Bootstrap, JavaScript, React, Node Package Manager, and useful React libraries. Additionally, this website is fully responsive. The website (World Site) is about showing useful travel information to the world. This section is very important. It takes various components of the website and combines them together in a structured manner for further interpretation.
*/

// Various components required for this file.
import Navbar from './components/Navbar';
import Home from './components/Home';
import Featured from './components/Featured';
import Highlights from './components/Highlights';
import About from './components/About';
import AllArticles from './components/AllArticles';
import NoPage from './components/NoPage';

/* React Router - to create various links for the website
StopScrollState - to stop scrolling when the user enables dark mode. Context API.
useApp - custom React Hook function to provide useful settings and routes
ProminentState - to get the scroll position of various components and mark them in Navbar for scrollSpy */
import { Routes, Route } from "react-router-dom";
import StopScrollState from './contexts/StopScrollState';
import useApp from './functions/useApp';
import ProminentState from './contexts/ProminentState'

function App() {
  const { lowerSection, mode, setMode, arr, arr2 } = useApp();

  return (
    <ProminentState>
      <StopScrollState>
        <Routes>

          {/* Home Page Route */}
          <Route exact path="/">
            <Route index element={
              <>
                <Navbar mode={mode} setMode={setMode} />
                <Home mode={mode} />
                <Featured />
                <Highlights mode={mode} />
                <About mode={mode} />
                {lowerSection}
              </>
            } />

            {/* All Articles Page Route */}
            <Route exact path="all" element={
              <>
                <Navbar mode={mode} setMode={setMode} />
                <AllArticles mode={mode} />
                <Featured />
                <About mode={mode} />
                {lowerSection}
              </>
            } />

            {/* Routes from useApp() - Custom React Hook Function */}
            {arr}
            {arr2}

            {/* Error page when the user enters a wrong URL */}
            <Route exact path="*" element={<NoPage />} />

          </Route>
        </Routes>
      </StopScrollState>
    </ProminentState>
  );
}

export default App;