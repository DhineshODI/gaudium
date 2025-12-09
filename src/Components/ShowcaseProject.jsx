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
  const showCaseData = [
    {
      sport: "BADMINTON",
      role: "chief advisor",
      img: "/images/homepage/thestrengthimageone.png",
      name: "pullela gopichand",
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
            <div className="mainrowshowcasingcard">
              <div className="showcasingcard">
                <div className="showcasigimg-wrapper">
                  <img
                    className="showcasigimg"
                    src="/images/homepage/showcaseproject3.png"
                    alt=""
                  />
                </div>

                <div className="maincontainershowingcontent">
                  <h4 className="secondheadingtext">
                    <span className="mainheadingfont">student name </span>
                    of CBSE Grade II won the Bronze Position in the Butterfly
                    Event Inter District Swimming Championship
                  </h4>
                  {/* <p className="secondheadingtext"></p> */}
                </div>
              </div>
            </div>
            <div className="mainrowshowcasingcard">
              <div className="showcasingcard">
                <div className="showcasigimg-wrapper">
                  <img
                    className="showcasigimg"
                    src="/images/homepage/showcaseproject3.png"
                    alt=""
                  />
                </div>

                <div className="maincontainershowingcontent">
                  <h4 className="secondheadingtext">
                    <span className="mainheadingfont">student name </span>
                    of CBSE Grade II won the Bronze Position in the Butterfly
                    Event Inter District Swimming Championship
                  </h4>
                  {/* <p className="secondheadingtext"></p> */}
                </div>
              </div>
            </div>
            <div className="mainrowshowcasingcard">
              <div className="showcasingcard">
                <div className="showcasigimg-wrapper">
                  <img
                    className="showcasigimg"
                    src="/images/homepage/showcaseproject3.png"
                    alt=""
                  />
                </div>

                <div className="maincontainershowingcontent">
                  <h4 className="secondheadingtext">
                    <span className="mainheadingfont">student name </span>
                    of CBSE Grade II won the Bronze Position in the Butterfly
                    Event Inter District Swimming Championship
                  </h4>
                  {/* <p className="secondheadingtext"></p> */}
                </div>
              </div>
            </div>
            <div className="mainrowshowcasingcard">
              <div className="showcasingcard">
                <div className="showcasigimg-wrapper">
                  <img
                    className="showcasigimg"
                    src="/images/homepage/showcaseproject3.png"
                    alt=""
                  />
                </div>

                <div className="maincontainershowingcontent">
                  <h4 className="secondheadingtext">
                    <span className="mainheadingfont">student name </span>
                    of CBSE Grade II won the Bronze Position in the Butterfly
                    Event Inter District Swimming Championship
                  </h4>
                  {/* <p className="secondheadingtext"></p> */}
                </div>
              </div>
            </div>
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
