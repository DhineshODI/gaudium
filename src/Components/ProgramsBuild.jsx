import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AOS from "aos";
export default function ProgrammsBuild() {
  const sectionRef3 = useRef(null);
  useGSAP(
    () => {
      // Card-gal ovvonnum oru gap-la ulla vara 'stagger' use pandrom
      gsap.from(".cardProgrammsBuildflexsection ", {
        y: 100, // 100px keela irundhu start aagum
        opacity: 0, // Transparent-ah irukkum
        duration: 1.5,
        stagger: 0.2, // Ovvoru card-kum 0.2s gap irukkum
        scrollTrigger: {
          trigger: sectionRef3.current,
          start: "top 75%", // Section screen-oda 75%-ku varum pothu trigger aagum
          toggleActions: "play none none reverse", // Scroll back pannuna thirumba animate aagum
        },
      });
    },
    { scope: sectionRef3 },
  );
  return (
    <>
      <div className="programsbuildsection">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="videosectionmain">
            <div className="firstheading">
              <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                Programs That
              </h2>
            </div>

            <div className="secondheading">
              <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                build Champions
              </h2>
            </div>
          </div>
          <div className="paravideosection">
            <p className="paragraphtext">
              A structured pathway from discovery to elite performance, guided
              by champion coaches at every stage level.
            </p>
          </div>
        </div>

        <div className="responsivecontinerr">
          <div className="oneresponsivecontinerr">
            <div className="ProgrammsBuildflexsection" ref={sectionRef3}>
              <div className="cardProgrammsBuildflexsection firstimage1">
                <div>
                  <p className="sportsnamestregnth">Sportopia</p>
                  <h4 className="roleinstrength whitecolorfont">rookie</h4>
                </div>

                <div className="contentbuildsection">
                  Building strong fundamentals through guided introduction,
                  helping young athletes discover skills, confidence, discipline
                  and love for sport.
                </div>

                <div className="becomeachampion">
                  <a
                    href="/our-programs"
                    className="buttonfont highlightedtextopposite"
                  >
                    Discover More
                  </a>
                </div>
              </div>
              <div className="cardProgrammsBuildflexsection secondimage1">
                <div>
                  <p className="sportsnamestregnth">Sportopia</p>
                  <h4 className="roleinstrength whitecolorfont">Stellar</h4>
                </div>

                <div className="contentbuildsection">
                  Intensive training for committed athletes, sharpening
                  technique, fitness and competitive mindset to consistently
                  elevate performance levels.
                </div>

                <div className="becomeachampion">
                  <a
                    href="/our-programs"
                    className="buttonfont highlightedtextoppositeblue"
                  >
                    Discover More
                  </a>
                </div>
              </div>
              <div className="cardProgrammsBuildflexsection thirdimage1">
                <div>
                  <p className="sportsnamestregnth">Stellar</p>
                  <h4 className="roleinstrength whitecolorfont">Prodigy</h4>
                </div>

                <div className="contentbuildsection">
                  An elite full-time program nurturing high-potential athletes
                  through intensive training, academic support, coach selection,
                  tournaments.
                </div>

                <div className="becomeachampion">
                  <a
                    href="/our-programs"
                    className="buttonfont highlightedtextopposite"
                  >
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
