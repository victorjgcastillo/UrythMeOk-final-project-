import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage';
import Slider from './components/Slider/Slider';
import { useState } from 'react';
import { JwtContext } from './shared/contexts/JwtContext';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {

  const [jwt, setJwt] = useState(localStorage.getItem('token') || null);

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}/>
            <Route path='/a' element={<Slider></Slider>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
          </Routes> 
      </Router>
    </div>
    </JwtContext.Provider>
  );
}

export default App;
