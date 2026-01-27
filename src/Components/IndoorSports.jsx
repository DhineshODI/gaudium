import { useEffect, useRef } from "react";
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
      title: "Badminton",
      image: "/images/homepage/badminton.png",
      link: "/sport/badminton",
    },
    {
      id: 2,
      title: "Basketball",
      image: "/images/homepage/basketball.png",
      link: "/sport/basketball",
    },
    {
      id: 3,
      title: "Fencing",
      image: "/images/homepage/fenching.png",
      link: "/sport/fencing",
    },
    {
      id: 4,
      title: "Gymnastics",
      image: "/images/homepage/gymnastics.png",
      link: "/sport/gymnastics",
    },
    {
      id: 5,
      title: "Skating",
      image: "/images/homepage/skating.png",
      link: "/sport/skating",
    },
    { id: "spacer", isSpacer: true },
  ];
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  const isMobile = window.matchMedia("(max-width: 700px)").matches;

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
            pinSpacing: true, // Ithu illana adutha section mela vanthu ottikkum
            invalidateOnRefresh: true,
          },
        },
      );
    },
    { scope: triggerRef },
  );

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
      className="indorrmainbgsec overflow-hidden outdoorsportsheight"
      ref={triggerRef}
      // style={{ position: "relative", zIndex: 10 }}
    >
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
          className="flex flex-row gap-10 px-[10vw] will-change-transform oudoorsportsmainconatiner"
          style={{ width: "max-content" }}
        >
          {/* <Slider ref={sliderRef} {...settings}> */}
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
        {/* </Slider> */}
      </div>

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
    </div>
  );
}
