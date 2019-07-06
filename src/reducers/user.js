
const initialState = {
    user: '' ,
    isSigninInProgress: false
}
const user = (state = initialState, {type, payload } ) => {

    switch(type) {
        case 'LOGIN_WITH_GOOGLE_ERROR':
            return {
                ...state,
                isSigninInProgress: false,
            };
        case 'LOGIN_WITH_GOOGLE_REQUEST':
            return {
                ...state,
                isSigninInProgress: true

            };
        case 'SET_USER_INFO':
            return {
                ...state,
                user: payload.user,
                isSigninInProgress: false,
            };
        default:
            return state;
    }
};

export default user;