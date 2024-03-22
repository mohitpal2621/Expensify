import React from "react";
import moment from "moment";
import curr from "../format/currFormat";
import { Link } from "react-router-dom";


const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {curr.format(amount).replace("INR", "Rs.")} 
            - 
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
)

export default ExpenseListItem;