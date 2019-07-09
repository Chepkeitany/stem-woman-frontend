const types = {
    SET_ACTIVE_HEROINES: 'SET_ACTIVE_HEROINES',
}

export const setActiveHeroines = (payload) => ({
    type: types.SET_ACTIVE_HEROINES,
    payload
});

export default types;