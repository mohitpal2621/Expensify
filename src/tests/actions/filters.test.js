import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../../actions/filters";
import moment from "moment";

test("Should setup setTextFilter action object with given text", () => {
    const action = setTextFilter("bill");
    expect(action).toEqual({
        type: 'SETTEXT',
        text: "bill"
    });
});

test("Should setup setTextFilter action object with default text", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SETTEXT',
        text: ''
    });
});

test("Should setup sortByAmount action object", () => {
    const action = sortByAmount();
    expect(action).toEqual({type: 'SORTBYAMOUNT'});
});

test("Should setup sortByDate action object", () => {
    const action = sortByDate();
    expect(action).toEqual({type: 'SORTBYDATE'});
});

test("Should setup setStartDate action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SETSTARTDATE',
        stDate: moment(0)
    });
});

test("Should setup setEndDate action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SETENDDATE',
        edDate: moment(0)
    });
});