// This component represents the "Footer" section.
// PropTypes - to validate the types of props
import PropTypes from 'prop-types';

function Footer(props) {
    return (
        <footer className='container d-flex flex-wrap justify-content-between align-content-center foot'>

            {/* Footer text */}
            <p className={`${props.mode === "dark" ? "text-light" : ""}`}>© 2023 World Site, Inc. All rights reserved.</p>

            {/* Footer logo image */}
            <img className='logo' src="/images/logo.png" alt="beautiful website" />

            {/* Social Media Icons */}
            <div className='fs-3 social'>
                <a href="https://www.twitter.com/itsmohak/" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>

                <a href="https://www.linkedin.com/in/mohakarora/" target="_blank" rel="noreferrer"><img className='social-icons mx-4' src="/images/social/linkedin.png" alt="Linked In" /></a>

                <a href="https://www.facebook.com/aroramohak28/" target="_blank" rel="noreferrer"><img className='social-icons' src="/images/social/facebook.png" alt="Facebook" /></a>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    mode: PropTypes.string
};

Footer.defaultProps = {
    mode: "light"
}

export default Footer