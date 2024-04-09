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
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }

    onSortChange = (e) => {
        if(e.target.value === 'date')
            this.props.sortByDate();
        else if(e.target.value === 'amount')
            this.props.sortByAmount();
    }

    render(){
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            className="text-input"
                            type="text" 
                            placeholder="Select expenses"
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                        />
                    </div>
                     <div className="input-group__item">
                        <select 
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
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
                </div>
            </div> 
        ); 
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (val) => dispatch(setTextFilter(val)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount())
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);