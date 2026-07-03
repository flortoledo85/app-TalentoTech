import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, rolesAllowed }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading... </div>;
    }

    if (!user || (rolesAllowed && !rolesAllowed.includes(user.rol))) {
        return <Navigate to='/login' />;
    }
    return <>{ children }</>;
};

export default ProtectedRoute;