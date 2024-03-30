import {default as db, firebase} from '../firebase/firebase';

// ADD_EXPENSE action generator
export const addExpense = (expense) => ({
    type: 'ADDEXPENSE',
    expense
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

// REMOVE_EXPENSE action generator
export const removeExpense = (id) => ({
    type: 'REMOVEEXPENSE',
    id
});

export const startRemoveExpense = (id) => {
    return async (dispatch) => {
        await firebase.remove(firebase.ref(db, `expenses/${id}`)).then(() => {
            console.log(`Data with ${id} is removed!`);
            dispatch(removeExpense(id));
        }).catch((e) => {
            console.log("There is some error: ", e);
        });
    }
}

// EDIT_EXPENSE action generator
export const editExpense = (id, updates) => ({
    type: 'EDITEXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return async (dispatch) => {
        await firebase.update(firebase.ref(db, `expenses/${id}`), updates)
        console.log(`Updated expense with id: ${id} in firebase`);
        dispatch(editExpense(id, updates));
        console.log(`Now updated the expense in redux store as well`);
    }
}

export const setExpenses = (expenses) => ({
    type: 'SETEXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return async (dispatch) => {
        try {
            const expensesArr = [];
            
            // Wait for the data fetching to complete
            const snapshot = await firebase.get(firebase.ref(db, 'expenses'));

            // Process the snapshot
            snapshot.forEach((childSnapshot) => {
                expensesArr.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            console.log(expensesArr);

            // Dispatch the action after fetching expenses
            dispatch(setExpenses(expensesArr));
        } catch (error) {
            console.error("Error fetching expenses:", error);
            // You might want to dispatch an action to handle errors here
        }
    };
};