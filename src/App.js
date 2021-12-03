import './App.css';
import NavBar from './NavBar';
import Home from './Pages/Home';
import Cars from './Pages/Cars';
import Services from './Pages/Services';
import About from './Pages/About';
import Reviews from './Pages/Reviews';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './AuthProvider';

function App() {
  return (
  <AuthProvider>
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
                <Route exact path='/SignUp' element={<SignUp/>} />
                <Route exact path='/SignIn' element={<SignIn/>} />
            </Routes>
      </BrowserRouter>
      </div>
    </AuthProvider>
    
  );
}

export default App;
