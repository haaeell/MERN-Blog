import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Login, Register } from '../../pages'

const Routess = () => {
    return (

        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/" element={<Home />} />
        </Routes>


    )
}

export default Routess