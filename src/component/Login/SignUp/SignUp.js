import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <div className="SignInSection">
                <div className="signInSignUpTitle">
                    <h3>SignUp</h3>
                </div>
                <form className="signInForm">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        id="username"
                        className="signInInput"
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        placeholder="Email" 
                        id="email"
                        className="signInInput"
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        id="password" 
                        className="signInInput"
                    />
                    <button className="signInButton"><a href="/">Sign Up</a></button>
                </form>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <span className="dontAccount">Already account?</span>
                    <button className="signInSignUpButton"> <Link to="/signin">Sign In</Link></button>
                </div>
            </div>
        </>
    );
};

export default SignUp;