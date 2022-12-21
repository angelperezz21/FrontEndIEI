import Cargar from "./Cargar"
import App from "./App"
import { Route, Routes, Navigate } from "react-router-dom"
import React, { Component, useState, useEffect } from 'react';


function index(){

    return(
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/busqueda"/>} />
                <Route path="/cargar" element={<Cargar/>} />
                <Route path="/busqueda" element={<App/>} />
            </Routes>
        </div>
    )
}

export default index;