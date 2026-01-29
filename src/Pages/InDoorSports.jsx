import Header from "../Components/Header";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function InDoorSportsPage({ menuOnclick }) {
  const games = [
    {
      id: 1,
      gameImage: "/images/indoorsports/badminton.jpg",
      gameName: "Badminton",
      gameAboutContent:
        "A fast-paced racquet sport that builds agility, reflexes, endurance, and sharp tactical thinking skills.",
      gameLinkL: "/sport/badminton",
    },
    {
      id: 2,
      gameImage: "/images/indoorsports/basketball.jpg",
      gameName: "Basketball",
      gameAboutContent:
        "A dynamic team sport focusing on speed, coordination, strategy, and high-intensity athletic performance levels.",
      gameLinkL: "/sport/basketball",
    },
    {
      id: 3,
      gameImage: "/images/indoorsports/fenching.jpg",
      gameName: "Fencing",
      gameAboutContent:
        "A precision-based combat sport developing lightning reflexes, strategy, discipline, and intense mental focus skills.",
      gameLinkL: "/sport/fenching",
    },
    {
      id: 4,
      gameImage: "/images/indoorsports/gymastics.jpg",
      gameName: "Gymnastics",
      gameAboutContent:
        "A foundation sport enhancing strength, flexibility, balance, coordination, body control, and technical movement mastery.",
      gameLinkL: "/sport/gymnastics",
    },
    {
      id: 5,
      gameImage: "/images/indoorsports/skating.jpg",
      gameName: "Skating",
      gameAboutContent:
        "A skill-driven sport improving balance, speed, control, confidence, coordination, and overall movement efficiency development.",
      gameLinkL: "/sport/skating",
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
      const cards = gsap.utils.toArray(".outdoorsportscards");

      gsap.from(cards, {
        y: 150, // Distance konjam athigam panniruken, appo thaan slow-ah vara feel kidaikkum
        opacity: 0,
        duration: 1.5, // 1s-la irunthu 1.8s-ku mathiruken (Ippo nalla slow-ah varum)
        ease: "power3.out", // Innum smooth-ana easing

        // Cards mella aduthu aduthu vara delay
        stagger: 0.4, // 0.2-la irunthu 0.4s-ku yethiruken

        scrollTrigger: {
          trigger: ".cardsflexcontaineroutdoor",
          start: "top 90%", // Screen-oda konjam keela irukkum pothe start aagum
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef1 },
  );

  return (
    <>
      <>
        <Header menuOnclick={menuOnclick} />

        {/* Banner-Image */}

        <div className="aboutPage" ref={sectionRef}>
          <div className="bannerimagesection indoorsports">
            <div className="container max-w-7xl mx-auto px-4 aboutusbannersection">
              <div className="bannercontentflex">
                <p className="breadcrumbstext">
                  <span>Home</span> &gt; Indoor Sports
                </p>

                <h2 className="mainheadingfont">Indoor Sports</h2>
                <hr />

                <p className="paragraphtext contentbanner">
                  Purpose-built indoor facilities enabling year-round training,
                  precision skill development and peak performance across
                  multiple sporting disciplines
                </p>
              </div>
            </div>
            <p className="mainheadingfont banneroverlaytextall">
              indoor Sports
            </p>
          </div>
        </div>
        {/* Banner-Image */}

        {/* card-section */}

        <div className="outdoorsportsmain indoorsportsmaincss">
          <div className="container max-w-7xl mx-auto px-4 ">
            <div className="cardssectionoutdoor">
              <div className="videosectionmain">
                <div className="firstheading lengthfirstHeading">
                  <h2 className="stroke-fill-text mainheadingfont redcolorfont lineheight120">
                    Indoor Action,
                  </h2>
                </div>
                <div className="secondheading lengthsecondHeading">
                  <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                    Endless Passion
                  </h2>
                </div>
              </div>

              <div className="paravideosection">
                <p className="paragraphtext">
                  Experience high-energy indoor sports in world-class arenas,
                  where focused training, year-round play and competitive
                  intensity fuel skill development and peak athletic
                  performance.
                </p>
              </div>
            </div>

            <div
              className="outerdivcontainer indoorcardsconatinre"
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

                      <a href={game.gameLinkL}>
                        <button className="exploremorebutton buttonfont">
                          explore More
                        </button>
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
