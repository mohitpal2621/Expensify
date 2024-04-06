import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = (props) => {
    if(props.isAuthenticated)
        return <Navigate to='/dashboard'/>;
    else{
        return <Outlet />;
    }
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
