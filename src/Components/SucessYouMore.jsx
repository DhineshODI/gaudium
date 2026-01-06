import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SucessYouMore() {
  const sectionRef = useRef(null);
  const sectionRef1 = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        // Change 'y' to 'x'
        // -100 means it starts 100px to the left
        x: -100,
        opacity: 0,
        duration: 1.2, // Slightly longer duration feels smoother for horizontal moves
        ease: "power3.out", // Power3 is a bit more elegant for sliding
      });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(sectionRef1.current, {
        scrollTrigger: {
          trigger: sectionRef1.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        // Positive x starts the element on the right side
        x: 150,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="homevideosection">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="videosectionmain">
            <div ref={sectionRef} className="firstheading">
              <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                Success You
              </h2>
            </div>

            <div ref={sectionRef1} className="secondheading">
              <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                Can Measure
              </h2>
            </div>
          </div>

          <div className="paravideosection">
            <p className="paragraphtext">
              Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
              pellentesq uescelerisque libero malesuada tristique Ultricies leo
              viverra.
            </p>
          </div>

          <div className="homepageaboutcompany">
            <div className="flexhomepageabout">
              <div className="widthhomepagecompanythere">
                <div className="homepagecompanythere">
                  <h4 className="countingsection">30</h4>
                  <p className="paragraphtext">common wealth games</p>
                </div>

                <div className="bottomlinesection"></div>

                <p className="secondheadingtext secondparacontent">
                  <strong> Lorem ipsum dolor </strong>
                  sit amet consectetur. Velit nullam tincidunt nibh morbi.
                </p>
              </div>
              <div className="widthhomepagecompanythere">
                <div className="homepagecompanythere">
                  <h4 className="countingsection">25</h4>
                  <p className="paragraphtext">world championships</p>
                </div>

                <div className="bottomlinesection"></div>

                <p className="secondheadingtext secondparacontent">
                  <strong> Lorem ipsum dolor </strong>
                  sit amet consectetur. Velit nullam tincidunt nibh morbi.
                </p>
              </div>
              <div className="widthhomepagecompanythere">
                <div className="homepagecompanythere">
                  <h4 className="countingsection">30</h4>
                  <p className="paragraphtext">National Games of India</p>
                </div>

                <div className="bottomlinesection"></div>

                <p className="secondheadingtext secondparacontent">
                  <strong> Lorem ipsum dolor </strong>
                  sit amet consectetur. Velit nullam tincidunt nibh morbi.
                </p>
              </div>
              <div className="widthhomepagecompanythere">
                <div className="homepagecompanythere">
                  <h4 className="countingsection">30</h4>
                  <p className="paragraphtext">common wealth games</p>
                </div>

                <div className="bottomlinesection"></div>

                <p className="secondheadingtext secondparacontent">
                  <strong> Lorem ipsum dolor </strong>
                  sit amet consectetur. Velit nullam tincidunt nibh morbi.
                </p>
              </div>
              <div className="widthhomepagecompanythere">
                <div className="homepagecompanythere">
                  <h4 className="countingsection">30</h4>
                  <p className="paragraphtext">common wealth games</p>
                </div>

                <div className="bottomlinesection"></div>

                <p className="secondheadingtext secondparacontent">
                  <strong> Lorem ipsum dolor </strong>
                  sit amet consectetur. Velit nullam tincidunt nibh morbi.
                </p>
              </div>
              <div className="widthhomepagecompanythere">
                <div className="homepagecompanythere">
                  <h4 className="countingsection">30</h4>
                  <p className="paragraphtext">common wealth games</p>
                </div>

                <div className="bottomlinesection"></div>

                <p className="secondheadingtext secondparacontent">
                  <strong> Lorem ipsum dolor </strong>
                  sit amet consectetur. Velit nullam tincidunt nibh morbi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
