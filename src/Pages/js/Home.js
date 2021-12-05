import "../css/Home.css"
import NavBar from '../../Components/NavBar';
import {BiMap} from 'react-icons/bi';
import {AiOutlineCalendar, AiFillCar} from 'react-icons/ai';

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
                <form>
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
                <input type="submit"  name="" id="btn" value="Rent"></input>
                </form>
            </div>
        </div>
        <div id="image">
         {/*Image*/}
        </div>
      </div>
      <div id="howToRent">
        <div id="heading">
            <span>How It works</span>
            <h1>Rent A Car With 3 Easy Steps</h1>
        </div>
        <div id="howToRent-container">
            <div className="box">
                <BiMap size = {50} className="bx"/>
                <h2>Choose a location</h2>
                <p>Lorem ipsum dolor, sit amet consecteur adipiscing elit.</p>
            </div>
            <div className="box">
                <AiOutlineCalendar size = {50} className="bx"/>
                <h2>Pick-up Date</h2>
                <p>Lorem ipsum dolor, sit amet consecteur adipiscing elit.</p>
            </div>
            <div className="box">
                <AiFillCar size = {50} className="bx"/>
                <h2>Book a car</h2>
                <p>Lorem ipsum dolor, sit amet consecteur adipiscing elit.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;