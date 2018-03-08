import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeral'

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
                <p>{numeral(this.props.amount / 100).format('$0,0.00')} - {moment(this.props.createdAt).format('MMMM Do, YYYY')}</p>
            </div>
        )
    }
}
export {ExpenseListitems};
export default ExpenseListitems