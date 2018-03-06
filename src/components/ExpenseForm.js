import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description: '',
            note: props.expense? props.expense.note : '',
            amount: props.expense? (props.expense.amount /100).toString() : '',
            createdAt: props.expense? moment(props.expense.createdAt) : moment(),
            calFocused: false,
            error: null
        }
    }
    onDescChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
       if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
           this.setState(() => ({amount}))
       }
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}))
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({calFocused :focused}))
    }
    onSubmit = (e) => {
        e.preventDefault()

        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please provide description and amount'}))
        } else {
            this.setState(() => ({error: null}))
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
            })
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input
                 type='text'
                 placeholder='Descption'
                 autoFocus
                 value={this.state.description}
                 onChange={this.onDescChange}
                />
                <input
                 type='text'
                 placeholder='Amount'
                 value={this.state.amount}
                 onChange={this.onAmountChange}      
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                 />
                <textarea 
                placeholder='Write a note(optional)'
                value={this.state.note}
                onChange={this.onNoteChange}
                ></textarea>
                {this.props.expense ? <button>Save Expense</button>:<button>Add Expense</button> }
                {this.state.error && <h2>{this.state.error}</h2>}
                </form>
            </div>
        )
    }
}