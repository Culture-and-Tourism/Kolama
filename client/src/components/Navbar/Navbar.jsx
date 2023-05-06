import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ShoppingCart } from 'phosphor-react';
import { GiDualityMask } from 'react-icons/gi';
import { AiOutlineDown } from "react-icons/ai";
import images from '../../constants/images';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Art from '../../container/Arts Management/User/Art/Art';
import Masks from '../../container/Arts Management/User/Masks/Masks';
import Dropdown from '../Dropdown/Dropdown';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 1060) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };
    
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.mask} alt="app__logo" />
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="/">Home</a></li>
                <li className="p__opensans" onMouseEnter={onMouseEnter}><a href="/art">Arts</a> <AiOutlineDown size={12} />
                    {dropdown && <Dropdown />}
                </li> 
                <li className="p__opensans"><a href="#discover">Discover</a></li>
                <li className="p__opensans"><a href="#event">Event</a></li>
                <li className="p__opensans"><a href="/shop">Shop</a></li>
            </ul>
            <div className="app__navbar-login">
                <a href="#login" className="p__opensans">Log In / Registration</a>

                <a href="/" className="p__opensans">Event Table</a>
                <div className="p__opensans">
                    <Link to='/cart'>
                        <ShoppingCart size={32} />
                    </Link>
                </div>
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