import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(false)
        try{
            const res = await axios.post("https://secure-headland-36866.herokuapp.com/api/auth/signup", {
                username,
                email,
                password
            });
            res.data && window.location.replace("/signin")
        } catch(err) {
            setError(true)
        }

    };

    return (
        <>
            <div className="SignInSection">
                <div className="signInSignUpTitle">
                    <h3>SignUp</h3>
                </div>
                <form onSubmit={handleSignUp} className="signInForm">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        id="username"
                        className="signInInput"
                        onBlur={e => setUsername(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        placeholder="Email" 
                        id="email"
                        className="signInInput"
                        onBlur={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        id="password" 
                        className="signInInput"
                        onBlur={e => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="signInButton">
                        Sign Up
                    </button>
                </form>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <span className="dontAccount">Already account?</span>
                    <button className="signInSignUpButton"> <Link to="/signin">Sign In</Link></button>
                </div>
                {
                    error &&
                    <span
                        style={{backgroundColor: "red", padding: '.5rem 1rem', borderRadius: ".5rem", color: "#fff", fontSize: "1.2rem", marginTop: ".5rem"}}
                    >something wrong</span>
                }
            </div>
        </>
    );
};

export default SignUp;