// Custom Scroll Spy function that detects the current position on the webpage for highlighting the appropriate Navbar items.
const scrollSpy = (location, setmarkSection, positionRefs) => {

    // Initialize the correct useful settings.
    const [myHome, myCarousel, myHighlights, myAbout, myContact, myAllArticles] = positionRefs.map((element) => element.current)

    let [myHomeValue, myHighlightsValue, myAboutValue, myAllArticlesValue, myCarouselValue, myContactValue] = Array(6).fill(Infinity);

    if (myHome)
        myHomeValue = myHome.offsetTop;

    if (myCarousel)
        myCarouselValue = myCarousel.offsetTop;

    if (myHighlights)
        myHighlightsValue = myHighlights.offsetTop;

    if (myAbout)
        myAboutValue = myAbout.offsetTop;

    if (myAllArticles)
        myAllArticlesValue = myAllArticles.offsetTop;

    if (myContact)
        myContactValue = myContact.offsetTop;

    //Mark the appropriate Navbar items according to location & scroll position
    if (location.pathname.slice(0, 9) === "/articles" || location.pathname.slice(0, 6) === "/about")
        setmarkSection(null);

    if (window.scrollY + 20 >= myContactValue || window.scrollY + window.innerHeight >= document.body.offsetHeight - 30)
        setmarkSection("myContact");

    else if (window.scrollY + 20 >= myAboutValue)
        setmarkSection("myAbout");

    else if (window.scrollY + 20 >= myHighlightsValue)
        setmarkSection("myHighlights");

    else if (window.scrollY + 20 >= myCarouselValue)
        setmarkSection("myCarousel");

    else if (window.scrollY + 20 >= myHomeValue)
        setmarkSection("myHome");

    else if (window.scrollY + 20 >= myAllArticlesValue)
        setmarkSection("myAllArticles");
}

export default scrollSpy;