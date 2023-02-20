import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage';
import ArtistDetailsPage from './pages/ArtistDetailsPage';
import TicketsPage from './pages/TicketsPage';
// import HomePage from './pages/HomePage/HomePage';
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

            <Route path='/artistDetails' element={<ArtistDetailsPage></ArtistDetailsPage>}/>
            <Route path='/tickets' element={<TicketsPage></TicketsPage>}/>

            <Route path='/navbar' element={<Navbar></Navbar>}/>
            <Route path='/artist' element={<Artist></Artist>}/>

          </Routes> 
      </Router>
    </div>
    // </ChakraProvider>
  );
}

export default App;
