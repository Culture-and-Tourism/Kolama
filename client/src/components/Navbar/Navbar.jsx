import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiDualityMask } from 'react-icons/gi';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.mask} alt="app__logo" />
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#arts">Arts</a></li>
                <li className="p__opensans"><a href="#discover">Discover</a></li>
                <li className="p__opensans"><a href="#event">Event</a></li>
                <li className="p__opensans"><a href="#shop">Shop</a></li>
            </ul>
            <div className="app__navbar-login">
                <a href="#login" className="p__opensans">Log In / Registration</a>
                <div />
                <a href="/" className="p__opensans">Event Table</a>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <GiDualityMask fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                            <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                            <li><a href="#arts" onClick={() => setToggleMenu(false)}>Arts</a></li>
                            <li><a href="#discover" onClick={() => setToggleMenu(false)}>Discover</a></li>
                            <li><a href="#event" onClick={() => setToggleMenu(false)}>Event</a></li>
                            <li><a href="#shop" onClick={() => setToggleMenu(false)}>Shop</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;