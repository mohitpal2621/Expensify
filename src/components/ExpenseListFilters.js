import React from "react";
import { connect } from "react-redux";
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "../actions/filters";
import { DateRangePicker } from "react-dates";

// If the relevant part of the state the HOC component cares about (in this case, state.filters.text) hasn't changed, 
// the component won't re-render.
class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    }

    render(){
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if(e.target.value === 'date')
                            this.props.dispatch(sortByDate());
                        else if(e.target.value === 'amount')
                            this.props.dispatch(sortByAmount())
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="myDateId"
                    endDate={this.props.filters.endDate}
                    endDateId="myDateId"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    isOutsideRange={() => false}
                    numberOfMonths={1}
                    showClearDates={true}
                />
            </div> 
        ); 
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};
  
export default connect(mapStateToProps)(ExpenseListFilters);