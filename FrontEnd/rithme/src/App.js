import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Slider from './components/Slider/Slider';
import Navbar from './components/Navbar/Navbar';
import Artist from './pages/Artist/Artist';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    // <ChakraProvider>
    <div className="App">

      <Router>
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}/>
            <Route path='/a' element={<Slider></Slider>}/>
            <Route path='/navbar' element={<Navbar></Navbar>}/>
            <Route path='/artist' element={<Artist></Artist>}/>
          </Routes> 
      </Router>
    </div>
    // </ChakraProvider>
  );
}

export default App;
