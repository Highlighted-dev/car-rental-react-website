import React from 'react'
import '../css/About.css'

const About = () => {
    return (
        <div id="about">
            <div id="about-main">
                <h3>About us</h3>
                <h1>Best Car Rental Website in 2021</h1>
            </div>
            <div id="about-us">
                <div id="about-us-img">
                    {/*Image*/}
                </div>
                <div id="about-us-text">
                    <h3>About us</h3>
                    <label>Rentoro is proud to serve customers in the Poland. As part of the largest rental car company in the country, which owns and operates more than 3 thousand vehicles, we’re sure to have a location near you or your travel destination. And while we are an internationally recognized brand, Rentoro remains family-owned with one goal in mind for our customers: to exceed your expectations for service and overall value.</label><br /><br />
                    <label>No matter if you’re visiting for only a few days or staying for a month or more, you can count on us to provide the perfect vehicle for your transportation needs.</label><br /><br />
                    <button id="btn">Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default About
