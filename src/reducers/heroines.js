
const initialState = {
    test: true
}
const heroines = (state = initialState, {type } ) => {

    switch(type) {
        case 'FETCH_HEROINES':
            return {
                ...state
            };
        default:
            return state;
    }
};

export default heroines;