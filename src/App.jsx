import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Home from './home/Home'

function App() {

  return (
    <>
    <Home/>
   </>
  )
}

export default App
