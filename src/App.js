import NavBar from './components/NavBar';
import './App.css';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Experiments from './components/Experiments/Experiments';
import Works from './components/Works/Works';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Intro/>
      <Services/>
      <Experiments/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
    </div>
  );
}

export default App;
