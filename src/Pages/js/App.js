import './App.css';
import NavBar from '../../Components/NavBar';
import Home from './Home';
import Cars from './Cars';
import Services from './Services';
import About from './About';
import Reviews from './Reviews';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AuthProvider from '../../Auth/AuthProvider';

function App() {
  return (
  <AuthProvider>
    <div>
     <BrowserRouter>
      <NavBar />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path='/Home' element={<Home/>} />
                <Route exact path='/Cars' element={<Cars/>} />
                <Route exact path='/Services' element={<Services/>} />
                <Route exact path='/About' element={<About/>} />
                <Route exact path='/Reviews' element={<Reviews/>} />
                <Route exact path='/SignUp' element={<SignUp/>} />
                <Route exact path='/SignIn' element={<SignIn/>} />
                <Route path='/Dashboard' element={<Dashboard/>} />
            </Routes>
      </BrowserRouter>
      </div>
    </AuthProvider>
    
  );
}

export default App;
