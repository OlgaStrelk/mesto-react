import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, children, ...props }) => {
  return (
    <Route {...props}>
      {loggedIn ? children : <Navigate replace to="/sign-in" />}
    </Route>
  );
};

export default ProtectedRoute;
