import { useState, useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TheStrenthBehind() {
  //   const settings = {
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: false,
  //     autoplaySpeed: 2000,
  //     arrows: false,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 1,
  //         },
  //       },
  //     ],
  //   };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      const percent = ((newIndex + 1) / strengthData.length) * 100;
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
  ];

  return (
    <>
      <div className="thestrengthsection">
        <div>
          <div className="container max-w-7xl mx-auto px-4 ">
            <div className="videosectionmain">
              <div className="firstheading">
                <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                  The Strength
                </h2>
              </div>

              <div className="secondheading">
                <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                  Behind the Squad
                </h2>
              </div>
            </div>
            <div className="paravideosection">
              <p className="paragraphtext">
                Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
                pellentesq uescelerisque libero malesuada tristique Ultricies
                leo viverra.
              </p>
            </div>

            <div className="thestrengthsectionslider">
              <div>
                {/* <Slider {...settings}>
                  <div className="slidermainstrength">
                    <div className="strengthsectioncard">
                      <div className="divsportsnamestregnth">
                        <div className="firststrengthsectioncard">
                          <p className="sportsnamestregnth">BADMINTON</p>
                          <h4 className="roleinstrength  whitecolorfont">
                            chief advisor
                          </h4>
                        </div>
                      </div>

                      <div className="sportsnamestregnthimage">
                        <img
                          src="/images/homepage/thestrengthimageone.png"
                          alt=""
                        />
                      </div>

                      <div className="divnameoftheplayer">
                        <p className="nameoftheplayer">pullela gopichand</p>
                      </div>
                    </div>
                  </div>
                  <div className="slidermainstrength">
                    <div className="strengthsectioncard">
                      <div className="divsportsnamestregnth">
                        <div className="firststrengthsectioncard">
                          <p className="sportsnamestregnth">GYMNASTICS</p>
                          <h4 className="roleinstrength  whitecolorfont">
                            mentor
                          </h4>
                        </div>
                      </div>

                      <div className="sportsnamestregnthimage">
                        <img
                          src="/images/homepage/thestrengthimagetwo.png"
                          alt=""
                        />
                      </div>

                      <div className="divnameoftheplayer">
                        <p className="nameoftheplayer">Bharathi Dasan</p>
                      </div>
                    </div>
                  </div>
                  <div className="slidermainstrength">
                    <div className="strengthsectioncard">
                      <div className="divsportsnamestregnth">
                        <div className="firststrengthsectioncard">
                          <p className="sportsnamestregnth">BADMINTON</p>
                          <h4 className="roleinstrength  whitecolorfont">
                            chief advisor
                          </h4>
                        </div>
                      </div>

                      <div className="sportsnamestregnthimage">
                        <img
                          src="/images/homepage/thestrengthimageone.png"
                          alt=""
                        />
                      </div>

                      <div className="divnameoftheplayer">
                        <p className="nameoftheplayer">pullela gopichand</p>
                      </div>
                    </div>
                  </div>
                  <div className="slidermainstrength">
                    <div className="strengthsectioncard">
                      <div className="divsportsnamestregnth">
                        <div className="firststrengthsectioncard">
                          <p className="sportsnamestregnth">BADMINTON</p>
                          <h4 className="roleinstrength  whitecolorfont">
                            chief advisor
                          </h4>
                        </div>
                      </div>

                      <div className="sportsnamestregnthimage">
                        <img
                          src="/images/homepage/thestrengthimageone.png"
                          alt=""
                        />
                      </div>

                      <div className="divnameoftheplayer">
                        <p className="nameoftheplayer">pullela gopichand</p>
                      </div>
                    </div>
                  </div>
                </Slider> */}

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
                      onClick={() => sliderRef.current.slickPrev()}
                      className="btn-prev"
                    >
                     <img src="/images/icons/arrow-left-circle-red.svg" alt="" />
                    </button>
                    <button
                      onClick={() => sliderRef.current.slickNext()}
                      className="btn-next"
                    >
                       <img src="/images/icons/arrow-right-circle-red.svg" alt="" />
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
