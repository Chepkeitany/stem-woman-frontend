const types = {
    FETCH_HEROINES: 'FETCH_HEROINES',
    SET_ACTIVE_HEROINES: 'SET_ACTIVE_HEROINES',
    SET_HEROINES_DATA: 'SET_HEROINES_DATA',
}

export const setActiveHeroines = (payload) => ({
    type: types.SET_ACTIVE_HEROINES,
    payload
});

export const setHeroinesData = (payload) => ({
    type: types.SET_HEROINES_DATA,
    payload
});

export const fetchHeroines = () => ({
    type: types.FETCH_HEROINES
});

export default types;
