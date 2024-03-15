import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>INFO</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const requireAuthentication = (WrappedComp) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComp {...props} /> : <p>No Authentication</p>}
        </div>
    );
}

const RequireAuth = requireAuthentication(Info);

// const withAdminWarning = (WrappedComp) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>This is private info. Please don't share.</p>}
//             <WrappedComp {...props} />
//         </div>
//     )
// };



// const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<RequireAuth isAuth={false} info="This is the details" />, document.getElementById("app"));