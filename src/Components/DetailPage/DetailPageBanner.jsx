
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function DetailPageBanner({ data }) {
  const bannerRef = useRef(null);
  const headingRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    // Parallax background
    gsap.to(bannerRef.current, {
      y: "10%",
      ease: "none",
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Heading parallax
    gsap.to(headingRef.current, {
      y: "-10%",
      ease: "none",
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Pure GSAP text fill animation (without CSS gradients)
    gsap.fromTo(
      overlayRef.current,
      { color: "rgba(255,255,255,0)" }, // start transparent
      {
        color: "#ffffff", // end fully white
        duration: 2,
        repeat: -1, // loop
        yoyo: true, // goes back to transparent
        ease: "power1.inOut",
      },
    );
  }, []);
  return (
    <>
      <div className="aboutPage">
        <div
          className={`bannerimagesection ${data.backgroundClass}`}
          ref={bannerRef}
        >
          <div className="container max-w-7xl mx-auto px-4 aboutusbannersection">
            <div className="bannercontentflex">
              <p className="breadcrumbstext">
                <span>{data.breadcrumbstextfirst}</span> &gt;{" "}
                {data.breadcrumbstextSecond}
              </p>

              <h2 className="mainheadingfont">{data.bannertitle}</h2>
              <hr />

              <p className="paragraphtext contentbanner">
                {data.bannerContent}
              </p>
            </div>
          </div>

          <p className="mainheadingfont banneroverlaytextall">
            {data.banneroverlaycontent}
          </p>
        </div>
      </div>
    </>
  );
}
