import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header/>
       <Hero/>
       <Footer/>
    </>
  )
}

export default App
