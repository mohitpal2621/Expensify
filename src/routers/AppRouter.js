import React from 'react';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import EditExpense from '../components/EditExpense';
import AddExpense from '../components/AddExpense';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import HelpPage from '../components/HelpPage';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';


const AppRouter = () => (
    <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<ExpenseDashboardPage />} />
                <Route path="/create" element={<AddExpense />} />
                <Route path="/edit" element={<EditExpense />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="*" element={<NotFound />} /> 
            </Routes>
    </BrowserRouter>
);

export default AppRouter;