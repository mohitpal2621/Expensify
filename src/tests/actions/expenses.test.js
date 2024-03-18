import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should setup remove expense action object", () => {
    const action = removeExpense('1321asfasd');
    expect(action).toEqual({
        type: 'REMOVEEXPENSE',
        id: '1321asfasd'
    });
});

test("Should setup edit expense action object", () => {
    const action = editExpense('1321asfasd', {description: "new wheels", amount: 12000.02});
    expect(action).toEqual({
        type: 'EDITEXPENSE',
        id: '1321asfasd',
        updates: {
            description: "new wheels", 
            amount: 12000.02
        }
    });
});

test("Should setup add expense action object with provided values", () => {
    const expenseData = {
        description: 'add with given vals',
        note: 'new', 
        amount: 31232.21, 
        createdAt: 13221232
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADDEXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});


test("Should setup add expense action object with default values", () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADDEXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '', 
            amount: 0, 
            createdAt: 0
        }
    });
});