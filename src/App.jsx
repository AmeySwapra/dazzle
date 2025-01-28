import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import DesignPage from './pages/DesignPage'
import ContactPage from './pages/ContactPage'
import CostCalculatorPage from './pages/CostCalculatorPage'
import ConstructionPackagePage from './pages/ConstructionPackagePage'
import Pune from './pages/Pune'
import ChhatrapatiSambhajinagar from './pages/ChhatrapatiSambhajinagar'

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/services' element={<ServicePage/>}/>
          <Route path='/design-cost' element={<DesignPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/cost-calulator' element={<CostCalculatorPage/>}/>
          <Route path='/packages' element={<ConstructionPackagePage/>}/>
          <Route path='/pune' element={<Pune/>}/>
          <Route path='/chhatrapati-sambhajinagar' element={<ChhatrapatiSambhajinagar/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App