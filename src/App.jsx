import { useState } from 'react'


import './App.css'


function App() {


  return (
    <div>
      <h1>Hello There</h1>
    </div>
  )
}


export default App


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import searchImage from './api.js'


searchImage()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
