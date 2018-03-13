import React from  'react'
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expense'

export class EditExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.match.params.id, expense).then(() => {
            this.props.history.push('/')
        })
    }
    handleRemove = () => {
        this.props.startRemoveExpense(this.props.match.params.id).then(() => {
            this.props.history.push('/')
        })
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
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
