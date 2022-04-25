import React from "react";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";

const CarouselMain = () => {
  return (
    <div className="carousel-main">
      <h4 className="carousel-title">Last Projects</h4>
      <Carousel className="carousel-div">
        <Carousel.Item interval={3500} className="carousel-item">
          <img
            className="d-block w-100"
            src="../../sophieSlide.png"
            alt="slide One"
          />
          {/* <Carousel.Caption>
            <p>HTML / CSS</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={3500} className="carousel-item">
          <img
            className="d-block w-100"
            src="../../guitarSlide.png"
            alt="slide Two"
          />
          {/* <Carousel.Caption>
            <p>HTML / CSS</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={3500} className="carousel-item">
          <img
            className="d-block w-100"
            src="../../toDoSlide.png"
            alt="slide Three"
          />
          {/* <Carousel.Caption>
            <p>HTML / CSS</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={3500} className="carousel-item">
          <img
            className="d-block w-100"
            src="../../blogSlide.png"
            alt="slide Four"
          />
          {/* <Carousel.Caption>
            <p>HTML / CSS</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselMain;
