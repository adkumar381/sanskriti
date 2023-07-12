import logo from './logo.svg';
import './App.css';
import Testimonial from './components/Testimonial';
import Placement from './components/Placement';
import Location from './components/Location'
function App() {
  return (
    <div className="App">
      <Testimonial/>
      <Placement/>
      <Location/>
    </div>
  );
}

export default App;
