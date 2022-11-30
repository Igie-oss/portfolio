import React,{lazy,Suspense,useState,useEffect} from 'react'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'

import LoadingComponent from './components/SharedFiles/LoadingComponent'

import './styles/App.scss'


function App() {

  const ErroPage = lazy(() => import('./components/SharedFiles/ErroPage'))
  const LandingPage = lazy(() => import('./components/LandingPages/LandingPage'))
  const ProjectList = lazy(() => import('./components/PortfolioPages/ProjectList'))
  return (
 
    <Suspense fallback={<LoadingComponent/>}>
        <Routes>
          <Route path="*" element={<Navigate to="/"/>} />
          {/* <Route  path="*"  element={<ErroPage/>}/> */}
            <Route index  element={<LandingPage />}/>
            <Route path="/projectlist"  element={<ProjectList/>}/>
        </Routes>
    </Suspense>
 
  )
}

export default App
