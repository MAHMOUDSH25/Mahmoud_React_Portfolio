import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/LayoutIndex.js'
import Home from './components/Home/HomeIndex'
import About from './components/About/AboutIndex'
import Contact from './components/Contact/ContactIndex'
// import { Map, TileLayer } from 'react-leaflet';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
