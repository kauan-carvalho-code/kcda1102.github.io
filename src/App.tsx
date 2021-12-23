// Components
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
// CSS
import './styles/global.scss';



function App() {
  return (
    <>
     <NavBar />
     <main>
       <Home />
       <About />
       <Technologies />
       <Projects />
       <Contact />
     </main>
    </>
  );
}

export default App;
