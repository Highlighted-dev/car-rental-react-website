import './App.css';
import NavBar from './NavBar';

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <div id="home">
        <div id="app-text-container">
          <div id="app-main-text">
            <h1><span>Looking</span><br></br>For a car?</h1>
          </div>
        </div>
        <div id="image">
         {/*Image*/}
        </div>
      </div>
    </div>
  );
}

export default App;
