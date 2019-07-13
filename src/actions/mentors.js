const types = {
    FETCH_MENTORS: 'FETCH_MENTORS',
    SET_MENTORS: 'SET_MENTORS',
}

export const setMentors = (payload) => ({
    type: types.SET_MENTORS,
    payload
});

export const fetchMentors = () => ({
    type: types.FETCH_MENTORS
});

export default types;
