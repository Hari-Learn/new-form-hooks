import { useState } from 'react'

import './App.css'
import ReactForms from './comp/ReactForms'
import PasswordForms from './comp/PasswordForms'
import CheckboxForms from './comp/CheckboxForms'

function App() {
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <ReactForms></ReactForms>

      <PasswordForms></PasswordForms>

      <CheckboxForms></CheckboxForms>
    </>
  )
}

export default App
