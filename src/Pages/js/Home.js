import "../css/Home.css"
import NavBar from '../../Components/NavBar';
import {BiMap} from 'react-icons/bi';
import {AiOutlineCalendar, AiFillCar, AiFillStar, AiOutlineStar} from 'react-icons/ai';
import ImageSlider from "../../Components/ImageSlider";

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
        <div id="imageSlider">
            <ImageSlider/>
        </div>
        
        <div id="reviews">
            <div id="heading">
                <span>Reviews</span>
                <h1>What Our Customer Say</h1>
            </div>
            <div id="reviews-container">
                <div className="box">
                    <div class="rev-img">
                    <img src={process.env.PUBLIC_URL + `../Images/Andrzej.jpg`} alt="Andrzej" className="images"></img>
                    </div>
                    <h2>Andrzej</h2>
                    <div class="stars">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <p>Was extremely easy to book a rental vehicle and pay therefore. I hope and trust that the counter staff and actual rental will be just as smooth sailing. I definitly like it.</p>
                </div>
                <div className="box">
                    <div class="rev-img">
                    <img src={process.env.PUBLIC_URL + `../Images/Katarzyna.jpg`} alt="Katarzyna" className="images"></img>
                    </div>
                    <h2>Katarzyna</h2>
                    <div class="stars">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <p>Experience was great traveling with this cabs service rental. The rates were affordable, driver was good, and the overall experience was also awesome. I have used this car rental service more than twice and have found it always convenient.</p>
                </div>
                <div className="box">
                    <div class="rev-img">
                        <img src={process.env.PUBLIC_URL + `../Images/Maciej.jpg`} alt="maciej" className="images"></img>
                    </div>
                    <h2>Maciej</h2>
                    <div class="stars">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <p>The agents were real professionals, friendly and supportive. However, their good performance was put down by the system as the online chat took more than 2 hours for addressing my queries.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
