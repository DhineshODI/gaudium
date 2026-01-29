import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AOS from "aos";

export default function SucessYouMore() {
  const sectionRef = useRef(null);
  const sectionRef1 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);

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

  // useGSAP(
  //   () => {
  //     const countElements = gsap.utils.toArray(".countingsection");

  //     countElements.forEach((el) => {
  //       const endValue = parseInt(el.innerText); // JSX-la iruka number-ah (13, 328, etc.) edukkum

  //       gsap.fromTo(
  //         el,
  //         { innerText: 0 }, // 0-la irundhu start aagum
  //         {
  //           innerText: endValue,
  //           duration: 2,
  //           ease: "power2.out",
  //           snap: { innerText: 1 }, // Decimal illama round numbers-ah varum
  //           scrollTrigger: {
  //             trigger: el,
  //             start: "top 90%", // Element view-ku vandha udane start aagum
  //           },
  //         },
  //       );
  //     });

  //     // Optional: Entire row-ve mella reveal aagura maadhiri
  //     gsap.from(".widthhomepagecompanythere", {
  //       y: 50,
  //       opacity: 0,
  //       duration: 1,
  //       stagger: 0.2,
  //       scrollTrigger: {
  //         trigger: ".flexhomepageabout",
  //         start: "top 80%",
  //       },
  //     });
  //   },
  //   { scope: sectionRef },
  // ); // Unga ref-ah inga scope-ah kudunga

  useGSAP(
    () => {
      // Card-gal ovvonnum oru gap-la ulla vara 'stagger' use pandrom
      gsap.from(".widthhomepagecompanythere", {
        y: 100, // 100px keela irundhu start aagum
        opacity: 0, // Transparent-ah irukkum
        duration: 0.8,
        stagger: 0.2, // Ovvoru card-kum 0.2s gap irukkum
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Section screen-oda 75%-ku varum pothu trigger aagum
          toggleActions: "play none none reverse", // Scroll back pannuna thirumba animate aagum
        },
      });
    },
    { scope: sectionRef },
  );
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

            <div className="homepageaboutcompany" ref={sectionRef}>
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
            <source src="/images/gaudium-background.mp4" type="video/mp4" />
          </video>
        </section>
      </div>
    </>
  );
}
