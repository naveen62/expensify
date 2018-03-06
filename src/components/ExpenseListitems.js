import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expense';
import ExpenseList from './ExpenseList';
import { NavLink } from 'react-router-dom';

// const ExpenseListitems = ({description, amount, createdAt}) => (
//     <div>
//         <h1>{description}</h1>
//         <p>{amount} - {createdAt}</p>
//         <button>Remove</button>
//     </div>
// )
class ExpenseListitems extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
            <NavLink to={`/edit/${this.props.id}`} exact={true}>
                <h1>{this.props.description}</h1>
            </NavLink>
                <p>{this.props.amount} - {this.props.createdAt}</p>
            </div>
        )
    }
}
export {ExpenseListitems};
export default connect()(ExpenseListitems)