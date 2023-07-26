import React from "react";
import { Carousel } from "react-bootstrap";
import Imgone from "../../../../Assets/images/FlightImage.jpg";
import Imgtwo from "../../../../Assets/images/banner2.jpg";
import Imgthree from "../../../../Assets/images/banner3.jpg";
import "./Banner.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Banner() {
  let history = useHistory();
  return (
    <div className="caro">
      <Carousel fade className="carousel h-25">
        <Carousel.Item className="carousel-item">
          <img className="d-block im  w-100" src={Imgone} alt="First slide" />

        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
