import './App.scss'
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="app">
      <Header/>
      <main className="main">
        <AboutMe/>
      </main>
    </div>
    
  );
}

export default App;
