import React from 'react';
import {shallow} from 'enzyme';
import {AddExpense} from '../../components/AddExpense';
import expenses from '../fixtures/expenses'

let onSubmit, history, wrapper;
beforeEach(() => {
    onSubmit = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<AddExpense onSubmit={onSubmit} history={history} />)
})
test('should render AddExpensePage Correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[0])
})

