import React, { useContext, useState } from 'react';
import './Navigation.css';
import profile_img from '../../../img/profile.jpg'
import { Link } from 'react-router-dom';
import { Context } from '../../../context/Context';

const Navigation = () => {
    const {user, dispatch} = useContext(Context);
    const [isMobile, setIsMobile] = useState(false);


    const handleSignOut = () => {
        dispatch({
            type: "SIGNOUT"
        })
    }
    return (
        <>
            <div className="navbar">
                {/* logo start */}
                <div className="navbarLeft">
                    <Link className="logo" to="/">
                        BlogMart
                    </Link>
                </div>
                {/* logo end */}
                {/* menu start */}
                <div style={{flex: 9}}>
                    <div className={isMobile ? "navbarMobile" : "navbarRight"}
                        onClick={() => setIsMobile(true)}
                    >
                        {/* navbar link */}
                        <ul className="navbarLink">
                            <li> <Link to="/">home</Link> </li>
                            <li> <Link to="/">about</Link> </li>
                            <li> <Link to="/">contact</Link> </li>
                            <li> <Link to="/write">write</Link> </li>
                            <li onClick={handleSignOut} className="singOut">
                                {
                                    user && "logout"
                                }
                            </li>
                        </ul>

                        {/* navbar profile */}
                        <div className= "navbarProfile">
                            {
                                user ? (
                                    <Link to="settings">
                                        <img className="profileImg" src={user.profilePic} alt="" />
                                    </Link>
                                ) :
                                <ul className="navbarButton">
                                    <li className="navbarSignUp"> <Link to="/signup">SignUp</Link> </li>
                                    <li className="navbarSignIn"> <Link to="/signin">SignIn</Link> </li>
                                </ul>
                            }
                            <i className="searchIcon fas fa-search"></i>
                        </div>
                    </div>
                </div>
                {/* menu end */}
                {/* responsive mobile icon */}
                <button className="mobileMenuButton"
                    onClick={() => setIsMobile(!isMobile)}
                >
                    {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-align-right"></i>}
                </button>
            </div>
        </>
    );
};

export default Navigation;