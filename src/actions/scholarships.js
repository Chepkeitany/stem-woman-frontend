const types = {
    FETCH_SCHOLARSHIPS: 'FETCH_SCHOLARSHIPS',
    SET_SCHOLARSHIPS: 'SET_SCHOLARSHIPS',
}

export const setScholarships = (payload) => ({
    type: types.SET_SCHOLARSHIPS,
    payload
});

export const fetchScholarships = () => ({
    type: types.FETCH_SCHOLARSHIPS
});

export default types;
