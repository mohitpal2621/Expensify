// FILTER REDUCER
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

export default (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SETTEXT':
            return {...state, text: action.text};
        case 'SORTBYAMOUNT':
            return {...state, sortBy: 'amount'};
        case 'SORTBYDATE':
            return {...state, sortBy: 'date'};
        case 'SETSTARTDATE':
            return {...state, startDate: action.stDate};
        case 'SETENDDATE':
            return {...state, endDate: action.edDate};
        default:
            return state
    }
}