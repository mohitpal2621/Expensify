import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";



// If the relevant part of the state the HOC component cares about (in this case, state.filters.text) hasn't changed, 
// the component won't re-render.
const ExpenseListFilters = (props) => (
    <div>
        <input 
            type="text" 
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }}
        />
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};
  
export default connect(mapStateToProps)(ExpenseListFilters);