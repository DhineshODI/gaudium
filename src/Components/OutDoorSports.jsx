import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function OutDoorSportsFunction() {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  const isMobile = window.matchMedia("(max-width: 700px)").matches;

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
      if (window.innerWidth <= 600) return; // ⛔ disable on mobile
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
            pinSpacing: true, // Ithu illana adutha section mela vanthu ottikkum
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
    {
      id: 4,
      title: "Tennis",
      image: "/images/homepage/tennis.png",
      link: "/sport/tennis",
    },
    {
      id: 5,
      title: "Athletics",
      image: "/images/homepage/athletics.png",
      link: "/sport/athletics",
    },
    { id: "spacer", isSpacer: true },
  ];

  useEffect(() => {
    // wait till all images loaded
    const images = document.querySelectorAll("img");
    let loaded = 0;

    images.forEach((img) => {
      if (img.complete) {
        loaded++;
      } else {
        img.addEventListener("load", () => {
          loaded++;
          if (loaded === images.length) {
            ScrollTrigger.refresh();
          }
        });
      }
    });

    // fallback
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }, []);

  const currentIndex = useRef(0);

  const slideWidth = 280; // card width + gap (adjust if needed)

  const slideNext = () => {
    if (currentIndex.current >= sportsSliderData.length - 2) return;

    currentIndex.current += 1;

    gsap.to(sectionRef.current, {
      x: -currentIndex.current * slideWidth,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const slidePrev = () => {
    if (currentIndex.current <= 0) return;

    currentIndex.current -= 1;

    gsap.to(sectionRef.current, {
      x: -currentIndex.current * slideWidth,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={triggerRef}
      className="overflow-hidden outdoorsportsheight"
      // style={{ position: "relative", zIndex: 10 }}
    >
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
                  <img
                    className="outdoorsportsimagee"
                    src={sport.image}
                    alt={sport.title}
                  />
                  {whiteSvg}
                  <p className="roleinstrength">{sport.title}</p>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Controls */}

        {isMobile && (
          <div class="slider-buttonsshowcaseproject">
            <button
              onClick={slidePrev}
              disabled=""
              // style="opacity: 0.3; pointer-events: none; cursor: default;"
            >
              <img src="/images/icons/arrow-left-circle-white.svg" alt="" />
            </button>
            <button
              onClick={slideNext}
              // style="opacity: 1; pointer-events: auto; cursor: pointer;"
            >
              <img src="/images/icons/arrow-right-circle-white.svg" alt="" />
            </button>
          </div>
        )}

        <div className="hrlineoutdoorsports"></div>
      </div>
    </div>
  );
}
