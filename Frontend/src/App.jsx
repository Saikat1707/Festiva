import React from 'react'
import '../src/App.css'
import MainPages from './Routes/MainPages'
import Authentication from './pages/Authentication'

const App = () => {
  return (
    <div>
      {/* <Authentication/> */}
      <MainPages/>
    </div>
  )
}

export default App