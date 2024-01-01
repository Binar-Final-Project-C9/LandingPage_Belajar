import React from "react";
import BannerImage from "../../Assets/home-banner-study.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            <span className="">Temukan Ilmu</span>{" "}
            <span className="highlight-green">Temukan Keunggulanmu !</span>{" "}
          </h1>
          <p className="primary-text">
            Temukan Ilmu dan Keunggulan dalam Bidang yang Diminati dengan
            Kebebasan untuk akses pelajaran kapanpun dan dimanapun.
          </p>
          <button className="secondary-button">
            Download Sekarang <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
