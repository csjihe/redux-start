import * as actionTypes from '../actions';

const initialState = {
    counter : 0
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                // copy old state properties
                ...state,
                counter: state + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBSTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
    }
    return state;
};

export default reducer;