import React from 'react';
import {shallow} from 'enzyme';
import {EditExpense} from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper, match;
beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()}
    match = {params: {id: expenses[0].id}}
    wrapper = shallow(<EditExpense editExpense={editExpense} removeExpense={removeExpense} 
    history={history} match={match} />)
})

test('should render EditExpense correctly', () => {
    expect(wrapper).toMatchSnapshot()
})
test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(editExpense).toHaveBeenCalledWith(match.params.id, expenses[0]);
    expect(history.push).toHaveBeenCalledWith('/');
})
test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenCalledWith(match.params.id);
    expect(history.push).toHaveBeenCalledWith('/');    
})
