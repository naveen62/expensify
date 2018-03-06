import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListfilter  from './ExpenseListfilter';

export const Expense = () => (
    <div>
        <ExpenseListfilter />
        <ExpenseList />
    </div>
)
export default Expense;