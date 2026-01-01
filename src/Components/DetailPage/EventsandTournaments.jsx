import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function EventsandTournaments() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      const percent = ((newIndex + 1) / eventstournamentsData.length) * 100;
      setProgress(percent);
    },
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
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(20);
  const eventstournamentsData = [
    {
      eventnumber: "Event - 01",
      eventcontent:
        "Hosted: The Gaudium Junior Badminton Championship 2021/2022/2023.",
      eventslinks: "/events1link",
    },
    {
      eventnumber: "Event - 02",
      eventcontent: "ISSO Badminton National 2023.",
      eventslinks: "/events1link",
    },
    {
      eventnumber: "Event - 03",
      eventcontent:
        "Lorem ipsum dolor sit amet consectetur. Maecenas maecenas eget tempor ultrices porttitor tempus auctor viverra. Sed.",
      eventslinks: "/events1link",
    },
  ];

  return (
    <>
      <div className="eventsandtournamentsmain">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="videosectionmain">
            <div className="firstheading">
              <h2 className="stroke-fill-text mainheadingfont whitefontcolor">
                Events & Tournaments
              </h2>
            </div>
            <div className="secondheading">
              <h2 className="stroke-fill-text1 mainheadingfont whitecolortransperant">
                @ Gaudium Sportopia
              </h2>
            </div>
          </div>
        </div>

        <div className="paravideosection">
          <p className="paragraphtext">
            Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
            pellentesq uescelerisque libero malesuada tristique Ultricies leo
            viverra.
          </p>
        </div>

        <div className="container max-w-7xl mx-auto px-4">
          <div className="eventstournamentsmain">
            <Slider ref={sliderRef} {...settings}>
              {eventstournamentsData.map((item, index) => (
                <section key={index} className="slidercardevents">
                  <div className="eventstournamnetcard">
                    <h3 className="mainheadingfont eventstournamnetsname">
                      {item.eventnumber}
                    </h3>
                    <p className="secondheadingtext">{item.eventcontent}</p>
                  </div>
                </section>
              ))}
            </Slider>
          </div>

          <div className="buttonandarrowcontrol">
            {/* PROGRESS BAR */}
            <div className="progressflex">
              <div className="strength-progressbar">
                <div
                  className="strength-progressbar-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="strength-controls">
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="btn-prev"
              >
                <img src="/images/icons/arrow-left-circle-white.svg" alt="" />
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="btn-next"
              >
                <img src="/images/icons/arrow-right-circle-white.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
