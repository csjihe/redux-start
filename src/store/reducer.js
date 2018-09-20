const initialState = {
    counter : 0,
    results: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                // copy old state properties
                ...state,
                counter: state + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBSTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
            const updatedArray = state.results.filter(result => result.id !== action.resultEleId);
            return {
                ...state,
                results: state.results = updatedArray
            }
    }
    return state;
};

export default reducer;