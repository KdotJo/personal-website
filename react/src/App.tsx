import About from './pages/about/about'
import Home from './pages/home/home'
import Projects from './pages/projects/projects'
import Navbar from './components/navbar/navbar'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
