import React from "react";
import Header from '../components/Header';
import { Navigate, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = (props) => {
    if(props.isAuthenticated)
        return <div>
                <Header/>
                <Outlet />
            </div>;
    else{
        return <Navigate to='/'/>;
    }
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
