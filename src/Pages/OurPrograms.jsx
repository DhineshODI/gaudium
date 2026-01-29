import Header from "../Components/Header";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function OurPrograms({ menuOnclick }) {
  const sectionRef = useRef();
  const sectionRef1 = useRef();

  useGSAP(
    () => {
      gsap.to(".bannercontentflex", {
        // Position-ah mela thalla
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".bannercontentflex",
          // MUKKIYAM: "top top" kudutha dhaan neenga scroll panna aarambikkum pothu
          // adhu irukira idathula irundhe start aagum.
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef },
  );

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".programsbuiltcard");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 100, // Keela irundhu start aagum
            opacity: 0,
          },
          {
            y: 0, // Normal position-ku varum
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 100%", // Card bottom-la nuzhaiyum pothu start aagum
              end: "top 20%", // Konjam scroll pannona animation mudiyum
              scrub: 1, // IDHU MUKKIYAM: Scroll speed-ku etha maadhiri mela varum
            },
          },
        );
      });
    },
    { scope: sectionRef1 },
  );

  return (
    <>
      <Header menuOnclick={menuOnclick} />

      {/* Banner-Image */}

      <div className="aboutPage" ref={sectionRef}>
        <div className="bannerimagesection ourprogramms">
          <div className="container max-w-7xl mx-auto px-4 aboutusbannersection">
            <div className="bannercontentflex">
              <p className="breadcrumbstext">
                <span>Home</span> &gt; Our Programs
              </p>
              <h2 className="mainheadingfont">Our Programs</h2>
              <hr />

              <p className="paragraphtext contentbanner">
                A structured pathway from discovery to elite performance, guided
                by champion coaches at every stage level.
              </p>
            </div>
          </div>

          <p className="mainheadingfont banneroverlaytextall">Our Programs</p>
        </div>
      </div>
      {/* Banner-Image */}

      {/* Programs that build  */}

      <div className="programsbulidsection">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div>
            <div className="videosectionmain">
              <div className="firstheading lengthfirstHeading">
                <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                  Programs That
                </h2>
              </div>

              <div className="secondheading">
                <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                  Build Champions
                </h2>
              </div>
            </div>

            <div className="paravideosection">
              <p className="paragraphtext">
                Structured training programs designed to nurture talent at every
                stage, from foundational learning to elite, performance-driven
                excellence
              </p>
            </div>
          </div>

          <div ref={sectionRef1}>
            <div className="programsbuiltcard">
              <div className="porgramsofferedcontent">
                <p className="nameofthesportsprogramm">Sportopia</p>
                <h3 className="roleinstrength">rookie</h3>
                <p className="paragraphtext paragaoneprogram">
                  This program introduces students to chosen sports through
                  structured after-school coaching sessions. The program builds
                  strong fundamentals across two levels—movement skills,
                  sport-specific techniques, and theory. Biannual assessments
                  track progress, with detailed feedback and development reports
                  shared during Sportopia PTMs.
                </p>

                {/* <p className="paragraphtext paragatwoprogram">
                  Designed to nurture confidence, coordination, and a love for
                  sport in young learners. Ideal for beginners seeking
                  structured exposure alongside academics.
                </p> */}
              </div>
            </div>
            <div className="programsbuiltcard secondoneprogrammer">
              <div className="porgramsofferedcontent">
                <p className="nameofthesportsprogramm">Sportopia</p>
                <h3 className="roleinstrength">Prodigy</h3>
                <p className="paragraphtext paragaoneprogram">
                  This is an intensive, performance-driven program for athletes
                  aiming to excel competitively. With training before and after
                  school, it progresses through three levels—Introductory,
                  Intermediate, and Advanced—focusing on skill refinement, match
                  exposure, fitness and elite-level competition supported by
                  high-performance and specialist coaching.
                </p>

                {/* <p className="paragraphtext paragatwoprogram">
                  Built for committed athletes ready to elevate performance
                  through disciplined training. Emphasizes competitive
                  readiness, physical conditioning, and tactical development.
                </p> */}
              </div>
            </div>
            <div className="programsbuiltcard thirdoneprogrammer">
              <div className="porgramsofferedcontent">
                <p className="nameofthesportsprogramm">Sportopia</p>
                <h3 className="roleinstrength">Prodigy</h3>
                <p className="paragraphtext paragaoneprogram">
                  This is a full-time, elite program for high-potential athletes
                  aspiring to professional sports careers. With intensive
                  training, personalized academic support and coach-led
                  selection, progress is measured through tournament
                  performance, regular competitive matches and continuous
                  exposure to high-level competition.
                </p>

                {/* <p className="paragraphtext paragatwoprogram">
                  Created for future professionals pursuing excellence at
                  national and international levels. Provides a holistic pathway
                  combining elite sport, academics, and career-focused
                  mentorship.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs that build  */}
    </>
  );
}
