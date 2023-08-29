import './App.scss'
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import TechList from './components/TechList/TechList';

function App() {
  return (
    <div className="app">
      <Header/>
      <main className="main">
        <AboutMe/>
        <TechList/>
      </main>
    </div>
    
  );
}

export default App;
