import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function InDoorSportsFunction() {
  const whiteSvg = (
    <svg
      className="custom-svg svgshowcardwhite"
      width="480"
      height="405"
      viewBox="0 0 480 405"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="bg-path"
        d="M479.431 0.435547L370.409 404.564H0.569336L110.048 0.435547H479.431Z"
        stroke="white"
        strokeWidth="0.87108"
      />
      <path
        className="trapezoid-path-new"
        d="M479.431 0.435547L370.409 404.564H0.569336L110.048 0.435547H479.431Z"
        stroke="white"
        strokeWidth="0.87108"
      />
    </svg>
  );
  const sportsSliderData = [
    { id: 1, title: "Cricket", image: "/images/homepage/cricket-slider.png" },
    { id: 2, title: "Football", image: "/images/homepage/football.png" },
    { id: 3, title: "Swimming", image: "/images/homepage/swimming.png" },
    { id: 4, title: "Tennis", image: "/images/homepage/tennis.png" },
    { id: 5, title: "Athletics", image: "/images/homepage/athletics.png" },
    { id: "spacer", isSpacer: true },
  ];
  const sliderRef = useRef(null);
  const isScrolling = useRef(false);

  const parentRef = useRef(null);

  const totalSlides = sportsSliderData.length;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3.5);

  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= totalSlides - slidesToShow - 1;

  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,

    beforeChange: () => {
      isScrolling.current = true;
    },

    afterChange: (index) => {
      setCurrentSlide(index);
      isScrolling.current = false;
    },

    responsive: [
      {
        breakpoint: 1024,
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
    const parentNode = parentRef.current;
    let lastScrollTime = 0;
    const scrollCooldown = 200; // Time in ms between allowed slide changes

    const handleWheel = (e) => {
      const now = Date.now();
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // 1. Check if we should let the page scroll normally
      if ((isAtEnd && scrollingDown) || (isAtStart && scrollingUp)) {
        return;
      }

      // 2. Lock the page scroll so we can move the slider
      e.preventDefault();

      // 3. Fast-scroll logic: only trigger if enough time has passed
      if (now - lastScrollTime > scrollCooldown) {
        if (scrollingDown) {
          sliderRef.current?.slickNext();
        } else if (scrollingUp) {
          sliderRef.current?.slickPrev();
        }
        lastScrollTime = now; // Update the last scroll time
      }
    };

    if (parentNode) {
      parentNode.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (parentNode) {
        parentNode.removeEventListener("wheel", handleWheel);
      }
    };
  }, [isAtEnd, isAtStart]); // Dependencies
  return (
    <div className="indorrmainbgsec" ref={parentRef}>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="videosectionmain">
          <div className="firstheading">
            <h2 className="stroke-fill-text mainheadingfont whitefontcolor">
              indoor
            </h2>
          </div>
          <div className="secondheading">
            <h2 className="stroke-fill-text1 mainheadingfont whitecolortransperant">
              sports
            </h2>
          </div>
        </div>

        <div className="paravideosection">
          <p className="paragraphtext slidermainsecpara">
            Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
            pellentesq uescelerisque libero malesuada tristique Ultricies leo
            viverra.
          </p>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto px-4 inoursportscontainer">
        <Slider ref={sliderRef} {...settings}>
          {sportsSliderData.map((sport, index) => (
            <div key={index} className="cricketslideer">
              {!sport.isSpacer && (
                <>
                  <img
                    className="outdoorsportsimagee"
                    src={sport.image}
                    alt={sport.title}
                  />
                  {whiteSvg}
                  <p className="roleinstrength">{sport.title}</p>
                </>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
