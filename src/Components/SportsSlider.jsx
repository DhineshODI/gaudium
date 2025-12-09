import { useState, useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SportsSlider() {
  return (
    <>
      <div>
        <div>
          <div className="championSliderWrapper">
            <Slider ref={sliderRef} {...settings}>
              {images.map((src, index) => (
                <div key={index} className="slideItem">
                  <div className="slideCard">
                    <img src={src} alt="" />
                    <span className="ytIcon">▶</span>
                  </div>
                </div>
              ))}
            </Slider>

            <div className="progressBar">
              <div
                className="progressFill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <button
              className="arrow left"
              onClick={() => sliderRef.current.slickPrev()}
            >
              ‹
            </button>

            <button
              className="arrow right"
              onClick={() => sliderRef.current.slickNext()}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
