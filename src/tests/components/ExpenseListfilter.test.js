import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment'
import {ExpenseListfilter} from '../../components/ExpenseListfilter';
// import expenses from '../fixtures/expenses';
import { filters, alTfilters } from "../fixtures/filter";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setEndDate = jest.fn()
    setStartDate = jest.fn()
    wrapper = shallow(<ExpenseListfilter 
    filter={filters} 
    setTextFilter={setTextFilter} 
    sortByAmount={sortByAmount}
    sortByDate={sortByDate}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    />)
})
test('should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot()
})
test('should render ExpenseListFilter with alt data correctly', () => {
    wrapper.setProps({
        filter: alTfilters
    })
    expect(wrapper).toMatchSnapshot()
})
test('should handle text chnage', () => {
    const value = 'bills'
    wrapper.find('input').simulate('change', {
        target: {value}
    })
    expect(setTextFilter).toHaveBeenCalledWith(value);  
})
test('should sortBy date', () => {
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByDate).toHaveBeenCalled()
})
test('should sortBy Amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByAmount).toHaveBeenCalled()
})
test('should handle date change', () => {
    const date = {
        startDate: moment(0),
        endDate: moment(0).add(2, 'days')
    }
    wrapper.find('DateRangePicker').prop('onDatesChange')(date);
    expect(setStartDate).toHaveBeenCalledWith(date.startDate);
    expect(setEndDate).toHaveBeenCalledWith(date.endDate)
})
test('should handle date focus change', () => {
    const cal = true
    wrapper.find('DateRangePicker').prop('onFocusChange')(cal)
    expect(wrapper.state('calendarFocused')).toBe(true);
})