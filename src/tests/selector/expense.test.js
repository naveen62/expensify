import moment from 'moment'
import selectExpense from '../../selectors/expenses';
import expenses from '../fixtures/expenses'

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

test('should filter by text', () => {
    const filter = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpense(expenses, filter)
    expect(result).toEqual([expenses[2], expenses[1] ])
})
test('should filter by startDate', () => {
    const filter = {
        ...filters,
        startDate: moment(0)
    }
    const result = selectExpense(expenses, filter)
    expect(result).toEqual([expenses[2], expenses[0]])
})
test('should filter by endDate', () => {
    const filter = {
        ...filters,
        endDate: moment(0)
    }
    const result = selectExpense(expenses, filter);
    expect(result).toEqual([expenses[0], expenses[1]])
})
test('should filter by sortby date', () => {
    const filter = {
        ...filters,
    }
    const result = selectExpense(expenses, filter)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
})
test('should filter by sortBy amount', () => {
    const filter = {
        ...filters,
        sortBy: 'amount'
    }
    const result = selectExpense(expenses, filter);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})