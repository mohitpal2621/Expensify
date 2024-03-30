import { addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense } from "../../actions/expenses";
import {default as db, firebase} from "../../firebase/firebase";
import expenseReducer from "../../reducers/expenseReducer";
import expenses from "../fixtures/expenses";

beforeEach(async () => {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {description,note,amount,createdAt}
    });
    await firebase.set(firebase.ref(db, 'expenses'), expensesData);
})


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
    const action = addExpense(expenses[1]);

    expect(action).toEqual({expense: expenses[1], type: 'ADDEXPENSE'});
});

test("Should add expense to database and dispatch ADD_EXPENSE action", async () => {
    const dispatch = jest.fn(); // Mock dispatch function so test data doesn't get added to redux store
    let id;

    const expenseData = {
        description: 'Bikes collection',
        note: 'Test note',
        amount: 7000,
        createdAt: 123456789,
    };

    // Dispatch startAddExpense action with expense data
    try {
        id = await startAddExpense(expenseData)(dispatch);
        console.log("Expense added successfully to test database with id: ", id); // Log if expense added successfully
    } catch (error) {
        console.error("Error adding expense:", error); // Log if there's an error
    }

    // firebase.onValue(firebase.ref(db, `expenses/${id}`), (snapshot) => {
    //     expect(snapshot.val()).toEqual(expenseData);
    // }, {
    //     onlyOnce: true
    // });
    
    // Assert that the correct action is dispatched
    expect(dispatch).toHaveBeenCalledWith(addExpense({
        ...expenseData,
        id: id, // The id generated by the mock Firebase reference
    }));
});


test("Should add default expense to database and dispatch ADD_EXPENSE action", async () => {
    const dispatch = jest.fn(); // Mock dispatch function so test data doesn't get added to redux store
    let id;
    
    const defaultData = { description:'', note:'', amount:0, createdAt: 0 };

    // Dispatch startAddExpense action with expense data
    try {
        id = await startAddExpense({})(dispatch);
        console.log("Expense empty default added successfully! with the id: ", id); // Log if expense added successfully
    } catch (error) {
        console.error("Error adding expense:", error); // Log if there's an error
    }

    // firebase.onValue(firebase.ref(db, `expenses/${id}`), (snapshot) => {
    //     expect(snapshot.val()).toEqual(defaultData);
    // }, {
    //     onlyOnce: true
    // });

    // Assert that the correct action is dispatched
    expect(dispatch).toHaveBeenCalledWith(addExpense({
        ...defaultData,
        id: id, // The id generated by the mock Firebase reference
    }));
});



test("Should setup set expense action object with data", () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({type: 'SETEXPENSES', expenses});
});

test("Should set expenses", () => {
    const action = {
        type: "SETEXPENSES",
        expenses: [expenses[1]]
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
}); 


test("Should fetch the expense from firebase", async () => {
    const dispatch = jest.fn();

    try {
        await startSetExpenses()(dispatch);
        expect(firebase.get).toHaveBeenCalledWith(firebase.ref(db, 'expenses'));
    } catch (error) {
        console.error(error);        
    }
});

test("should remove expenses from firebase", async () => {
    const dispatch = jest.fn();
    await startRemoveExpense(expenses[0].id)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(removeExpense(expenses[0].id));

    await firebase.get(firebase.ref(db, `expenses/${expenses[0].id}`)).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
    });
});

// test("Should setup add expense action object with default values", () => {
//     const action = addExpense();

//     expect(action).toEqual({
//         type: 'ADDEXPENSE',
//         expense: undefined,
//     });
// });

// jest.mock('../../firebase/firebase', () => {
//     const firebase = {
//         push: jest.fn(),
//         ref: jest.fn(), // Mock ref to return an object with push method
//         onValue: jest.fn()
//     };

//     const db = {
//         ref: jest.fn(), // Mock ref to return itself for chaining
//     };

//     return {
//         firebase,
//         default: db,
//     };
// }); 

// test("Should add expense to database and dispatch ADD_EXPENSE action", async () => {
//     const dispatch = jest.fn(); // Mock dispatch function

//     const expenseData = {
//         description: 'Test expense',
//         note: 'Test note',
//         amount: 100,
//         createdAt: 123456789,
//     };

//     // Mock Firebase methods
//     firebase.push.mockResolvedValueOnce({ key: 'mockedKey' });

//     // Dispatch startAddExpense action with expense data
//     try {
//         await startAddExpense(expenseData)(dispatch);
//         console.log("Expense added successfully!"); // Log if expense added successfully
//     } catch (error) {
//         console.error("Error adding expense:", error); // Log if there's an error
//     }

//     // Assert that the correct action is dispatched
//     expect(dispatch).toHaveBeenCalledWith(addExpense({
//         ...expenseData,
//         id: 'mockedKey', // The id generated by the mock Firebase reference
//     }));

//     // Verify if the mocked Firebase method has been called with the correct arguments
//     expect(firebase.push).toHaveBeenCalledWith(firebase.ref(db, 'expenses'), expenseData);
// });


// test("Should add default expense to database and dispatch ADD_EXPENSE action", async () => {
//     const dispatch = jest.fn(); // Mock dispatch function

//     const expenseData = {};

//     // Mock Firebase methods
//     firebase.push.mockResolvedValueOnce({ key: 'mockedKeyDefault' });

//     // Dispatch startAddExpense action with expense data
//     try {
//         await startAddExpense(expenseData)(dispatch);
//         console.log("Expense added successfully!"); // Log if expense added successfully
//     } catch (error) {
//         console.error("Error adding expense:", error); // Log if there's an error
//     }

//     // Assert that the correct action is dispatched
//     expect(dispatch).toHaveBeenCalledWith(addExpense({
//         description:'', note:'', amount:0, createdAt: 0,
//         id: 'mockedKeyDefault', // The id generated by the mock Firebase reference
//     }));

//     // Verify if the mocked Firebase method has been called with the correct arguments
//     expect(firebase.push).toHaveBeenCalledWith(firebase.ref(db, 'expenses'), {
//         description:'', 
//         note:'', 
//         amount:0, 
//         createdAt: 0
//     });
// });