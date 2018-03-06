import moment from 'moment';
import filterReducer from '../../reducers/filter';

test('should setup default filter values', () => {
    const state = filterReducer(undefined, {type: '@@INT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})
test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORTBY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
  });
  
  test('should set sortBy to date', () => {
    const currentState = {
      text: '',
      startDate: undefined,
      endDate: undefined,
      sortBy: 'amount'
    };  
    const action = { type: 'SORTBY_DATE' };
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});
test('should set text filter', () => {
    let action = {
        type: 'SET_TEXT_FLITER',
        filter: {
            text: 'test'
        }
    }
    const state = filterReducer(undefined, action);
    expect(state.text).toBe('test')
})
test('should set start date filter', () => {
    let action = {
        type: 'START_DATE',
        date: {
            stateDate: '133'
        }
    }
    const state = filterReducer(undefined, action);
    expect(state.stateDate).toBe('133')
})
test('should set end date filter', () => {
    const date = '1236'
    let action = {
        type: 'END_DATE',
        date
    }
    const state = filterReducer(undefined, action);
    expect(state.endDate).toBe(date)
})