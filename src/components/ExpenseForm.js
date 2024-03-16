import React from "react";

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: ''
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
        if(/^\d+(\.\d{0,2})?$/.test(e.target.value))
            this.setState(() => (
                {amount: e.target.value}
            ))
    }
    
    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescChange}
                    />
                    <input 
                        type="text"
                        value={this.state.amount}
                        placeholder="Amount"
                        onChange={this.onAmountChange}
                    />
                    <textarea 
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}