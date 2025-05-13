import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
    <Card
      author="Jane Doe"
      date="May 14, 2023"
      title="How to Build React Components"
      content="Building React components is essential for creating modern web applications. This guide walks you through the process of creating reusable, maintainable components with proper structure and styling."
    />
    </>
  )
}

export default App
