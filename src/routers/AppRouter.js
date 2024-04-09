import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { startSetExpenses } from '../actions/expenses';
import { useDispatch } from 'react-redux';
import { login, logout } from '../actions/auth';
import LoginPage from '../components/LoginPage';
import NotFound from '../components/NotFound';
import EditExpense from '../components/EditExpense';
import AddExpense from '../components/AddExpense';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import PublicRoute from './PublicRoute.js';
import PrivateRoute from './PrivateRoute.js';
import LoadingPage from '../components/LoadingPage';


const AppRouter = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if(user){
                dispatch(login(user.uid));
                if (location.pathname === "/") {
                    setLoading(true);
                    navigate("/dashboard");
                }

                dispatch(startSetExpenses())
                .then(() => setLoading(false))
                .catch(error => {
                    console.error("Error fetching expenses:", error);
                    setLoading(false);
                })
            } else{
                dispatch(logout());
                console.log("Logged OUT");
                navigate("/");
            }
        });
        return unsubscribe;
    }, []);

    if(loading) {
        return <LoadingPage />
    }

    return (
        <>
            <Routes >
                <Route element={<PublicRoute/>} >
                    <Route path="/" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute/>}>
                    <Route path="/dashboard" element={<ExpenseDashboardPage />} />
                    <Route path="/create" element={<AddExpense />} />
                    <Route path="/edit/:id" element={<EditExpense />} />v
                </Route>
                <Route path="*" element={<NotFound />} /> 
            </Routes>
        </>
    );
};

export default AppRouter;