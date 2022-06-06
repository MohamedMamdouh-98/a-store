import NavBar from './components/NavBar';
import './App.css';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Experiments from './components/Experiments/Experiments';
import Works from './components/Works/Works';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Intro/>
      <Services/>
      <Experiments/>
      <Works/>
    </div>
  );
}

export default App;
