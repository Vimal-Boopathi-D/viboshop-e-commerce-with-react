import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavItems from './components/NavItems'
import Home from './home/Home'

function App() {

  return (
    <>
    <NavItems />
    <Home/>
   </>
  )
}

export default App
