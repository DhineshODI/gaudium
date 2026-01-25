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

import { useLocation } from "react-router-dom";

export default function Homepage({ menuOnclick }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <div className={`Homepagestyle ${isHome ? "homePlus" : ""}`}>
        {/* banner */}
        <div className="homepagebanner">
          <Header menuOnclick={menuOnclick} />
          <div className="homepageherobanner">
            <img src="/images/homepage/hero-banner.jpg" alt="" />

            <div className="exploresectiondiv">
              <div className="exploreacademey">
                <button className="activebutton">Explore Academy</button>
                <button>Book a Ground</button>
                <button>Explore Events</button>
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

            <div>
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
            </div>
          </div>

          <div className="bgimagesection">
            <img src="/images/homepage/bghomepage.png" alt="" />
          </div>
        </div>

        {/* <SportsSlider/> */}

        <div className="OutDoorSportsBG">
          <OutDoorSportsFunction />
          <InDoorSportsFunction />
        </div>

        {/* <HorizontalSlider/> */}

        <ProgrammsBuild />

        {/* <HorizontalSlider /> */}

        <Eventcalender />

        <TheStrenthBehind />

        <VoicesofChampion />

        <ShowcaseProject />

        {/* Bg-Section */}
      </div>
    </>
  );
}
