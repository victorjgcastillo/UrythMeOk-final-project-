import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage';
import ArtistDetailsPage from './pages/ArtistDetailsPage';
import TicketsPage from './pages/TicketsPage';

function App() {
  return (
    <div className="App">

      <Router>
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}/>
            <Route path='/artistDetails' element={<ArtistDetailsPage></ArtistDetailsPage>}/>
            <Route path='/tickets' element={<TicketsPage></TicketsPage>}/>
          </Routes> 
      </Router>
    </div>
  );
}

export default App;
