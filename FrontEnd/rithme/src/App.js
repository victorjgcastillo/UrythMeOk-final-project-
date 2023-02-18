import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage';
import Slider from './components/Slider/Slider';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">

      <Router>
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}/>
            <Route path='/a' element={<Slider></Slider>}/>
            <Route path='/navbar' element={<Navbar></Navbar>}/>
          </Routes> 
      </Router>
    </div>
  );
}

export default App;
