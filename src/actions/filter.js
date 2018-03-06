
// SET_TEXT
 const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FLITER',
    filter: {
        text,
    }
})
// SORTBY_AMOUNT
const sortByAmount = () => ({
    type: 'SORTBY_AMOUNT',
    sort: 'amount'
}) 
// SORTBY_DATE
const sortByDate = () => ({
    type: 'SORTBY_DATE',
    sort: 'date'
})
// START_DATE
const setStartDate = (date = undefined) => ({
    type: 'START_DATE',
    date: {
        startDate: date
    }
})
// END_DATE
const setEndDate = (date = undefined) => ({
    type: 'END_DATE',
    date
})
export {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate};