export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((exp) => {
        const startDateMatch = typeof startDate !== 'number' || exp.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || exp.createdAt <= endDate; 
        const textMatch = exp.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && !!textMatch;
    }).sort((exp1, exp2) => {
        if(sortBy === 'date')
            return exp2.createdAt - exp1.createdAt;
        else if(sortBy === 'amount')
            return exp2.amount - exp1.amount;
    })
};
