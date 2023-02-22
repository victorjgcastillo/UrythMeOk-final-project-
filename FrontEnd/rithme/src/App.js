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
import Artist from './pages/Artist/Artist';
import * as React from 'react';
import PayPage from './pages/PayPage/PayPage';
import RequireAuth from './components/RequireAuth/RequireAuth';
import LogOut from './components/LogOut/LogOut';
import HallsPage from './pages/HallsPage/HallsPage';
import MyConcertsPage from './pages/MyConcertsPage/MyConcertsPage';
import MyConcertPage from './pages/MyConcertPage/MyConcertPage';
import AfterPayPage from './pages/AfterPayPage/AfterPayPage';
import TicketsDetailsPage from './pages/TicketsDetailPage/TicketsDetailsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";                                         
import PersonalYconex from './pages/Configuration/Configuration';
import Plataformas from './pages/Plataformas/Plataformas';
import Loading from './pages/Loading/Loading';
         

function App() {

  const [jwt, setJwt] = useState(localStorage.getItem('token') || null);

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <div className="App">
        <Router>
            <Routes>
              <Route path='/' element={<HomePage></HomePage>}/>
              <Route path='/concerts' element={<ConcertsPage/>}/>
              <Route path='/artists' element={<ArtistsPage/>}/>
              <Route path='/halls' element={<HallsPage></HallsPage>}/>

              <Route path='/register' element={<RegisterPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/logout' element={<LogOut></LogOut>}/>

              <Route path='/artistDetails' element={<ArtistDetailsPage></ArtistDetailsPage>}/>

              <Route path='/artist/:id' element={<Artist></Artist>}/>
              <Route path='/artist' element={<Artist></Artist>}/>
              
              <Route path='/concerts/buy/:concertId' element={<RequireAuth><PayPage></PayPage></RequireAuth>}/>
              <Route path='/concerts/buy2' element={<RequireAuth><AfterPayPage/></RequireAuth>}/> 
              <Route path='/concerts/:id' element={<TicketsPage></TicketsPage>}/>

              <Route path='/profile' element={<RequireAuth><ProfilePage/></RequireAuth>}/>

              <Route path='/my-concerts/tickets/:id' element={<RequireAuth><MyConcertPage/></RequireAuth>}/>
              <Route path='/my-concerts-detail/:id' element={<TicketsDetailsPage/>}/>
              <Route path='/my-concerts' element={<RequireAuth><MyConcertsPage/></RequireAuth>}/>

              <Route path='/config' element={<RequireAuth><PersonalYconex/></RequireAuth>}/>
              <Route path='/config/music-platforms' element={<RequireAuth><Plataformas/></RequireAuth>}/>

              <Route path='/inicio' element={<Loading/>}/>
            </Routes> 
        </Router>
      </div>
    </JwtContext.Provider>
  );
}

export default App;
