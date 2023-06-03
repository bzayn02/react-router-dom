import { Hero } from './components/hero/Hero'
import { Skills } from './components/sections/skills/Skills'
import { Projects } from './components/sections/projects/Projects'
import { About } from './components/sections/about/About'
import { Contact } from './components/sections/contact/Contact'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="skills" element={<Skills />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    )
}

export default App
