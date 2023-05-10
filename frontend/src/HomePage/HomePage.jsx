import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Homebody from '../Components/HomeBody/Homebody'

function HomePage() {
  // const [newmovies,setMovies] = useState({})
  return (
    <div>
      <Navbar />
      <Homebody  />
    </div>
  )
}

export default HomePage
