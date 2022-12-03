import React,{lazy,Suspense,useState,useEffect} from 'react'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'

import LoadingComponent from './components/LandingPages/LoadingComponent'
import './styles/App.scss'


function App() {

  const ErroPage = lazy(() => import('./components/LandingPages/ErroPage'))
  const LandingPage = lazy(() => import('./components/LandingPages/LandingPage'))
  const ProjectList = lazy(() => import('./components/PortfolioPages/ProjectList'))
  return (
 
    <Suspense fallback={<LoadingComponent/>}>
        <Routes>
          <Route path="*" element={<ErroPage/>} />
            <Route path="/portfolio/" element={<LandingPage />}/>
            <Route path="/projectlist"  element={<ProjectList/>}/>
        </Routes>
    </Suspense>
 
  )
}

export default App
