const types = {
    FETCH_RESOURCES: 'FETCH_RESOURCES',
    SET_RESOURCES: 'SET_RESOURCES',
}

export const setResources = (payload) => ({
    type: types.SET_RESOURCES,
    payload
});

export const fetchResources = () => ({
    type: types.FETCH_RESOURCES
});

export default types;
