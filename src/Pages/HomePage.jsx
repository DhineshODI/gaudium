import Eventcalender from "../Components/EventCalender";
import Header from "../Components/Header";
import ProgrammsBuild from "../Components/ProgramsBuild";
import ShowcaseProject from "../Components/ShowcaseProject";
import SportsSlider from "../Components/SportsSlider";
import SucessYouMore from "../Components/SucessYouMore";
import TheStrenthBehind from "../Components/TheStrengthBehind";
import VoicesofChampion from "../Components/VoicesofChampion"

export default function Homepage() {
  return (
    <>
      <div className="Homepagestyle">
        {/* banner */}
        <div className="homepagebanner">
          <Header />
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

        {/* <div className="homevideosection">
          <div className="container max-w-7xl mx-auto px-4 ">
            <div className="videosectionmain">
              <div className="firstheading">
                <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                  Success You
                </h2>
              </div>

              <div className="secondheading">
                <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                  Can Measure
                </h2>
              </div>
            </div>

            <div className="paravideosection">
              <p className="paragraphtext">
                Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
                pellentesq uescelerisque libero malesuada tristique Ultricies
                leo viverra.
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
        </div> */}

        <SucessYouMore />

        {/* video-section */}

        {/* Bg-Section */}

        <div className="maingbsectionhome">
          <div className="container max-w-7xl mx-auto px-4 ">
            <div className="videosectionmain">
              <div className="firstheading">
                <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                  India's first integrated
                </h2>
              </div>

              <div className="secondheading">
                <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                  residential sports school
                </h2>
              </div>
            </div>

            <div className="paravideosection">
              <p className="paragraphtext">
                Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
                pellentesque scelerisque libero malesuada tristique urna.
                Ultricies leo viverra tincidunt pharetra pretium pulvinar orci.
                In vel ac magna velit rhoncus nibh etiam. Scelerisque varius
                pretium elitneque pellentesque Quis cursus elit rhoncus.
              </p>
            </div>

            <div className="discovermorebutton">
              <button className="buttonfont">Discover More</button>
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
                    <h5>27</h5>
                    <p className="secondheadingtext">Acres</p>
                  </div>
                  <h4 className="paragraphtext">Expansive Campus</h4>
                  <p className="secondheadingtext avasttext">
                    A vast space built for all-round sports excellence.
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

        <ProgrammsBuild />

        <Eventcalender />

        <TheStrenthBehind />

        <VoicesofChampion />

        <ShowcaseProject />

        {/* Bg-Section */}
      </div>
    </>
  );
}
