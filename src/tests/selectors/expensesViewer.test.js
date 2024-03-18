import selectExpenses from "../../selectors/expensesViewer";
import moment from "moment";
import expenses from '../fixtures/expenses.js';


test("Should filter by TEXT value", () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[2], expenses[1]
    ]);
});

test("Should filter by STARTDATE value", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[2], expenses[0]
    ]);
});

test("Should filter by ENDDATE value", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[0], expenses[1]
    ]);
});

test("Should filter by STARTDATE and ENDDATE value", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: moment(0).add(5, 'days')
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[2], expenses[0]
    ]);
});

test("Should filter by DATE value", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[2], expenses[0], expenses[1]
    ]);
});

test("Should filter by AMOUNT value", () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[2], expenses[1], expenses[0]
    ]);
});