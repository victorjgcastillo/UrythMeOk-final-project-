import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">

      <Router>
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}/>

          </Routes> 
      </Router>
    </div>
  );
}

export default App;
