import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login/login'

import Contact from './Contact/contact'
import About from './About/about'
import Jobs from './Jobs/job'
import Layout from './Layout/Layout'
import Home from './Home/home'

const App = () => {


  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Login/>}/>
      <Route path="layout" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="layout/about" element={<About/>}/>
      <Route path="layout/jobs" element={<Jobs/>}/>
      <Route path="layout/home" element={<Home/>}/>
      <Route path="layout/contact" element={<Contact/>}/>
      
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App