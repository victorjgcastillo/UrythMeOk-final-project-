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
import ArtistCard from './components/Cards/ArtistCard';
import 'primeicons/primeicons.css';



//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";  


function App() {

  const [jwt, setJwt] = useState(localStorage.getItem('token') || null);
  const [showDiv, setShowDiv] = useState(true);


  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <div className="App">

      </div>

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
              <Route path='/artistcard' element={<ArtistCard></ArtistCard>}/>

            </Routes> 
        </Router>

    </JwtContext.Provider>
  );
}

export default App;
