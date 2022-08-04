import React from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "redux/store"

const PrivateRoute = ({ page }: { page: JSX.Element }) => {
    const { user, isSuccess } = useSelector((state: RootState) => state.auth)
    const token = localStorage.getItem("jwtTokenId")

    return token ? page : <Navigate replace to="/login" />
}

export default PrivateRoute