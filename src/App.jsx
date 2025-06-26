
import './App.css';

// components 

import LandingPage from './component/LandingPage.jsx';
import Experience from './component/Experience.jsx';
import Projects from './component/project-section/Projects.jsx';
import Skills from './component/Skills.jsx';
import Education from './component/Education.jsx';


function App() {

  return (
    <>
      <LandingPage />
      <Experience />
      <Projects />
      <Skills />
      <Education />
    </>
  )
}

export default App
