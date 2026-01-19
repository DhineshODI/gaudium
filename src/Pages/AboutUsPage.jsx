import AboutusTheStrengthSection from "../Components/AboutUsTheStrengthBehind";
import Header from "../Components/Header";

export default function AboutUsPage({ menuOnclick }) {
  return (
    <>
      <Header menuOnclick={menuOnclick} />

      {/* Banner-Image */}

      <div className="aboutPage">
        <div className="bannerimagesection">
          <div className="container max-w-7xl mx-auto px-4 aboutusbannersection">
            <div className="bannercontentflex">
              <p className="breadcrumbstext">
                <span>Home</span> &gt; About us
              </p>
              <h2 className="mainheadingfont">About us</h2>
              <hr />

              <p className="paragraphtext contentbanner">
                Know about India’s first integrated residential sports school
                shaping champions through world-class coaching, academics and
                elite infrastructure.
              </p>
            </div>
          </div>

          <p className="mainheadingfont banneroverlaytextall">About Us</p>
        </div>
      </div>
      {/* Banner-Image */}

      {/* The Heart Of Section */}

      <div className="heartofsection">
        <div className="videosectionmain">
          <div className="firstheading">
            <h2 className="stroke-fill-text mainheadingfont redcolorfont">
              The Heart of
            </h2>
          </div>

          <div className="secondheading">
            <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
              Our Academy
            </h2>
          </div>
        </div>
        <div>
          <div className="container max-w-7xl mx-auto px-4 theheartcontent">
            <div className="theheartcontentflex">
              <div className="firstsecheart">
                <h4 className="oursection">Our</h4>
                <h2 className="visionsection">Vision</h2>
                <p className="paragraphtext">
                  To provide India’s best integrated sports training ecosystem
                  that nurtures athletic excellence alongside academic growth,
                  creating future-ready champions through world-class
                  infrastructure, expert coaching, holistic development and a
                  lifelong commitment to sport and learning.
                </p>
              </div>
              <img
                className="secondsecheart"
                src="/images/abouts/theheartsectionimage.png"
                alt=""
              />
              <div className="thirdsecheart">
                <h4 className="oursection">Our</h4>
                <h2 className="visionsection">Mission</h2>
                <p className="paragraphtext">
                  To build an end-to-end sports training ecosystem uniting
                  international education and world-class coaching, empowering
                  all stakeholders to develop consistent excellence, nurture
                  champions and make sport an integral, disciplined and
                  enriching part of everyday life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Heart Of Section */}

      {/* Highlights That Inspire */}

      <div className="highlightssection">
        <div className="videosectionmain">
          <div className="firstheading">
            <h2 className="stroke-fill-text mainheadingfont whitefontcolor">
              Highlights
            </h2>
          </div>

          <div className="secondheading">
            <h2 className="stroke-fill-text1 mainheadingfont whitecolortransperant">
              That Inspire
            </h2>
          </div>
        </div>

        <div className="paravideosection">
          <p className="paragraphtext">
            World-class sports facilities built to international standards,
            offering students the infrastructure, coaching and environment to
            achieve peak performance across multiple disciplines.
          </p>
        </div>

        <div className="container max-w-7xl mx-auto px-4">
          <div className="eachcardsection">
            <div className="firstcardhighlights">
              <img src="/images/abouts/aboutus-icon.svg" alt="" />
              <h4 className="headingtexthighlights paragraphtext">
                FIG-Standard Facilities
              </h4>
              <p className="contenthightlights secondheadingtext">
                State-of-the-art gymnastics facilities built to FIG standards,
                supporting technical precision, safe training, skill
                progression, and competitive readiness for athletes.
              </p>
            </div>
            <div className="firstcardhighlights">
              <img src="/images/abouts/aboutus-icon.svg" alt="" />
              <h4 className="headingtexthighlights paragraphtext">
                FIFA-standard fields
              </h4>
              <p className="contenthightlights secondheadingtext">
                Professional soccer fields built to FIFA standards, enabling
                skill development, tactical training, competitive matches, and
                nurturing future football champions.
              </p>
            </div>
            <div className="firstcardhighlights">
              <img src="/images/abouts/aboutus-icon.svg" alt="" />
              <h4 className="headingtexthighlights paragraphtext">
                ITF-compliant courts
              </h4>
              <p className="contenthightlights secondheadingtext">
                World-class tennis courts designed to ITF specifications,
                providing ideal conditions for coaching, practice, tournaments,
                and athlete growth.
              </p>
            </div>
            <div className="firstcardhighlights">
              <img src="/images/abouts/aboutus-icon.svg" alt="" />
              <h4 className="headingtexthighlights paragraphtext">
                IAAF-approved tracks
              </h4>
              <p className="contenthightlights secondheadingtext">
                Premium athletics tracks certified by IAAF, supporting
                sprinting, long-distance, and field events with precision
                training and performance monitoring.
              </p>
            </div>
            <div className="firstcardhighlights">
              <img src="/images/abouts/aboutus-icon.svg" alt="" />
              <h4 className="headingtexthighlights paragraphtext">
                BWF-standard courts
              </h4>
              <p className="contenthightlights secondheadingtext">
                Badminton courts built to BWF standards, ensuring high-quality
                training, competitive practice, and development of elite
                players.
              </p>
            </div>
            <div className="firstcardhighlights">
              <img src="/images/abouts/aboutus-icon.svg" alt="" />
              <h4 className="headingtexthighlights paragraphtext">
                FIBA-certified courts
              </h4>
              <p className="contenthightlights secondheadingtext">
                Basketball courts meeting FIBA regulations, offering optimal
                space for drills, gameplay and honing professional-level skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights That Inspire */}

      {/* The Strength Slider */}

      <AboutusTheStrengthSection />

      {/* The Strength Slider */}
    </>
  );
}
