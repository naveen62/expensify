import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from "../selectors/expenses";
import getExpenseTotal from '../selectors/selectExpenseTotal';
import numeral from 'numeral'
import {Link} from 'react-router-dom';

class ExpensesSummary extends React.Component {

    render() {
        return (
            <div className='page-header'>
                <div className='content-container' >
                    <h1 className='page-header__title'> Viewing <span>{this.props.expenses.length}</span> {this.props.expenses.length > 1 ? 'expenses' : 'expense' } totalling  <span>{numeral(this.props.totalExpenses / 100).format('$0,0.00')}</span></h1>                
                    <div className='page-header__actions'>
                        <Link to='/create' className='box-layout__button' >Add Expense</Link>
                    </div>
                </div>
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