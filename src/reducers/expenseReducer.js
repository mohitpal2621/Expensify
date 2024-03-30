// EXPENSE REDUCER
const expensesReducerDefaultState = [];

// Reduces Functions
export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADDEXPENSE':
            return [...state, action.expense];
        case 'REMOVEEXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDITEXPENSE':
            return state.map(exp => {
                if(exp.id === action.id){
                    return {...exp, ...action.updates};
                }else{
                    return exp;
                }
            });
        case 'SETEXPENSES':
            return action.expenses;
        default:
            return state; 
    }
};