import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from "../selectors/expenses";
import getExpenseTotal from '../selectors/selectExpenseTotal';
import numeral from 'numeral'

class ExpensesSummary extends React.Component {

    render() {
        return (
            <div>
                <h3> Viewing {this.props.expenses.length} {this.props.expenses.length > 1 ? 'expenses' : 'expense' } totalling  {numeral(this.props.totalExpenses / 100).format('$0,0.00')} </h3>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filter),
        totalExpenses: getExpenseTotal(state.expenses)
    }
}
export default connect(mapStateToProps)(ExpensesSummary);