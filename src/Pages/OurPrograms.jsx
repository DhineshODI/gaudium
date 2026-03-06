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
                Gaudium Sportopia offers three programs designed to match every
                child’s skill level and sporting journey.
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
                  <strong>SPORTOPIA ROOKIE PROGRAM : </strong>
                  This Program introduces students to chosen sports through
                  structured sessions integrated within school hours. Along with
                  fundamental skill development, the program emphasizes overall
                  health, fitness, and wellness, encouraging active habits as an
                  essential part of everyday student life.
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
                  <strong>SPORTOPIA STELLAR PROGRAM : </strong>
                  This intensive after-school program is designed for students
                  aiming to excel in their chosen sport. Offered across
                  Introductory, Intermediate, and Advanced levels, athletes are
                  trained by Olympians/international players/ Arjuna Awardees
                  who have mentored champions and shaped future sporting
                  excellence.
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
                  This intensive full-time program is designed for students with
                  the passion, discipline, and potential to pursue professional
                  sports careers. Athletes receive personalized academic
                  support, with admission based on rigorous selection and
                  evaluation by expert coaching teams.
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
