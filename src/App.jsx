import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Welcome } from './pages/Welcome'
import { Articles } from './pages/Articles';
import { About } from './pages/About';
import { Header } from './components/header/Header';
import { Footer } from './components/Footer';
import { Contact } from './pages/Contact';
// import Con 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' font-inconsolata text-base font-light'>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles/*" element={<Articles />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
