import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import profilePic from './assets/profile.jpg'
import './App.css'
import VisitorModal from './components/VisitorModal'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  return (
    <Router>
      <div className="app">
        <header>
          <div className="logo">
            <img 
              src={profilePic} 
              alt="Malay Raval" 
              className="profile-pic"
            />
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add other routes later */}
        </Routes>

        <VisitorModal 
          isOpen={isModalOpen} 
          onSubmitSuccess={() => setIsModalOpen(false)} 
        />
      </div>
    </Router>
  )
}

export default App
