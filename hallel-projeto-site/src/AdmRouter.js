import React from 'react'
import {Routes, Route} from "react-router-dom";
import HomeAdm from './pages/Administrador/HomeAdm';
import FormularioAdm from './pages/Administrador/FormularioAdm';

const AdmRouter = () => {
  return (
    <Routes>
        <Route path="" element={<HomeAdm />} />
        <Route path="/formulario" element={<FormularioAdm />} />
    </Routes>
  )
}

export default AdmRouter