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
      <div className="homevideomainbg">
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
                From academic excellence to athletic milestones, our students’
                progress is tracked, nurtured and celebrated.
              </p>
            </div>

            <div className="homepageaboutcompany">
              <div className="flexhomepageabout">
                <div className="widthhomepagecompanythere">
                  <div className="homepagecompanythere">
                    <h4 className="countingsection">13</h4>
                    <p className="paragraphtext">International players</p>
                  </div>

                  <div className="bottomlinesection"></div>

                  <p className="secondheadingtext secondparacontent">
                    <strong> Representing excellence </strong>
                    with global exposure, elite performance and international
                    competitive success.
                  </p>
                </div>
                <div className="widthhomepagecompanythere">
                  <div className="homepagecompanythere">
                    <h4 className="countingsection">328</h4>
                    <p className="paragraphtext"> National players</p>
                  </div>

                  <div className="bottomlinesection"></div>

                  <p className="secondheadingtext secondparacontent">
                    <strong> Competing at the highest </strong>
                    national platforms with consistency and championship-level
                    experience.
                  </p>
                </div>
                <div className="widthhomepagecompanythere">
                  <div className="homepagecompanythere">
                    <h4 className="countingsection">515</h4>
                    <p className="paragraphtext"> State level Players</p>
                  </div>

                  <div className="bottomlinesection"></div>

                  <p className="secondheadingtext secondparacontent">
                    <strong> Demonstrating strong </strong>
                    regional dominance, advanced skills and structured
                    competitive progression.
                  </p>
                </div>

                <div className="widthhomepagecompanythere">
                  <div className="homepagecompanythere">
                    <h4 className="countingsection">408</h4>
                    <p className="paragraphtext"> District level Players</p>
                  </div>

                  <div className="bottomlinesection"></div>

                  <p className="secondheadingtext secondparacontent">
                    <strong>Building foundational excellence </strong>
                    through competitive exposure, structured training and
                    performance growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="bhomevideosectionvideo">
          <video className="bgvideohomepage" autoPlay muted loop playsInline>
            <source src="/images/background-image.mp4" type="video/mp4" />
          </video>
        </section>
      </div>
    </>
  );
}
