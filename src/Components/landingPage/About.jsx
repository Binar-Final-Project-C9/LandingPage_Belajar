import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="video-box">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rRSK7n4oeew?si=f_wc7RjqChdpkXOf"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading" style={{ whiteSpace: "pre-line" }}>
          <span className="">Cara</span>{" "}
          <span className="highlight-green">Asyik</span> <br />
          <span className="">Untuk</span>{" "}
          <span className="highlight-green">Belajar</span>{" "}
        </h1>
        <p className="primary-text">
          Video materi yang dikemas secara menarik sehingga pembelajaran mudah
          dipahami dan tidak membosankan.
        </p>
        <p className="primary-text">
          Berbagai macam topik pembelajaran yang diajarkan langsung oleh mentor
          professional di bidangnya.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Selengkapnya</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill />
            Video Lainnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
