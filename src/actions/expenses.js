import {default as db, firebase} from '../firebase/firebase';

// ADD_EXPENSE action generator
export const addExpense = (expense) => ({
    type: 'ADDEXPENSE',
    expense
});

// REMOVE_EXPENSE action generator
export const removeExpense = (id) => ({
    type: 'REMOVEEXPENSE',
    id
});

export const startAddExpense = ({ description='', note='', amount=0, createdAt=0 } = {}) => {
    return async (dispatch) => {
        const exp = {description, note, amount, createdAt};

        const ref = await firebase.push(firebase.ref(db, 'expenses'), exp);
        console.log("Inside the then block about to dispatch to the redux store, just after pushing to firebase database.");
        dispatch(addExpense({ id: ref.key, ...exp }));
        return ref.key;       
    }
}

// EDIT_EXPENSE action generator
export const editExpense = (id, updates) => ({
    type: 'EDITEXPENSE',
    id,
    updates
});