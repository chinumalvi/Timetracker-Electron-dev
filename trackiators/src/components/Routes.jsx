import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Activity from './pages/Activity'
import Dashboard from './pages/activitytracker/activitydashboard/Dashboard'

const Routes = () => {
  return (
     
       <Routes>
        <Route path="/activity" element={<Activity/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
   
  )
}

export default Routes
