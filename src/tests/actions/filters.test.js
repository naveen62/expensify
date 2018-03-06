import moment from 'moment';
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filter';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'START_DATE',
        date: {
            startDate: moment(0)
        }
    })
})
test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'END_DATE',
        date: moment(0)
    })
})
test('should gen set text filter action object', () => {
    const action = setTextFilter('re');

    expect(action).toEqual({
        type: 'SET_TEXT_FLITER',
        filter: {
            text: 're'
        }
    })
})
test('should gen set text filter when args not provided', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FLITER',
        filter: {
            text: ''
        }
    })
})
test('should sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORTBY_DATE',
        sort: 'date'
    })
})
test('should sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORTBY_AMOUNT',
        sort: 'amount'
    })
})      