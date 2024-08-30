import { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'

function App() {


  const [car, setCar] = useState([])

  useEffect(()=> {
    fetch('car.json')
    .then( res => res.json())
    .then( data => setCar(data))
  },[])

  // const route = createBrowserRouter([
  //   {
      
  //   }
  // ])

  return (
    <div>
      <h1>Vite + React {car.length}</h1>
    </div>
  )
}

export default App
