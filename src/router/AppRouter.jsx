import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { App } from '../App'
import { NavBar } from '../components/NavBar'
import { Home } from '../pages/Home'

export const AppRouter = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='*' element={<Navigate to={'/home'}/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/momento-lineal' element={<App/>}></Route>
        <Route path='/trabajo-energia-cinetica' element={<App/>}></Route>
        <Route path='/conservacion-energia' element={<App/>}></Route>
        <Route path='/momento-angular' element={<App/>}></Route>
        <Route path='/variacion-energia-cinetica' element={<App/>}></Route>
      </Routes>
    </>
  )
}
