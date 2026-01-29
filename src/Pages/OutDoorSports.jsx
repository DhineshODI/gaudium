import Header from "../Components/Header";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function OutDoorSportsPage({ menuOnclick }) {
  const games = [
    {
      id: 1,
      gameImage: "/images/ourprograms/athletics.jpg",
      gameName: "Athletics",
      gameAboutContent:
        "A track-and-field sport enhancing speed, endurance, strength, agility, coordination and competitive performance across multiple events.",
      gameLinkL: "/sport/athletics",
    },
    {
      id: 2,
      gameImage: "/images/ourprograms/cricket.jpg",
      gameName: "Cricket",
      gameAboutContent:
        "A strategic team sport developing batting, bowling, fielding skills, teamwork, focus and match awareness consistently.",
      gameLinkL: "/sport/cricket",
    },
    {
      id: 3,
      gameImage: "/images/ourprograms/football.jpg",
      gameName: "Football",
      gameAboutContent:
        "A high-intensity team sport improving stamina, coordination, tactical understanding, ball control, teamwork and competitive spirit.",
      gameLinkL: "/sport/football",
    },
    {
      id: 4,
      gameImage: "/images/ourprograms/swimming.png",
      gameName: "Swimming",
      gameAboutContent:
        "A full-body water sport building strength, endurance, technique, flexibility, speed and aquatic confidence for all levels.",
      gameLinkL: "/sport/swimming",
    },
    {
      id: 5,
      gameImage: "/images/ourprograms/tennis.png",
      gameName: "Tennis",
      gameAboutContent:
        "A fast-paced racquet sport developing agility, precision, strategy, reflexes, stamina and competitive match readiness effectively.",
      gameLinkL: "/sport/tennis",
    },
  ];

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
      // Parent container kulla irukira cards-ah array-ah edukkom
      const cards = gsap.utils.toArray(".outdoorsportscards");

      gsap.from(cards, {
        y: 100, // 100px keela irundhu start aagum
        opacity: 0, // Mella reveal aagum
        duration: 1.5,
        ease: "power2.out",

        // Cards ovvonna delay aagi vara (Dynamic cards-ku idhu dhaan best)
        stagger: 0.4,

        scrollTrigger: {
          trigger: ".cardsflexcontaineroutdoor", // Cards irukira parent div
          start: "top 85%", // Viewport-kulla varumbodhu trigger aagum
          toggleActions: "play none none reverse", // Scroll back pannuna thirumba animate aagum
        },
      });
    },
    { scope: sectionRef1 }, // Unga outer container ref
  );

  return (
    <>
      <>
        <Header menuOnclick={menuOnclick} />

        {/* Banner-Image */}

        <div className="aboutPage" ref={sectionRef}>
          <div className="bannerimagesection outdoorsports">
            <div className="container max-w-7xl mx-auto px-4 aboutusbannersection">
              <div className="bannercontentflex">
                <p className="breadcrumbstext">
                  <span>Home</span> &gt; Outdoor Sports
                </p>

                <h2 className="mainheadingfont">Our Programs</h2>
                <hr />

                <p className="paragraphtext contentbanner">
                  World-class outdoor facilities designed to build strength,
                  skill, teamwork and competitive excellence through structured
                  training and play.
                </p>
              </div>
            </div>
            <p className="mainheadingfont banneroverlaytextall">
              Outdoor Sports
            </p>
          </div>
        </div>
        {/* Banner-Image */}

        {/* card-section */}

        <div className="outdoorsportsmain">
          <div className="container max-w-7xl mx-auto px-4 ">
            <div className="cardssectionoutdoor">
              <div className="videosectionmain">
                <div className="firstheading lengthfirstHeading">
                  <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                    Fueling Passion
                  </h2>
                </div>
                <div className="secondheading lengthsecondHeading">
                  <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                    in Outdoor Arenas
                  </h2>
                </div>
              </div>

              <div className="paravideosection">
                <p className="paragraphtext">
                  State of the art outdoor facilities designed for skill
                  development, fitness, teamwork and competitive excellence
                  across multiple sports disciplines.
                </p>
              </div>
            </div>

            <div
              className="outerdivcontainer outdoorcardsconatinre"
              ref={sectionRef1}
            >
              <div className="cardsflexcontaineroutdoor">
                {games.map((game) => (
                  <div className="outdoorsportscards">
                    <img
                      className="outdoorsportscardsimg"
                      src={game.gameImage}
                      alt=""
                    />
                    <div className="flexdiourprogrem">
                      <h4 className="outdoorgamesports">{game.gameName}</h4>
                      <p className="secondheadingtext">
                        {game.gameAboutContent}
                      </p>

                      <a
                        href={game.gameLinkL}
                        className="exploremorebutton buttonfont"
                      >
                        explore More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* card-section */}
      </>
    </>
  );
}
