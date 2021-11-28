import './App.css';
import NavBar from './NavBar';
import Home from './Pages/Home';
import Cars from './Pages/Cars';
import Services from './Pages/Services';
import About from './Pages/About';
import Reviews from './Pages/Reviews';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
      <NavBar />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path='/Home' element={<Home/>} />
                <Route exact path='/Ride' element={<Cars/>} />
                <Route exact path='/Services' element={<Services/>} />
                <Route exact path='/About' element={<About/>} />
                <Route exact path='/Reviews' element={<Reviews/>} />
            </Routes>
      </BrowserRouter>
      </div>
    
  );
}

export default App;
