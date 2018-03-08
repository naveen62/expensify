import getExpenseTotal from '../../selectors/selectExpenseTotal';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const total = getExpenseTotal([]);
    expect(total).toBe(0);
})
test('should add up correctly with multiple expenses', () => {
    const total = getExpenseTotal(expenses);
    expect(total).toBe(114195)
})
test('should correctly add up with single expense', () => {
    const total = getExpenseTotal([expenses[0]])
    expect(total).toBe(195);
})