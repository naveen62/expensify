import React from 'react';
import {connect} from 'react-redux';
import ExpenseListitems from './ExpenseListitems';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className='content-container'>
    <div className='list-header'>
        <div className='show-for-mobile'>Expenses</div>
        <div className='show-for-desc'>Expense</div>
        <div className='show-for-desc'>Amount</div>
    </div>
        <div className='list-body'>
        {props.expenses.length === 0 ? (
            <div className='list-item list-item--message   '>
             <span>No Expenses</span>
            </div>
        ) : (
            props.expenses.map((expense) => <ExpenseListitems key={expense.id} {...expense} /> )
        ) }
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filter)
    }
} 
export default connect(mapStateToProps)(ExpenseList);
