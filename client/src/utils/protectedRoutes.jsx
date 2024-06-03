import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { userContext } from '../context/userContextProvider';


const ProtectedRoutes = () => {
    const { user } = useContext(userContext);

    return user ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes