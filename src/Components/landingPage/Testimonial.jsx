import React, { Component } from "react";
import Slider from "react-slick";
import testimonials from "../../utils/testimonials.json";
import StarIcon from "@mui/icons-material/Star";

function Star({ value }) {
  let stars = [];
  for (let i = 1; i <= value; i++) {
    stars.push(<StarIcon className="text-yellow-500" key={i} />);
  }
  return stars;
}

function Testimonials() {
  const i = 1;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
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
    <div className="product-section-wrapper mb-32" id="testimonials">
      <div className="product-section-top">
        <h1 className="primary-heading">
          <span className="">Apa yang</span>{" "}
          <span className="highlight-green"> Mereka Katakan</span>{" "}
        </h1>
        <p className="primary-text">
          Pengalaman dari pengguna GoStudy berdasarkan kepuasan yang mereka
          dapat selama belajar di GoStudy.
        </p>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <div className="flex items-center justify-center w-full">
              <div className="max-w-lg py-4 shadow-xl px-8 bg-white rounded-lg mt-16">
                <div className="flex justify-center md:justify-end -mt-16">
                  <img
                    className="w-20 h-20 object-cover rounded-full border-2 border-[#078739]"
                    src={testimonial.image}
                  />
                </div>
                <div>
                  <div className="w-100">
                    <Star value={testimonial.rating} />
                  </div>
                  <p className="mt-2 text-gray-600">
                    {testimonial.description}
                  </p>
                </div>
                <div className="flex justify-end mt-4  items-end gap-2">
                  <a href="#" className="text-xl font-medium text-[#078739]">
                    {testimonial.name}
                  </a>
                  <span className="text-gray-500 text-sm py-1">
                    ({testimonial.job})
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
