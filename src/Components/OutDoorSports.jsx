// import { useState, useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function OutDoorSportsFunction() {
//   const sliderRef = useRef(null);
//   // 1. Add missing state for tracking current slide
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // 2. Add a ref to prevent "over-scrolling" (Debounce)
//   const isScrolling = useRef(false);
//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3.5,
//     slidesToScroll: 1,
//     arrows: false,
//     loop: false,
//     beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),

//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   // --- Wheel Scroll Handler ---
//   const handleWheel = (e) => {
//     if (!sliderRef.current) return;

//     // Determine if we are at the boundaries
//     const isAtEnd =
//       currentSlide >= totalSlides - Math.floor(settings.slidesToShow);
//     const isAtStart = currentSlide === 0;

//     // Logic: If scrolling down and not at end, OR scrolling up and not at start
//     // Prevent default page scroll and move the slider instead.
//     if ((e.deltaY > 0 && !isAtEnd) || (e.deltaY < 0 && !isAtStart)) {
//       if (e.cancelable) e.preventDefault();

//       if (e.deltaY > 0) {
//         sliderRef.current.slickNext();
//       } else {
//         sliderRef.current.slickPrev();
//       }
//     }
//     // If it isAtEnd and scrolling down, it will naturally let the browser scroll to the next section.
//   };

//   const whiteSvg = (
//     <svg
//       className="custom-svg svgshowcardwhite"
//       width="480"
//       height="405"
//       viewBox="0 0 480 405"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       {/* The faint background track */}
//       <path
//         className="bg-path"
//         d="M479.431 0.435547L370.409 404.564H0.569336L110.048 0.435547H479.431Z"
//         stroke="white"
//         strokeWidth="0.87108"
//       />

//       {/* The animated drawing path */}
//       <path
//         className="trapezoid-path-new"
//         d="M479.431 0.435547L370.409 404.564H0.569336L110.048 0.435547H479.431Z"
//         stroke="white"
//         strokeWidth="0.87108"
//       />
//     </svg>
//   );

//   const sportsSliderData = [
//     {
//       id: 1,
//       title: "Cricket",
//       image: "/images/homepage/cricket-slider.png",
//       svg: whiteSvg,
//     },
//     {
//       id: 2,
//       title: "Football",
//       image: "/images/homepage/football.png",
//       svg: whiteSvg,
//     },
//     {
//       id: 3,
//       title: "Swimming",
//       image: "/images/homepage/swimming.png",
//       svg: whiteSvg,
//     },
//     {
//       id: 4,
//       title: "Tennis",
//       image: "/images/homepage/tennis.png",
//       svg: whiteSvg,
//     },
//     {
//       id: 5,
//       title: "Athletics",
//       image: "/images/homepage/athletics.png",
//       svg: whiteSvg,
//     },
//     {
//       id: 5,
//       title: "Athletics",
//       image: "/images/homepage/athletics.png",
//       svg: whiteSvg,
//     },
//     {
//       id: 5,
//       title: "Athletics",
//       image: "/images/homepage/athletics.png",
//       svg: whiteSvg,
//     },
//     {
//       id: 5,
//       title: "Athletics",
//       image: "/images/homepage/athletics.png",
//       svg: whiteSvg,
//     },

//     {
//       id: 5,
//       title: "Athletics",
//       image: "/images/homepage/athletics.png",
//       svg: whiteSvg,
//     },
//     {
//       id: 5,
//       title: "Athletics",
//       image: "/images/homepage/athletics.png",
//       svg: whiteSvg,
//     },
//   ];
//   return (
//     <>
//       <div
//         className="OutDoorSportsBG"
//         style={{ touchAction: "none" }} // Prevents jitter on mobile
//         onWheel={handleWheel}
//       >
//         <div className="container max-w-7xl mx-auto px-4 oursportscontainer">
//           <Slider ref={sliderRef} {...settings}>
//             {/* <div className="cricketslideer">
//             <img
//               className="outdoorsportsimagee"
//               src="/images/homepage/cricket-slider.png"
//               alt=""
//             />
//             {whiteSvg}
//             <p className="roleinstrength">cricket</p>
//           </div> */}
//             {sportsSliderData.map((sport) => (
//               <div key={sport.id} className="cricketslideer">
//                 <img
//                   className="outdoorsportsimagee"
//                   src={sport.image}
//                   alt={sport.title}
//                 />

//                 {sport.svg}

//                 <p className="roleinstrength">{sport.title}</p>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// }
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OutDoorSportsFunction() {
  const sliderRef = useRef(null);

  // 1. Add missing state for tracking current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // 2. Add a ref to prevent "over-scrolling" (Debounce)
  const isScrolling = useRef(false);

  const sportsSliderData = [
    { id: 1, title: "Cricket", image: "/images/homepage/cricket-slider.png" },
    { id: 2, title: "Football", image: "/images/homepage/football.png" },
    { id: 3, title: "Swimming", image: "/images/homepage/swimming.png" },
    { id: 4, title: "Tennis", image: "/images/homepage/tennis.png" },
    { id: 5, title: "Athletics", image: "/images/homepage/athletics.png" },
    { id: 6, title: "Athletics", image: "/images/homepage/athletics.png" },
    { id: 7, title: "Athletics", image: "/images/homepage/athletics.png" },
    { id: 8, title: "Athletics", image: "/images/homepage/athletics.png" },
    { id: 9, title: "Athletics", image: "/images/homepage/athletics.png" },
    { id: 10, title: "Athletics", image: "/images/homepage/athletics.png" },
    { id: 11, title: "Cricket", image: "/images/homepage/cricket-slider.png" },
  ];

  const totalSlides = sportsSliderData.length;
  const slidesToShow = 3.5;

  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,

    beforeChange: () => {
      isScrolling.current = true; // 🔒 lock
    },

    afterChange: (newIndex) => {
      setCurrentSlide(newIndex);
      isScrolling.current = false; // 🔓 unlock
    },

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const handleWheel = (e) => {
    if (!sliderRef.current || isScrolling.current) return;

    const isAtEnd = currentSlide >= totalSlides - Math.ceil(slidesToShow);
    const isAtStart = currentSlide === 0;

    const scrollingDown = e.deltaY > 0;
    const scrollingUp = e.deltaY < 0;

    // Allow page scroll when slider ends
    if ((scrollingDown && isAtEnd) || (scrollingUp && isAtStart)) {
      return;
    }

    e.preventDefault();

    if (scrollingDown) {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };

  useEffect(() => {
    const isAtEnd = currentSlide >= totalSlides - Math.ceil(slidesToShow);
    const isAtStart = currentSlide === 0;

    // Lock page scroll ONLY when slider is active
    if (!isAtEnd && !isAtStart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [currentSlide]);

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

  return (
    <div
      className="OutDoorSportsBG"
      onWheel={handleWheel}
      style={{ overflow: "hidden" }}
    >
      <div className="container max-w-7xl mx-auto px-4 oursportscontainer">
        <Slider ref={sliderRef} {...settings}>
          {sportsSliderData.map((sport, index) => (
            <div key={index} className="cricketslideer">
              <img
                className="outdoorsportsimagee"
                src={sport.image}
                alt={sport.title}
              />
              {whiteSvg}
              <p className="roleinstrength">{sport.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
