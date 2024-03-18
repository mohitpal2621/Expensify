import filterReducer from "../../reducers/filterReducer";
import moment from "moment";

test('Should setup default filter values', () => {
    const state = filterReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});

test('Should setup sortBy to amount values', () => {
    const state = filterReducer(undefined, {type: 'SORTBYAMOUNT'});
    expect(state.sortBy).toEqual('amount');
});

test('Should setup sortBy to date values', () => {
    const currState = {
        text: '',
        sortBy: '',
        startDate: '',
        endDate: ''
    }; 
    const action = {type: 'SORTBYDATE'};

    const state = filterReducer(currState, action);
    expect(state).toEqual({
        ...currState,
        sortBy: 'date'
    });
});

test('Should setup text filter values', () => {
    const currState = {
        text: '',
        sortBy: '',
        startDate: '',
        endDate: ''
    }; 
    const action = {type: 'SETTEXT', text: 'e'};

    const state = filterReducer(currState, action);
    expect(state).toEqual({
        ...currState,
        text: action.text
    });
});


test('Should setup startDate values', () => {
    const currState = {
        text: '',
        sortBy: '',
        startDate: '',
        endDate: ''
    }; 
    const action = {type: 'SETSTARTDATE', stDate: moment(12)};

    const state = filterReducer(currState, action);
    expect(state).toEqual({
        ...currState,
        startDate: action.stDate
    });
});


test('Should setup endDate values', () => {
    const currState = {
        text: '',
        sortBy: '',
        startDate: '',
        endDate: ''
    }; 
    const action = {type: 'SETENDDATE', edDate: moment(100)};

    const state = filterReducer(currState, action);
    expect(state).toEqual({
        ...currState,
        endDate: action.edDate
    });
});