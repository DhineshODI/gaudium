import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function EventsandTournaments({ data }) {
  const settings = {
    dots: false,
    infinite: false, // Keep false to ensure progress bar logic is simple
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // Update progress based on the final index reached
    afterChange: (current) => {
      setCurrentSlide(current); // Update the current index

      const totalSteps = totalSlides - currentSlidesToShow + 1;
      const percent = ((current + 1) / totalSteps) * 100;
      setProgress(Math.min(percent, 100));
    },
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
        // Update state when breakpoint hits
        onReInit: () => setCurrentSlidesToShow(2),
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
        onReInit: () => setCurrentSlidesToShow(1),
      },
    ],
  };
  const eventstournamentsData = data.items || [];
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0); // Track active index
  const [currentSlidesToShow, setCurrentSlidesToShow] = useState(3);

  const totalSlides = eventstournamentsData.length;
  // The slider hits the end when the index reaches (Total - Visible)
  const isAtEnd = currentSlide >= totalSlides - currentSlidesToShow;
  const isAtStart = currentSlide === 0;

  // Initial Progress Calculation
  useEffect(() => {
    const totalSteps = eventstournamentsData.length - currentSlidesToShow + 1;
    if (totalSteps > 0) {
      setProgress((1 / totalSteps) * 100);
    }
  }, [eventstournamentsData.length, currentSlidesToShow]);

  return (
    <>
      <div className="eventsandtournamentsmain">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="videosectionmain">
            <div className="firstheading">
              <h2 className="stroke-fill-text mainheadingfont whitefontcolor">
                {data.headingFirst}
              </h2>
            </div>
            <div className="secondheading">
              <h2 className="stroke-fill-text1 mainheadingfont whitecolortransperant">
                {data.headingSecond}
              </h2>
            </div>
          </div>
        </div>

        <div className="paravideosection">
          <p className="paragraphtext">{data.description}</p>
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
              {/* <button
                onClick={() => sliderRef.current.slickPrev()}
                className="btn-prev"
              > */}
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="btn-prev"
                disabled={isAtStart}
                style={{
                  opacity: isAtStart ? 0.2 : 1,
                  pointerEvents: isAtStart ? "none" : "auto",
                  cursor: isAtStart ? "default" : "pointer",
                }}
              >
                <img src="/images/icons/arrow-left-circle-white.svg" alt="" />
              </button>
              {/* <button
                onClick={() => sliderRef.current.slickNext()}
                className="btn-next"
              > */}
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="btn-next"
                disabled={isAtEnd}
                style={{
                  opacity: isAtEnd ? 0.2 : 1,
                  pointerEvents: isAtEnd ? "none" : "auto",
                  cursor: isAtEnd ? "default" : "pointer",
                }}
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
