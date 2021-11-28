import './Home.css';
import NavBar from '../NavBar';

const Home = () => {
  return (
    <div>
    <NavBar />
      <div id="home">
        <div id="app-text-container">
          <div id="app-main-text">
            <h1><span>Looking</span><br></br>For a car?</h1>
          </div>
          <div id="form-container">
          <form action="">
          <div className="input-box">
            <span>Location</span>
            <input type="search" name="" id="" placeholder="Search Places"></input>
          </div>
          <div className="input-box">
            <span>Pick-Up Date</span>
            <input type="date" name="" id=""></input>
          </div>
          <div className="input-box">
            <span>Return Date</span>
            <input type="date"></input>
          </div>
          <input type="submit"  name="" id="btn"></input>
          </form>
        </div>
        </div>
        <div id="image">
         {/*Image*/}
        </div>

      </div>
    </div>
  );
}

export default Home;
