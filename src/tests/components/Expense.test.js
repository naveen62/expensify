import React from 'react';
import {shallow} from 'enzyme';
import {Expense} from '../../components/Expennse';

test('should render Expense dashboard', () => {
    const wrapper = shallow(<Expense />);
    expect(wrapper).toMatchSnapshot()
})