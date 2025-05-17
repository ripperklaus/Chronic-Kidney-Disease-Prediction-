import { useState } from 'react'
import './App.css'
import InputForm from './Component/Inputform' // ✅ Add this line!

function App() {
  return (
    <>
    <h1 className="page-title">
  Predict Your Possibility of Kidney Disease
</h1>

    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <InputForm />
    </div>
    <div className="page-footer-name">
    Udityanshu Pandey
  </div>
  </>
  )
}

export default App
