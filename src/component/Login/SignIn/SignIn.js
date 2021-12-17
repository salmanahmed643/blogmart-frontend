import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'

const SignIn = () => {
    return (
        <>
            <div className="SignInSection">
                <div className="signInSignUpTitle">
                    <h3>SignIn</h3>
                </div>
                <form className="signInForm">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        id="username"
                        className="signInInput"
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        id="password" 
                        className="signInInput"
                    />
                    <button className="signInButton"><a href="/">Sign in</a></button>
                </form>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <span className="dontAccount">Don't have account?</span>
                    <button className="signInSignUpButton"> <Link to="/signup">Sign up</Link></button>
                </div>
            </div>
        </>
    );
};

export default SignIn;