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
            <NavLink className='list-item' to={`/edit/${this.props.id}`} exact={true}>
                <div>
                <h1 className='list-item__title'>{this.props.description}</h1>
                <span className='list-item__sub-title'>{moment(this.props.createdAt).format('MMMM Do, YYYY')}</span>                
                </div>
                <h3 className='list-item__data'>{numeral(this.props.amount / 100).format('$0,0.00')}</h3>
            </NavLink>
        )
    }
}
export {ExpenseListitems};
export default ExpenseListitems