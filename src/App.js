import NavBar from './components/NavBar';
import './App.css';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Intro/>
      <Services/>
    </div>
  );
}

export default App;
