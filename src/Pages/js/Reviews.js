import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import "../css/reviews.css"

const Reviews = () => {
    return (
        <div id="reviews-site">
            <div id="reviews-text">
                <h1>Look at our reviews</h1><br/>
            </div>
            <div id="reviews-container-site">
                <div className="box">
                    <div className="rev-img-site">
                    <img src={process.env.PUBLIC_URL + `../Images/AndrzejD.jpg`} alt="AndrzejD" className="images"></img>
                    </div>
                    <h2>Andrzej</h2>
                    <div className="stars">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <p>Was extremely easy to book a rental vehicle and pay therefore. I hope and trust that the counter staff and actual rental will be just as smooth sailing. I definitly like it.</p>
                </div>
                <div className="box">
                    <div className="rev-img-site">
                    <img src={process.env.PUBLIC_URL + `../Images/Katarzyna.jpg`} alt="Katarzyna" className="images"></img>
                    </div>
                    <h2>Katarzyna</h2>
                    <div className="stars">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <p>Experience was great traveling with this cabs service rental. The rates were affordable, driver was good, and the overall experience was also awesome. I have used this car rental service more than twice and have found it always convenient.</p>
                </div>
                <div className="box">
                    <div className="rev-img-site">
                        <img src={process.env.PUBLIC_URL + `../Images/MaciejN.jpg`} alt="MaciejN" className="images"></img>
                    </div>
                    <h2>Maciej</h2>
                    <div className="stars">
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

    )
}

export default Reviews
