import React from 'react'
import { Outlet } from 'react-router-dom'
import NavItems from '../components/NavItems'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSprade from './LocationSprade'
import About from './About'
import AppSection from './AppSection'

const Home = () => {
  return (
    <div>
      <NavItems />
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <Register/>
      <LocationSprade/>
      <About/>
      <AppSection/>
    </div>
  )
}

export default Home
