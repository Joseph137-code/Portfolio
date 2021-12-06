
import './App.css';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import Cursos from './components/cursos/Cursos';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Cursos/>
    <Portfolio/>
    <Contact/>
    </>
  );
}

export default App;
