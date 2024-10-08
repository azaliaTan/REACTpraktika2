import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from '../components/Header/Header'
import { Baner } from '../components/Baner/Baner'
import { Katalog } from '../components/Katalog/Katalog'


function App() {
 

  return (
    <>
    <Header/>
    <Baner/>
    <Katalog/>
     
    </>
  )
}

export default App
