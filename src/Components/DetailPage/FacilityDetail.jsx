import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FacilitythatInspire({ data }) {
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false, // we use custom arrows
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => {
      setCurrentSlide(current);
      const percent = ((current + 1) / totalSlides) * 100;
      setProgress(percent);
    },
  };

  const sliderDatadetail = data.slides;

  const totalSlides = sliderDatadetail.length;

  useEffect(() => {
    if (totalSlides > 0) {
      setProgress((1 / totalSlides) * 100);
    }
  }, [totalSlides]);

  return (
    <>
      <div className="facilityapprovedbg">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="videosectionmain">
            <div className="firstheading lengthfirstHeading">
              <h2 className="stroke-fill-text mainheadingfont whitefontcolor">
                {data.headingFirst}
              </h2>
            </div>
            <div className="secondheading lengthsecondHeading">
              <h2 className="stroke-fill-text1 mainheadingfont whitecolortransperant">
                {data.headingSecond}
              </h2>
            </div>
          </div>
        </div>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="buttoncontroldetailpage">
            <Slider ref={sliderRef} {...settings}>
              {sliderDatadetail.map((item) => (
                <>
                  <div key={item.id}>
                    <div className="flexsliderdetail">
                      <img
                        className="imagesliderimage"
                        src={item.image}
                        alt={item.title}
                      />

                      <div className="sliderprojectdetail">
                        <div className="firstclasssportstext">
                          <h4 className="paragraphtext sportstitleslider">
                            {item.sport}
                          </h4>
                          <h2 className="roleinstrength sportsheadingg">
                            {item.title}
                          </h2>
                          <p className="paragraphtext contentcolortext">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
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
              <div className="buttonsliderprojectdetailss">
                <div className="strength-controls">
                  <button
                    onClick={() => sliderRef.current?.slickPrev()}
                    className="btn-prev"
                    disabled={currentSlide === 0}
                    style={{
                      opacity: currentSlide === 0 ? 0.2 : 1,
                      pointerEvents: currentSlide === 0 ? "none" : "auto",
                    }}
                  >
                    <img
                      src="/images/icons/arrow-left-circle-white.svg"
                      alt="Prev"
                    />
                  </button>

                  <button
                    onClick={() => sliderRef.current?.slickNext()}
                    className="btn-next"
                    disabled={currentSlide === totalSlides - 1}
                    style={{
                      opacity: currentSlide === totalSlides - 1 ? 0.2 : 1,
                      pointerEvents:
                        currentSlide === totalSlides - 1 ? "none" : "auto",
                    }}
                  >
                    <img
                      src="/images/icons/arrow-right-circle-white.svg"
                      alt="Next"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
