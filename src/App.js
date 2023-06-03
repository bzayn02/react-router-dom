import {Hero} from './components/hero/Hero'
import {Skills} from './components/sections/skills/Skills'
import {Projects} from './components/sections/projects/Projects'
import {About} from './components/sections/about/About'
import {Contact} from './components/sections/contact/Contact'
import {Footer} from './components/footer/Footer'
import {Goup} from './components/go-upBtn/Goup'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Hero />
      
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
        <Goup />
      
    </div>
  );
}

export default App;
