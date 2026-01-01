import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OutDoorSportsFunction() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    loop: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  const whiteSvg = (
    <svg
      className="custom-svg svgshowcardwhite"
      width="480"
      height="405"
      viewBox="0 0 480 405"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* The faint background track */}
      <path
        className="bg-path"
        d="M479.431 0.435547L370.409 404.564H0.569336L110.048 0.435547H479.431Z"
        stroke="white"
        strokeWidth="0.87108"
      />

      {/* The animated drawing path */}
      <path
        className="trapezoid-path-new"
        d="M479.431 0.435547L370.409 404.564H0.569336L110.048 0.435547H479.431Z"
        stroke="white"
        strokeWidth="0.87108"
      />
    </svg>
  );

  const sportsSliderData = [
    {
      id: 1,
      title: "Cricket",
      image: "/images/homepage/cricket-slider.png",
      svg: whiteSvg,
    },
    {
      id: 2,
      title: "Football",
      image: "/images/homepage/football.png",
      svg: whiteSvg,
    },
    {
      id: 3,
      title: "Swimming",
      image: "/images/homepage/swimming.png",
      svg: whiteSvg,
    },
    {
      id: 4,
      title: "Tennis",
      image: "/images/homepage/tennis.png",
      svg: whiteSvg,
    },
    {
      id: 5,
      title: "Athletics",
      image: "/images/homepage/athletics.png",
      svg: whiteSvg,
    },
  ];
  return (
    <>
      <div className="OutDoorSportsBG">
        <div className="container max-w-7xl mx-auto px-4 oursportscontainer">
          <Slider ref={sliderRef} {...settings}>
            {/* <div className="cricketslideer">
            <img
              className="outdoorsportsimagee"
              src="/images/homepage/cricket-slider.png"
              alt=""
            />
            {whiteSvg}
            <p className="roleinstrength">cricket</p>
          </div> */}
            {sportsSliderData.map((sport) => (
              <div key={sport.id} className="cricketslideer">
                <img
                  className="outdoorsportsimagee"
                  src={sport.image}
                  alt={sport.title}
                />

                {sport.svg}

                <p className="roleinstrength">{sport.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
