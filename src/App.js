import './App.scss'
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import TechList from './components/TechList/TechList';
import ProjectList from './components/ProjectList/ProjectList';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="app">
      <Header/>
      <main className="main">
        <AboutMe/>
        <TechList/>
        <ProjectList/>
        <Form/>
      </main>
    </div>
    
  );
}

export default App;
