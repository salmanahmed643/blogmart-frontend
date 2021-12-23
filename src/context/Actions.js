export const SignInStart = (userCredentials) => ({
    type: "SIGNIN_START"
});

export const SignInSuccess = user => ({
    type: "SIGNIN_SUCCESS",
    payload: user
});


export const SingInFailure = () => ({
    type: "SIGNIN_FAILURE"
});


export const SignOut = () => ({
    type: "SIGNOUT"
});



export const UpdateStart = userCredentials => ({
    type: "UPDATE_START"
});

export const UpdateSuccess = user => ({
    type: "UPDATE_SUCCESS",
    payload: user
});


export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE"
});
