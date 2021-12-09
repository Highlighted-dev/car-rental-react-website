import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ImageSlider.css"

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div id="slider">
          <span>Look at our</span>
          <h1>Featured Cars</h1><br/>
          <Slider {...settings}>
            <div>
              <img src={process.env.PUBLIC_URL + `../Images/car1.jpg`} alt="car1" className="sliderImage"></img>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + `../Images/car2.jpg`} alt="car2" className="sliderImage"></img>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + `../Images/car3.jpg`} alt="car3" className="sliderImage"></img>
            </div>
          </Slider>
        </div>
      );
}

export default ImageSlider
