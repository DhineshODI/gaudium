import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TheStrenthBehind() {
  const strengthData = [
    {
      sport: "BADMINTON",
      role: "chief advisor",
      img: "/images/homepage/thestrengthimageone.png",
      name: "pullela gopichand",
    },
    {
      sport: "GYMNASTICS",
      role: "mentor",
      img: "/images/homepage/thestrengthimagetwo.png",
      name: "Bharathi Dasan",
    },
    {
      sport: "BADMINTON",
      role: "chief advisor",
      img: "/images/homepage/thestrengthimageone.png",
      name: "pullela gopichand",
    },
    {
      sport: "BADMINTON",
      role: "chief advisor",
      img: "/images/homepage/thestrengthimageone.png",
      name: "pullela gopichand",
    },
    {
      sport: "BADMINTON",
      role: "chief advisor",
      img: "/images/homepage/thestrengthimageone.png",
      name: "pullela gopichand",
    },
  ];
  const sliderRef = useRef(null);
  const totalSlides = strengthData.length;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [progress, setProgress] = useState(0);

  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= totalSlides - slidesToShow;

  const updateProgress = (current) => {
    if (totalSlides <= slidesToShow) {
      setProgress(100);
      return;
    }

    const maxScrollableIndex = totalSlides - slidesToShow;

    // add 1 step so first slide has progress
    const percent = ((current + 1) / (maxScrollableIndex + 1)) * 100;

    setProgress(Math.min(Math.max(percent, 0), 100));
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    beforeChange: (_, next) => {
      setCurrentSlide(next);
      updateProgress(next);
    },
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
        onReInit: () => setSlidesToShow(2),
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
        onReInit: () => setSlidesToShow(1),
      },
    ],
  };

  useEffect(() => {
    updateProgress(currentSlide);
  }, [slidesToShow, totalSlides, currentSlide]);

  return (
    <>
      <div className="thestrengthsection">
        <div>
          <div className="container max-w-7xl mx-auto px-4 ">
            <div className="videosectionmain">
              <div className="firstheading lengthfirstHeading">
                <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                  The Strength
                </h2>
              </div>

              <div className="secondheading lengthsecondHeading">
                <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                  Behind the Squad
                </h2>
              </div>
            </div>
            <div className="paravideosection">
              <p className="paragraphtext">
                Meet the expert coaches, mentors, and support team powering
                every athlete’s journey to excellence.
              </p>
            </div>

            <div className="thestrengthsectionslider">
              <div>
                <Slider ref={sliderRef} {...settings}>
                  {strengthData.map((item, index) => (
                    <div className="slidermainstrength" key={index}>
                      <div className="strengthsectioncard">
                        <div className="divsportsnamestregnth">
                          <div className="firststrengthsectioncard">
                            <p className="sportsnamestregnth">{item.sport}</p>
                            <h4 className="roleinstrength whitecolorfont">
                              {item.role}
                            </h4>
                          </div>
                        </div>

                        <div className="sportsnamestregnthimage">
                          <img src={item.img} alt={item.sport} />
                        </div>

                        <div className="divnameoftheplayer">
                          <p className="nameoftheplayer">{item.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>

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
                      onClick={() => sliderRef.current?.slickPrev()}
                      disabled={isAtStart}
                      style={{
                        opacity: isAtStart ? 0.3 : 1,
                        pointerEvents: isAtStart ? "none" : "auto",
                        cursor: isAtStart ? "default" : "pointer",
                      }}
                    >
                      <img
                        src="/images/icons/arrow-left-circle-red.svg"
                        alt=""
                      />
                    </button>
                    <button
                      onClick={() => sliderRef.current?.slickNext()}
                      disabled={isAtEnd}
                      style={{
                        opacity: isAtEnd ? 0.3 : 1,
                        pointerEvents: isAtEnd ? "none" : "auto",
                        cursor: isAtEnd ? "default" : "pointer",
                      }}
                    >
                      <img
                        src="/images/icons/arrow-right-circle-red.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
