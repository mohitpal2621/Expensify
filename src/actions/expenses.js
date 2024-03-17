import { v4 as uuid } from "uuid";

// ADD_EXPENSE action generator
export const addExpense = ({ description='', note='', amount=0, createdAt=0 }) => ({
    type: 'ADDEXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE action generator
export const removeExpense = (id) => ({
    type: 'REMOVEEXPENSE',
    id
});

// EDIT_EXPENSE action generator
export const editExpense = (id, updates) => ({
        type: 'EDITEXPENSE',
        id,
        updates
});