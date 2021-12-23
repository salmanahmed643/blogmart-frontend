import axios from 'axios';
import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../context/Context';
import './SignIn.css'

const SignIn = () => {
    const userRef = useRef();
    const passRef = useRef();
    const {dispatch, isFetching} = useContext(Context)
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "SIGNIN_START"});
        try{
            const res = await axios.post("https://secure-headland-36866.herokuapp.com/api/auth/signin", {
                username: userRef.current.value,
                password: passRef.current.value
            })
            dispatch({type: "SIGNIN_SUCCESS", payload: res.data});
            
        } catch(err) {
            dispatch({type: "SIGNIN_FAILURE"});
        }
    }
    return (
        <>
            <div className="SignInSection">
                <div className="signInSignUpTitle">
                    <h3>SignIn</h3>
                </div>
                <form onSubmit={handleSubmit} className="signInForm">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        id="username"
                        className="signInInput"
                        ref={userRef}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        id="password" 
                        className="signInInput"
                        ref={passRef}
                    />
                    <button
                        type="submit" 
                        className="signInButton"
                        disabled={isFetching}
                    >Sign in</button>
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