import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
    {
      id: 1,
      title: "Badmintion",
      image: "/images/homepage/badminton.png",
      link: "/",
    },
    {
      id: 2,
      title: "Basketball",
      image: "/images/homepage/basketball.png",
      link: "",
    },
    {
      id: 3,
      title: "Fencing",
      image: "/images/homepage/fenching.png",
      link: "",
    },
    {
      id: 4,
      title: "Gymnastics",
      image: "/images/homepage/gymnastics.png",
      link: "",
    },
    {
      id: 5,
      title: "Skating",
      image: "/images/homepage/skating.png",
      link: "",
    },
    { id: "spacer", isSpacer: true },
  ];
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const totalSlides = 5;
      const scrollWidth = (totalSlides - 1) * 20;

      gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: `-${scrollWidth}vw`,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: `+=${totalSlides * 180}`, // Duration of the scroll
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        },
      );
    },
    { scope: triggerRef },
  );

  return (
    <div className="indorrmainbgsec overflow-hidden" ref={triggerRef}>
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
            Purpose-built indoor facilities enabling year-round training,
            precision skill development and peak performance across multiple
            sporting disciplines
          </p>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto px-4 inoursportscontainer">
        <div
          ref={sectionRef}
          className="flex flex-row gap-10 px-[10vw] will-change-transform"
          style={{ width: "max-content" }}
        >
          {/* <Slider ref={sliderRef} {...settings}> */}
          {sportsSliderData.map((sport, index) => (
            <div key={index} className="cricketslideer">
              {!sport.isSpacer && (
                <a href="">
                  <>
                    <img
                      className="outdoorsportsimagee"
                      src={sport.image}
                      alt={sport.title}
                    />
                    {whiteSvg}
                    <p className="roleinstrength">{sport.title}</p>
                  </>
                </a>
              )}
            </div>
          ))}
        </div>
        {/* </Slider> */}
      </div>
    </div>
  );
}
