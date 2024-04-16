import { useState } from 'react'
import searchBar from './components/searchBar'
import imageList from './components/imageList'
import searchImage from './api'

import './App.css'


function App() {
  const [images, setImages] = useState ([])

  const handleSubmit = async(term) =>{
    console.log('usted esta buscando con:', term)
  }

  return (
    <div>
      <h1>App</h1>
      <searchBarc onSubmit={handleSubmit} />
    </div>
  )
}


export default App


