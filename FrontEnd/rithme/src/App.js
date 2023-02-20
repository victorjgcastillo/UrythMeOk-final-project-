import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ArtistDetailsPage from './pages/ArtistDetailsPage';
import TicketsPage from './pages/ArtistDetailPage/TicketsPage';
import HomePage from './pages/HomePage/HomePage';
import Slider from './components/Slider/Slider';
import { useState } from 'react';
import { JwtContext } from './shared/contexts/JwtContext';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ConcertsPage from './pages/ConcertsPage/ConcertsPage';
import ArtistsPage from './pages/ArtistsPage/ArtistsPage';
import Navbar from './components/Navbar/Navbar';
import Artist from './pages/Artist/Artist';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';


function App() {

  const [jwt, setJwt] = useState(localStorage.getItem('token') || null);

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      {/* <ChakraProvider> */}
      <div className="App">
        <Router>
            <Routes>
              <Route path='/' element={<HomePage></HomePage>}/>
              <Route path='/register' element={<RegisterPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/concerts' element={<ConcertsPage/>}/>
              <Route path='/artists' element={<ArtistsPage/>}/>
              <Route path='/artistDetails' element={<ArtistDetailsPage></ArtistDetailsPage>}/>
              <Route path='/tickets' element={<TicketsPage></TicketsPage>}/>
              <Route path='/navbar' element={<Navbar></Navbar>}/>
              <Route path='/artist' element={<Artist></Artist>}/>
            </Routes> 
        </Router>
      </div>
      {/* </ChakraProvider> */}
    </JwtContext.Provider>
  );
}

export default App;
