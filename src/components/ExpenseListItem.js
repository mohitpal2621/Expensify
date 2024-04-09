import React from "react";
import moment from "moment";
import curr from "../format/currFormat";
import { Link } from "react-router-dom";


const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div className="list-item__div">
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{curr.format(amount).replace("INR", "Rs.")}</h3>
    </Link>
)

export default ExpenseListItem;