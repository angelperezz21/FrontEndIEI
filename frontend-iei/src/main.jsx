import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Index'

import App from './App'
import Cargar from './Cargar'
import MapWrapper from './MapWrapper'
import { Route, Routes, Navigate } from "react-router-dom"
import { BrowserRouter, HashRouter } from "react-router-dom"

import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Index></Index>
    </BrowserRouter>
    //<Cargar></Cargar>
)
