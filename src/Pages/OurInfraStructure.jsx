import Header from "../Components/Header";
import InDoorSportsFacility from "../Components/InDoorSportsFacility";
import OutDoorSportsFacility from "../Components/OutDoorSportsFacility";

export default function OurInfraStructure({ menuOnclick }) {
  return (
    <>
      <Header  menuOnclick={menuOnclick}/>

      {/* Banner-Image */}

      <div className="aboutPage">
        <div className="bannerimagesection ourinfrastructrebg ">
          <div className="container max-w-7xl mx-auto px-4 aboutusbannersection">
            <div className="bannercontentflex">
              <p className="breadcrumbstext">
                <span>Home</span> &gt; Our Infrastructure
              </p>
              <h2 className="mainheadingfont">Our Infrastructure</h2>
              <hr />

              <p className="paragraphtext contentbanner">
                Cutting-edge sports infrastructure combining world-class
                facilities and expert design for training, performance and
                athlete development.
              </p>
            </div>
          </div>

          <p className="mainheadingfont banneroverlaytextall">
            Our Infrastructure
          </p>
        </div>
      </div>
      {/* Banner-Image */}

      {/* World-Class */}

      <div className="maingbsectionhome ourinfrastructurebgdetail">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="videosectionmain">
            <div className="firstheading lengthfirstHeading">
              <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                World-Class
              </h2>
            </div>

            <div className="secondheading lengthsecondHeading">
              <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                Sports Infrastructure
              </h2>
            </div>
          </div>

          <div className="paravideosection">
            <p className="paragraphtext">
              Gaudium Sportopia offers world-class sports infrastructure,
              featuring professionally designed courts, fields, arenas and
              training facilities. Every detail meets international standards,
              providing athletes with the environment, equipment and technology
              needed to train and excel at the highest level.
            </p>
          </div>

          {/* <div className="discovermorebutton">
            <a className="buttonfont highlightedtextred">Discover More</a>
          </div> */}

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

        {/* <div className="bgimagesection">
          <img src="/images/homepage/bghomepage.png" alt="" />
        </div> */}
      </div>

      {/* World-Class */}

      {/* OutDoor Sports Facilities */}

      <div className="outdoorsportsFacilitisSection">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="videosectionmain">
            <div className="firstheading">
              <h2 className="stroke-fill-text mainheadingfont whitefontcolor">
                outdoor sports
              </h2>
            </div>
            <div className="secondheading">
              <h2 className="stroke-fill-text1 mainheadingfont whitecolortransperant">
                Facilities
              </h2>
            </div>
          </div>
          <div className="paravideosection">
            <p className="paragraphtext slidermainsecpara">
              Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
              pellentesq uescelerisque libero malesuada tristique Ultricies leo
              viverra.
            </p>
          </div>
          <OutDoorSportsFacility />
        </div>
      </div>

      {/* OutDoor Sports Facilities */}

      {/* InDoor Sports Facilities */}

      <div className="outdoorsportsFacilitisSection Indoorfacilitybg">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="videosectionmain">
            <div className="firstheading">
              <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                indoor sports
              </h2>
            </div>
            <div className="secondheading">
              <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                Facilities
              </h2>
            </div>
          </div>
          <div className="paravideosection">
            <p className="paragraphtext">
              Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
              pellentesq uescelerisque libero malesuada tristique Ultricies leo
              viverra.
            </p>
          </div>
          <InDoorSportsFacility />
        </div>
      </div>

      {/* InDoor Sports Facilities */}
    </>
  );
}
