import React from 'react';
import {connect} from 'react-redux';
import ExpenseListitems from './ExpenseListitems';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {props.expenses.length === 0 ? (
            <p>No Expenses</p>
        ) : (
            props.expenses.map((expense) => <ExpenseListitems key={expense.id} {...expense} /> )
        ) }
        
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filter)
    }
} 
export default connect(mapStateToProps)(ExpenseList);
