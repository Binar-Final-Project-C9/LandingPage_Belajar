import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Product.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#078739",
        margin: "10px",
      }}
      onClick={onClick}
    />
  );
}

function Product() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="product-section-wrapper" id="course">
      <div className="product-section-top">
        <h1 className="primary-heading">
          <span className="highlight-green">Topik</span>{" "}
          <span className="">Pembelajaran</span>{" "}
          <span className="highlight-green">Populer</span>{" "}
        </h1>
        <p className="primary-text">
          Jelajahi topik pembelajaran populer yang paling diminati dari berbagai
          bidang.
        </p>
      </div>
      <div className="container">
        <Slider {...settings}>
          <div className="card shadow-xl">
            <img src="/Images/webdev.jpg" alt="" />
            <div className="card-body">
              <h3>Web Development</h3>
              <p></p>
            </div>
          </div>
          <div className="card">
            <img src="/Images/mobiledev.jpg" alt="" />
            <div className="card-body">
              <h3>Mobile Development</h3>
              <p></p>
            </div>
          </div>
          <div className="card">
            <img src="/Images/uxindo.jpg" alt="" />
            <div className="card-body">
              <h3>UI/UX Design</h3>
              <p></p>
            </div>
          </div>
          <div className="card">
            <img src="/Images/data.jpg" alt="" />
            <div className="card-body">
              <h3>Data Science</h3>
              <p></p>
            </div>
          </div>
          <div className="card">
            <img src="/Images/machine.jpg" alt="" />
            <div className="card-body">
              <h3>Machine Learning</h3>
              <p></p>
            </div>
          </div>
          <div className="card">
            <img src="/Images/iot.jpg" alt="" />
            <div className="card-body">
              <h3>Internet of Things</h3>
              <p></p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Product;
