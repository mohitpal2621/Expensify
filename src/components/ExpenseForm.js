import React from "react";
import moment from "moment";
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates";

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount : '',
            createdAt: props.expense ? moment(props.expense.createdAt): moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescChange = (e) => {
        this.setState(() => (
            {description: e.target.value}
        ));
    }

    onNoteChange = (e) => {
        this.setState(() => (
            {note: e.target.value}
        ));
    } 

    onAmountChange = (e) => {
        const amt = e.target.value;
        if(!amt || /^\d+(\.\d{0,2})?$/.test(amt))
            this.setState(() => ( {amount: e.target.value} ));
    }

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}));
        }
    }

    onFocusChange= ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    }

    onSubmit = (e) => { 
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            this.setState(() => (
                {error: "Please provide description and amount."}
            ));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10).toFixed(2),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} data-testid="expense-form">
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescChange}
                        data-testid="description-input"
                    />
                    <input 
                        type="text"
                        value={this.state.amount}
                        placeholder="Amount"
                        onChange={this.onAmountChange}
                        data-testid="amount-input"
                    />
                    <SingleDatePicker
                        id="date"
                        date={this.state.createdAt}
                        focused={this.state.calendarFocused}
                        onDateChange={this.onDateChange}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        data-testid="note-textarea"
                    >
                    </textarea>
                    {this.state.error && <p>{this.state.error}</p>}
                    <button data-testid="expense-form-submit">Add Expense</button>
                </form>
            </div>
        );
    }
}