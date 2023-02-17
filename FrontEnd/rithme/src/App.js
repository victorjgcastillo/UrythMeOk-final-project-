import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">

      <Router>
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}/>
            <Route path='/a' element={<Slider></Slider>}/>

          </Routes> 
      </Router>
    </div>
  );
}

export default App;
