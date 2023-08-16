/* A few custom Navbar functions.
locationUI - a custom function that intitially highlights the user position according to URL location and redirects the user to the correct section if the user directly wants to go there using URL.

darkModeFunc - a custom Navbar function to toggle dark mode of the website.
doDecoration - to decorate the correct point of the Navbar. */
export const locationUI = (location, setmarkSection) => {
    if (location.pathname === "/")
        setmarkSection("myHome");

    else if (location.pathname === "/all")
        setmarkSection("myAllArticles");

    else if (location.pathname.slice(0, 9) === "/articles" || location.pathname.slice(0, 6) === "/about")
        setmarkSection(null);

    if (location.hash === "#myCarousel" || location.hash === "#myHighlights" || location.hash === "#myAbout" || location.hash === "#myContact")
        window.location.href = location.hash;
}

export const darkModeFunc = (setstopScroll, mode, setMode) => {
    setstopScroll(true);

    if (mode === "light")
        setMode("dark");
    else
        setMode("light");
}

export const doDecoration = (markSection, mode, ms) => {
    let design = "";

    if (mode === "light") {
        if (markSection === ms)
            design = "text-decoration-underline text-success";

        return "lightModeBlue " + design;
    }

    else if (mode === "dark") {
        if (markSection === ms)
            design = "text-decoration-underline darkModeGreen";

        return "darkModeBlue " + design;
    }
}