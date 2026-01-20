import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ShowcaseProject() {
  const redsvg = (
    <svg
      class="custom-svg svgshowcard "
      width="402"
      height="424"
      viewBox="0 0 402 424"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="bg-path"
        d="M400.297 1.5L346.716 422.5H1.69531L53.3105 1.5H400.297Z"
        stroke="#BE1E2D"
        stroke-width="3"
      />

      <path
        class="trapezoid-path"
        d="M400.297 1.5L346.716 422.5H1.69531L53.3105 1.5H400.297Z"
        stroke="#BE1E2D"
        stroke-width="3"
      />
    </svg>
  );

  const bluesvg = (
    <svg
      class="custom-svg svgshowcard "
      width="402"
      height="424"
      viewBox="0 0 402 424"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="bg-path"
        d="M400.297 1.5L346.716 422.5H1.69531L53.3105 1.5H400.297Z"
        stroke="#005E96"
        stroke-width="3"
      />

      <path
        class="trapezoid-path"
        d="M400.297 1.5L346.716 422.5H1.69531L53.3105 1.5H400.297Z"
        stroke="#005E96"
        stroke-width="3"
      />
    </svg>
  );

  const showcaseData = [
    {
      id: 1,
      image: "/images/homepage/showcaseproject3.png",
      title: "student name",
      description:
        "of CBSE Grade II won the Bronze Position in the Butterfly Event Inter District Swimming Championship",
      svgCard: redsvg,
    },
    {
      id: 2,
      image: "/images/homepage/showcaseproject4.png",
      title: "student name",
      description:
        "of CBSE Grade II won the Bronze Position in the Butterfly Event Inter District Swimming Championship",
      svgCard: bluesvg,
    },
    {
      id: 3,
      image: "/images/homepage/showcaseproject4.png",
      title: "student name",
      description:
        "of CBSE Grade II won the Bronze Position in the Butterfly Event Inter District Swimming Championship",
      svgCard: redsvg,
    },
    {
      id: 4,
      image: "/images/homepage/showcaseproject4.png",
      title: "student name",
      description:
        "of CBSE Grade II won the Bronze Position in the Butterfly Event Inter District Swimming Championship",
      svgCard: bluesvg,
    },
    {
      id: 5,
      image: "/images/homepage/showcaseproject4.png",
      title: "student name",
      description:
        "of CBSE Grade II won the Bronze Position in the Butterfly Event Inter District Swimming Championship",
      svgCard: redsvg,
    },
  ];

  const sliderRef = useRef(null);

  const totalSlides = showcaseData.length;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3.5);
  const [progress, setProgress] = useState(0);

  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= totalSlides - slidesToShow;

  const updateProgress = (current) => {
    if (totalSlides <= slidesToShow) {
      setProgress(100);
      return;
    }
    const maxScrollableIndex = totalSlides - slidesToShow;
    const percent = (current / maxScrollableIndex) * 100;
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
        breakpoint: 600,
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
      <div className="showcaseprojectrow">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="videosectionmain">
            <div className="firstheading lengthfirstHeading ">
              <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                Showcasing Our
              </h2>
            </div>

            <div className="secondheading lengthsecondHeading">
              <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                Peak Performance
              </h2>
            </div>
          </div>
          <div className="paravideosection">
            <p className="paragraphtext">
              Take a glance at the champions whose achievements define excellence at Gaudium Sportopia.
            </p>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 showcasingcontainer">
          <Slider ref={sliderRef} {...settings}>
            {showcaseData.map((showcarditem, index) => (
              <div className="mainrowshowcasingcard">
                <div className="showcasingcard">
                  <div className="showcaseimagecard">
                    {showcarditem.svgCard}

                    <div className="imagehovershowcaseper">
                      <img
                        className="imageoftheshowcaseper"
                        src="/images/homepage/showcaseproject3.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="maincontainershowingcontent">
                    <h4 className="secondheadingtext">
                      <span
                        className={`mainheadingfont ${
                          index % 2 !== 0 ? "newmainheadingfont" : ""
                        }`}
                      >
                        {showcarditem.title}{" "}
                      </span>
                      <span style={{ marginLeft: "3px" }}>
                        {" "}
                        {showcarditem.description}
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="slider-buttonsshowcaseproject">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            disabled={isAtStart}
            style={{
              opacity: isAtStart ? 0.3 : 1,
              pointerEvents: isAtStart ? "none" : "auto",
              cursor: isAtStart ? "default" : "pointer",
            }}
          >
            <img src="/images/icons/arrow-left-circle-red.svg" alt="" />
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
            <img src="/images/icons/arrow-right-circle-red.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
