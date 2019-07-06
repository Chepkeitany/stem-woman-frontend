const types = {
    SET_USER_INFO: 'SET_USER_INFO',
    LOGIN_WITH_GOOGLE_REQUEST: 'LOGIN_WITH_GOOGLE_REQUEST',
    LOGIN_WITH_GOOGLE_ERROR: 'LOGIN_WITH_GOOGLE_ERROR'
}

export const setUserInfo = (payload) => ({
    type: types.SET_USER_INFO,
    payload
});

export const loginWithGoogleRequest = () => ({
    type: types.LOGIN_WITH_GOOGLE_REQUEST
});

export const loginWithGoogleError = () => ({
    type: types.LOGIN_WITH_GOOGLE_ERROR
});

export default types;