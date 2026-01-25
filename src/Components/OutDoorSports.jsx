import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function OutDoorSportsFunction() {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
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

  const sportsSliderData = [
    {
      id: 1,
      title: "Cricket",
      image: "/images/homepage/cricket-slider.png",
      link: "/sport/cricket",
    },
    {
      id: 2,
      title: "Football",
      image: "/images/homepage/football.png",
      link: "/sport/football",
    },
    {
      id: 3,
      title: "Swimming",
      image: "/images/homepage/swimming.png",
      link: "/sport/swimming",
    },
    { id: 4, title: "Tennis", image: "/images/homepage/tennis.png", link: "/sport/tennis" },
    {
      id: 5,
      title: "Athletics",
      image: "/images/homepage/athletics.png",
      link: "/sport/athletics",
    },
    { id: "spacer", isSpacer: true },
  ];

  return (
    <div ref={triggerRef} className="overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="videosectionmain">
          <div className="firstheading">
            <h2 className="stroke-fill-text mainheadingfont whitefontcolor">
              outdoor
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
            World-class outdoor facilities designed to build strength, skill,
            teamwork and competitive excellence through structured training and
            play.
          </p>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto px-4 oursportscontainer">
        <div
          ref={sectionRef}
          className="flex flex-row gap-10 px-[10vw] will-change-transform oudoorsportsmainconatiner"
          style={{ width: "max-content" }}
        >
          {sportsSliderData.map((sport, index) => (
            <div key={index} className="cricketslideer">
              {!sport.isSpacer && (
                <a href={sport.link}>
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

        <div className="hrlineoutdoorsports"></div>
      </div>
    </div>
  );
}
