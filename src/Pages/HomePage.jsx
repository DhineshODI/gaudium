import { useEffect, useRef } from "react";
import Eventcalender from "../Components/EventCalender";
import HorizontalSlider from "../Components/GsapSlider";
import Header from "../Components/Header";
import InDoorSportsFunction from "../Components/IndoorSports";
import OutDoorSportsFunction from "../Components/OutDoorSports";
import ProgrammsBuild from "../Components/ProgramsBuild";
import ShowcaseProject from "../Components/ShowcaseProject";
import SportsSlider from "../Components/SportsSlider";
import SucessYouMore from "../Components/SucessYouMore";
import TheStrenthBehind from "../Components/TheStrengthBehind";
import VoicesofChampion from "../Components/VoicesofChampion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

import { useLocation } from "react-router-dom";

export default function Homepage({ menuOnclick, popupFunction }) {
  const location = useLocation();

  const sectionRef2 = useRef(null);
  const isHome = location.pathname === "/";

  useGSAP(
    () => {
      // Card-gal ovvonnum oru gap-la ulla vara 'stagger' use pandrom
      gsap.from(".expansivecards", {
        y: 100, // 100px keela irundhu start aagum
        opacity: 0, // Transparent-ah irukkum
        duration: 0.8,
        stagger: 0.2, // Ovvoru card-kum 0.2s gap irukkum
        scrollTrigger: {
          trigger: sectionRef2.current,
          start: "top 75%", // Section screen-oda 75%-ku varum pothu trigger aagum
          toggleActions: "play none none reverse", // Scroll back pannuna thirumba animate aagum
        },
      });
    },
    { scope: sectionRef2 },
  );

  return (
    <>
      <div className={`Homepagestyle ${isHome ? "homePlus" : ""}`}>
        {/* banner */}
        <div className="homepagebanner">
          <Header menuOnclick={menuOnclick} />
          <div className="homepageherobanner">
            <img
              src="/images/homepage/hero-banner.jpg"
              alt=""
              loading="eager"
              fetchpriority="high"
            />

            <div className="exploresectiondiv">
              <div className="exploreacademey click-btn btn-style511">
                <button
                  //  className="activebutton"

                  onClick={popupFunction}
                >
                  <span>Explore Academy</span>
                </button>
                <button onClick={popupFunction}>
                  <span>Book a Ground</span>
                </button>
                <button onClick={popupFunction}>
                  <span> Explore Events</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* banner */}

        {/* video-section */}

        <SucessYouMore />

        {/* video-section */}

        {/* Bg-Section */}

        <div className="maingbsectionhome">
          <div className="container max-w-7xl mx-auto px-4 ">
            <div className="videosectionmain homepageindiasresidental">
              <div className="firstheading lengthfirstHeading indiasfirst">
                <h2 className="stroke-fill-text mainheadingfont redcolorfont ">
                  India's first integrated
                </h2>
              </div>

              <div className="secondheading lengthsecondHeading residentalsports">
                <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont ">
                  residential sports school
                </h2>
              </div>
            </div>

            <div className="paravideosection">
              <p className="paragraphtext">
                Gaudium is India’s first integrated residential sports school,
                blending world-class academics with elite athletic training,
                holistic development, expert mentorship, and future-ready
                infrastructure for young champions across disciplines and
                competitive pathways.
              </p>
            </div>

            <div className="discovermorebutton">
              <a href="/about" className="buttonfont highlightedtextred">
                Discover More
              </a>
            </div>

            {/* <div>
              <div className="expansivecampsflex">
                <div className="expansivecards">
                  <div className="expansivefirstsec">
                    <h5>27</h5>
                    <p className="secondheadingtext">Acres</p>
                  </div>
                  <h4 className="paragraphtext">Expansive Campus</h4>
                  <p className="secondheadingtext avasttext">
                    A vast space built for all-round sports excellence.
                  </p>
                </div>
                <div className="expansivecards">
                  <div className="expansivefirstsec">
                    <h5>25</h5>
                    <p className="secondheadingtext">+</p>
                  </div>
                  <h4 className="paragraphtext">Sports Programs</h4>
                  <p className="secondheadingtext avasttext">
                    Learn, train, and compete across multiple disciplines.
                  </p>
                </div>
                <div className="expansivecards">
                  <div className="expansivefirstsec">
                    <h5>1L</h5>
                    <p className="secondheadingtext">{""}Sq. Ft.</p>
                  </div>
                  <h4 className="paragraphtext">Indoor Arena</h4>
                  <p className="secondheadingtext avasttext">
                    World-class indoor facilities for uninterrupted training.
                  </p>
                </div>
                <div className="expansivecards">
                  <div className="expansivefirstsec">
                    <h5>2L</h5>
                    <p className="secondheadingtext">Sq. Ft.</p>
                  </div>
                  <h4 className="paragraphtext">Outdoor Grounds</h4>
                  <p className="secondheadingtext avasttext">
                    Professional fields for top-level practice and play.
                  </p>
                </div>
              </div>
            </div> */}

            <div>
              <div className="expansivecampsflex" ref={sectionRef2}>
                <div className="expansivecards">
                  <div className="expansivefirstsec">
                    <h5>27</h5>
                    <p className="secondheadingtext">Acres</p>
                  </div>
                  <h4 className="paragraphtext">Expansive Campus</h4>
                  <p className="secondheadingtext avasttext">
                    A vast space built for all-round sports excellence.
                  </p>
                </div>
                <div className="expansivecards">
                  <div className="expansivefirstsec gap-1">
                    <h5>25</h5>
                    <p className="secondheadingtext plustextcontent">+</p>
                  </div>
                  <h4 className="paragraphtext">Sports Programs</h4>
                  <p className="secondheadingtext avasttext">
                    Learn, train, and compete across multiple disciplines.
                  </p>
                </div>
                <div className="expansivecards">
                  <div className="expansivefirstsec gap-2.5">
                    <h5>1L</h5>
                    <p className="secondheadingtext">Sq. Ft.</p>
                  </div>
                  <h4 className="paragraphtext">Indoor Arena</h4>
                  <p className="secondheadingtext avasttext">
                    World-class indoor facilities for uninterrupted training..
                  </p>
                </div>
                <div className="expansivecards">
                  <div className="expansivefirstsec gap-2.5">
                    <h5>2L</h5>
                    <p className="secondheadingtext">Sq. Ft.</p>
                  </div>
                  <h4 className="paragraphtext">Outdoor Grounds</h4>
                  <p className="secondheadingtext avasttext">
                    Professional fields for top-level practice and play.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bgimagesection">
            <img src="/images/homepage/bghomepage.png" alt="" />
          </div>
        </div>

        {/* <SportsSlider/> */}

        {/* <HorizontalSlider/> */}

        <div className="OutDoorSportsBG">
          <OutDoorSportsFunction />
          <InDoorSportsFunction />
        </div>

        <ProgrammsBuild />

        {/* <HorizontalSlider /> */}

        <Eventcalender popupFunction={popupFunction} />

        <TheStrenthBehind />

        <VoicesofChampion />

        <ShowcaseProject />

        {/* Bg-Section */}
      </div>
    </>
  );
}
