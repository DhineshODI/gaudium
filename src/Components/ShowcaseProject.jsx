import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ShowcaseProject() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    loop:false,

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

  return (
    <>
      <div className="showcaseprojectrow">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="videosectionmain">
            <div className="firstheading">
              <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                Showcasing Our
              </h2>
            </div>

            <div className="secondheading">
              <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                Peak Performance
              </h2>
            </div>
          </div>
          <div className="paravideosection">
            <p className="paragraphtext">
              Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
              pellentesq uescelerisque libero malesuada tristique Ultricies leo
              viverra.
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
                      {showcarditem.description}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="slider-buttonsshowcaseproject">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="left-btnshowcaseproject"
          >
            <img src="/images/icons/arrow-left-circle-red.svg" alt="" />
          </button>

          <button
            onClick={() => sliderRef.current.slickNext()}
            className="right-btnshowcaseproject"
          >
            <img src="/images/icons/arrow-right-circle-red.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
