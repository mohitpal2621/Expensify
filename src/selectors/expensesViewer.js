import moment from "moment";

export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((exp) => {
        const createdAtMoment = moment(exp.createdAt);
        const startDateMatch = startDate ? moment(createdAtMoment).isSameOrAfter(startDate, 'day') : true;
        const endDateMatch = endDate ?  moment(createdAtMoment).isSameOrBefore(endDate,  'day') : true; 
        const textMatch = exp.description.toLowerCase().includes(text.toLowerCase());
        console.log("TYPEOF amount from state.expenses: ", typeof exp.amount);
        return startDateMatch && endDateMatch && !!textMatch;
    }).sort((exp1, exp2) => {
        if(sortBy === 'date')
            return exp2.createdAt - exp1.createdAt;
        else if(sortBy === 'amount')
            return exp2.amount - exp1.amount;
    })
};
