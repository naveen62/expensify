import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListitems} from '../../components/ExpenseListitems';
import expenses from '../fixtures/expenses';

test('should render ExpenseListitems', () => {
    const wrapper = shallow(<ExpenseListitems {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})