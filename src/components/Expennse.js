import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListfilter  from './ExpenseListfilter';
import ExpensesSummary from './ExpensesSummary';

export const Expense = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListfilter />
        <ExpenseList />
    </div>
)
export default Expense;