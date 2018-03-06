import moment from 'moment';

// filter
const filterReducerState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}
export default (state = filterReducerState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FLITER':
            return {
                ...state,
                ...action.filter
            }
        case 'SORTBY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORTBY_DATE':
            return{
                ...state,
                sortBy: 'date'
            }
        case 'START_DATE':
            return {
                ...state,
                ...action.date
            }
        case 'END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
}
// export default filterReducer