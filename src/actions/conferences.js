const types = {
    FETCH_CONFERENCES: 'FETCH_CONFERENCES',
    SET_CONFERENCES: 'SET_CONFERENCES',
}

export const setConferences = (payload) => ({
    type: types.SET_CONFERENCES,
    payload
});

export const fetchConferences = () => ({
    type: types.FETCH_CONFERENCES
});

export default types;
