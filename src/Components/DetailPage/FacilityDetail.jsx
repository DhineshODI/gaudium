import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FacilitythatInspire() {
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const settings = {
    dots: false,
    arrows: false, // we use custom arrows
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,

    afterChange: (current) => {
      const percent = ((current + 1) / totalSlides) * 100;
      setProgress(percent);
    },
  };

  const sliderDatadetail = [
    {
      id: 1,
      image: "/images/detail-page/badminton/badminton-slider.jpg",
      sport: "Badminton",
      title: "Court",
      description:
        "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque scelerisque libero malesuada tristique urna. Ultricies leo viverra tincidunt pharetra pretium pulvinar orci. In vel ac magna velit rhoncus nibh etiam. Scelerisque varius pretium elitneque pellentesque Quis cursus elit rhoncus.",
    },
    {
      id: 2,
      image: "/images/detail-page/badminton/badminton-slider.jpg",
      sport: "Badminton",
      title: "Court",
      description:
        "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque scelerisque libero malesuada tristique urna. Ultricies leo viverra tincidunt pharetra pretium pulvinar orci.",
    },
    {
      id: 3,
      image: "/images/detail-page/badminton/badminton-slider.jpg",
      sport: "Badminton",
      title: "Court",
      description:
        "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque scelerisque libero malesuada tristique urna. Ultricies leo viverra tincidunt pharetra pretium pulvinar orci.",
    },
    {
      id: 4,
      image: "/images/detail-page/badminton/badminton-slider.jpg",
      sport: "Badminton",
      title: "Court",
      description:
        "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque scelerisque libero malesuada tristique urna. Ultricies leo viverra tincidunt pharetra pretium pulvinar orci.",
    },
    {
      id: 5,
      image: "/images/detail-page/badminton/badminton-slider.jpg",
      sport: "Badminton",
      title: "Court",
      description:
        "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque scelerisque libero malesuada tristique urna. Ultricies leo viverra tincidunt pharetra pretium pulvinar orci.",
    },
  ];

  const totalSlides = sliderDatadetail.length;

  return (
    <>
      <div className="facilityapprovedbg">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="videosectionmain">
            <div className="firstheading">
              <h2 className="stroke-fill-text mainheadingfont whitefontcolor">
                Facilities
              </h2>
            </div>
            <div className="secondheading">
              <h2 className="stroke-fill-text1 mainheadingfont whitecolortransperant">
                That Inspire
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
                  >
                    <img
                      src="/images/icons/arrow-left-circle-white.svg"
                      alt="Prev"
                    />
                  </button>

                  <button
                    onClick={() => sliderRef.current?.slickNext()}
                    className="btn-next"
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
