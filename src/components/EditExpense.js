// Using Hooks instead of connect()
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import Modal from 'react-modal';

export const EditExpense = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const nav = useNavigate();
    const exp = useSelector(state => state.expenses.find((exp) => exp.id === id));
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };


    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                    expense={exp}
                    onSubmit={(exp) => {
                        dispatch(startEditExpense(id, exp));
                        nav("/");
                    }}
                />
                <button className="button button--secondary" onClick={openModal}
                >
                    Remove
                </button>
                <Modal
                    className="modal"
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Confirm Remove Expense"
                >
                    <h2 className="modal-header">Confirm Remove Expense</h2>
                    <p className="modal-line">Are you sure you want to remove this expense?</p>
                    <button className="modal-yes" onClick={() => {
                        dispatch(startRemoveExpense(id));
                        nav("/");
                        closeModal();
                    }}>
                        Yes
                    </button>
                    <button className="modal-cancel" onClick={closeModal}>Cancel</button>
                </Modal>
            </div>
        </div>
    );
};

export default EditExpense;