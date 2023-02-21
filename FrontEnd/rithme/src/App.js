import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ArtistDetailsPage from './pages/ArtistDetailPage/ArtistDetailsPage';
import TicketsPage from './pages/TicketsPage/TicketsPage';
import HomePage from './pages/HomePage/HomePage';
import { useState } from 'react';
import { JwtContext } from './shared/contexts/JwtContext';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ConcertsPage from './pages/ConcertsPage/ConcertsPage';
import ArtistsPage from './pages/ArtistsPage/ArtistsPage';
import Navbar from './components/Navbar/Navbar';
import Artist from './pages/Artist/Artist';
import * as React from 'react';
import PayPage from './pages/PayPage/PayPage';
import RequireAuth from './components/RequireAuth/RequireAuth';
import LogOut from './components/LogOut/LogOut';
import HallsPage from './pages/HallsPage/HallsPage';
import ConcertsPage2 from './pages2/ConcertsPage2/ConcertsPage2';
import MyConcertsPage from './pages/MyConcerts/MyConcertsPage';

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
              <Route path='/artist/:id' element={<Artist></Artist>}/>
              <Route path='/concerts/buy/:concertId' element={<RequireAuth><PayPage></PayPage></RequireAuth>}/>
              <Route path='/logout' element={<LogOut></LogOut>}/>
              <Route path='/artist' element={<Artist></Artist>}/>
              <Route path='/halls' element={<HallsPage></HallsPage>}/>
              <Route path='/my-concerts/:id' element={<MyConcertsPage/>}/>

              <Route path='/concerts2' element={<ConcertsPage2/>}/>
            </Routes> 
        </Router>
      </div>
    {/* </ChakraProvider> */}
    </JwtContext.Provider>
  );
}

export default App;
