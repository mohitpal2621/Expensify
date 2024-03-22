import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const curr = Intl.NumberFormat("en-IN", {
    style: "currency",           //Decimal, percent or currency
    currency: "INR",             //ISO code for countries' currencies
    currencyDisplay: "symbol",   //symbol, code, name
    useGrouping: "auto",
    minimumIntegerDigits: 1,
    maximumFractionDigits: 10,
    minimumFractionDigits: 2,
});

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {curr.format(amount)} 
            - 
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
)

export default ExpenseListItem;