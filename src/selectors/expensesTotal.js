const sum = (expenses) => {
    return expenses.map((exp) => parseFloat(exp.amount,10)).reduce((accumulator, currValue) => accumulator + currValue, 0);
};

export default sum;