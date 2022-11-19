import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { App } from '../App'
import { NavBar } from '../components/NavBar'
import { Colisiones } from '../pages/Colisiones'
import { ConservacionEnergia } from '../pages/ConservacionEnergia'
import { Home } from '../pages/Home'
import { MomentoAngular } from '../pages/MomentoAngular'
import { MomentoLineal } from '../pages/MomentoLineal'
import { TrabajoEnergiaCinetica } from '../pages/TrabajoEnergiaCinetica'

export const AppRouter = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='*' element={<Navigate to={'/home'}/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/momento-lineal' element={<MomentoLineal/>}></Route>
        <Route path='/trabajo-energia-cinetica' element={<TrabajoEnergiaCinetica/>}></Route>
        <Route path='/conservacion-energia' element={<ConservacionEnergia/>}></Route>
        <Route path='/momento-angular' element={<MomentoAngular/>}></Route>
        <Route path='/colisiones' element={<Colisiones/>}></Route>
      </Routes>
    </>
  )
}
