import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDisplay />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;