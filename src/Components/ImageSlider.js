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
          <h2> Featured Cars</h2><br/>
          <Slider {...settings}>
            <div>
              <img src={process.env.PUBLIC_URL + `../Images/car1.jpg`} alt="car1" width="800px" height="450px"></img>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + `../Images/car2.jpg`} alt="car2" width="800px" height="450px"></img>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + `../Images/car3.jpg`} alt="car3" width="800px" height="450px"></img>
            </div>
          </Slider>
        </div>
      );
}

export default ImageSlider
