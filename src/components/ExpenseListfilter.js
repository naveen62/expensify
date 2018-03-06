import React from 'react';
import {connect} from 'react-redux';
import {setStartDate, setEndDate ,setTextFilter, sortByAmount, sortByDate } from "../actions/filter";
import {DateRangePicker} from 'react-dates'

export class ExpenseListfilter extends React.Component {
   state = {
       calendarFocused: null
   }
   onDatesChange = ({startDate, endDate}  ) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
   }
   onFocusChange = (cal) => {
       this.setState(() => ({calendarFocused: cal}))
   }    
   onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
   }
   onSortChange = (e) => {
    if(e.target.value === 'date') {
        this.props.sortByDate()
    } else if(e.target.value === 'amount') {
        this.props.sortByAmount()
    }
    }
    render() {
        return (
            <div>
                <input type='text' value={this.props.filter.text} onChange={this.onTextChange} />
                <select onChange={this.onSortChange}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filter.startDate}
                    endDate={this.props.filter.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    showClearDates={true}
                    isOutsideRange={() => false}
                 /> 
            </div>
        )
    }
}



const mapsStateToProps = (state) => {
    return {
        filter: state.filter
    }
}
const mapDispatchToProps = () => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})
export default connect(mapsStateToProps, mapDispatchToProps)(ExpenseListfilter)