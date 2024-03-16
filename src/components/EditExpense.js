import React from "react";
import { useParams } from "react-router-dom";

const EditExpense = (props) => {
    let { id } = useParams();
    console.log(id);

    return (
        <div>
            This is from my EditExpense comp.
        </div>
    )
};

export default EditExpense;