import React from "react"
import { Navigate } from "react-router-dom"
import  useAuth  from 'hooks/useAuth'

const PrivateRoute = ({ page }: { page: JSX.Element }) => {
    const { user, isSuccess } = useAuth();
    const token = localStorage.getItem("jwtTokenId")

    return token ? page : <Navigate replace to="/login" />
}

export default PrivateRoute