import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { ShoppingCart } from 'phosphor-react';
import { GiDualityMask } from 'react-icons/gi';
import images from '../../constants/images';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  //   const currentUser = {
  //     id: 1,
  //     username: 'Anna',
  //     isSeller: true,
  //   };
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      localStorage.clear();
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  console.log(currentUser);

  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.mask} alt='app__logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <a href='/'>Home</a>
        </li>
        <li className='p__opensans'>
          <a href='#arts'>Arts</a>
        </li>
        <li className='p__opensans'>
          <a href='#discover'>Discover</a>
        </li>
        <li className='p__opensans'>
          <a href='#event'>Event</a>
        </li>
        <li className='p__opensans'>
          <a href='/shop'>Shop</a>
        </li>
      </ul>

      <div className='app__navbar-login'>
        <a href='/' className='p__opensans'>
          Event Table
        </a>

        {!currentUser && (
          <a href='/login' className='p__opensans'>
            Log In / Registration
          </a>
        )}
        {currentUser && (
          <div className='userProfile' onClick={() => setOpen(!open)}>
            <img
              src={
                currentUser.img ||
                'https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg'
              }
              alt='pro pic'
            />
            <span className='username'>{currentUser?.username}</span>
            {open && (
              <div className='options'>
                {currentUser?.isSeller && (
                  <>
                    <Link className='link' to='/'>
                      MyProducts
                    </Link>
                    <Link className='link' to='/'>
                      Add New Product
                    </Link>
                  </>
                )}

                <Link className='link' to='/'>
                 User Profile
                </Link>
                <Link className='link' onClick={handleLogout}>
                  Logout
                </Link>
              </div>
            )}
          </div>
        )}

        <div className='p__opensans'>
          <Link to='/cart'>
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu
          color='#fff'
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <GiDualityMask
              fontSize={27}
              className='overlay__close'
              onClick={() => setToggleMenu(false)}
            />
            <ul className='app__navbar-smallscreen_links'>
              <li>
                <a href='#home' onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href='#arts' onClick={() => setToggleMenu(false)}>
                  Arts
                </a>
              </li>
              <li>
                <a href='#discover' onClick={() => setToggleMenu(false)}>
                  Discover
                </a>
              </li>
              <li>
                <a href='#event' onClick={() => setToggleMenu(false)}>
                  Event
                </a>
              </li>
              <li>
                <a href='#shop' onClick={() => setToggleMenu(false)}>
                  Shop
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
