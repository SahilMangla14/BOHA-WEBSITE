import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Slider from './components/Slider';
import Topbar from './components/Topbar';
import Home from './components/Home';
import About from './components/About'
import Message from './components/Message';
import Hostel from './components/Hostel';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Home />
      <About />
      <Message/>
      <Hostel/>
      <Events />
      <Gallery />
      <Footer/>
    </div>
  );
}

export default App;
