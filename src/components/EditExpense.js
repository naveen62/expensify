import React from  'react'
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expense'

export class EditExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.match.params.id, expense)
        this.props.history.push('/')
    }
    handleRemove = () => {
        this.props.removeExpense(this.props.match.params.id)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <ExpenseForm
                 expense={this.props.expense}
                 onSubmit={this.onSubmit} />
                    <button onClick={this.handleRemove} >Remove</button>       
            </div>
        ) 
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (id) => dispatch(removeExpense({id}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
