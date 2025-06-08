import { useState } from 'react'
 
import './App.css'
import Users from './components/Users/Users'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
   <div>
    <Navbar/>
    <Users/>
   </div>
  )
}

export default App 