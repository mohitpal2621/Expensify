// SETTEXTFILTER action generator
export const setTextFilter = (text = '') => ({
    type: 'SETTEXT',
    text
});

// SORTBYAMOUNT action generator
export const sortByAmount = () => ({type: 'SORTBYAMOUNT'});

// SORTBYDATE action generator
export const sortByDate = () => ({type: 'SORTBYDATE'});

// SETSTARTDATE action generator
export const setStartDate = (stDate) => ({
    type: 'SETSTARTDATE',
    stDate
});

// SETENDDATE action generator
export const setEndDate = (edDate) => ({
    type: 'SETENDDATE',
    edDate
});
