import expenseReducer from "../../reducers/expenseReducer";
import expenses from '../fixtures/expenses'

test("Should set default state", () => {
    const state = expenseReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test("Should remove expense by id", () => {
    const action = {
        type: 'REMOVEEXPENSE',
        id: expenses[1].id
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should remove expense when no id", () => {
    const action = {
        type: 'REMOVEEXPENSE',
        id: -1
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("Should add expense", () => {
    const action = {
        type: 'ADDEXPENSE',
        expense: {
            id: 4,
            descrption: 'Added one more',
            note: 'Paid last week',
            amount: 12000,
            createdAt: 41243
        }
    }

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test("should edit expense with id", () => {
    const action = {
        type: 'EDITEXPENSE',
        id: expenses[1].id,
        updates: {
            descrption: "Rent PAYMENT",
            note: "Paid via UPI"
        }
    }

    const state = expenseReducer(expenses, action);
    expect(state[1]).toEqual({
        ...state[1],
        ...action.updates
    });
});

test("should edit expense without id", () => {
    const action = {
        type: 'EDITEXPENSE',
        id: -1
    }

    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
})