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