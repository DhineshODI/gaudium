import Header from "../Components/Header";

export default function OurPrograms() {
  return (
    <>
      <Header />

      {/* Banner-Image */}

      <div className="aboutPage">
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

          <div>
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

                <p className="paragraphtext paragatwoprogram">
                  Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
                  pellentesque scelerisque libero malesuada tristique urna.
                </p>
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

                <p className="paragraphtext paragatwoprogram">
                  Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
                  pellentesque scelerisque libero malesuada tristique urna.
                </p>
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

                <p className="paragraphtext paragatwoprogram">
                  Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
                  pellentesque scelerisque libero malesuada tristique urna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs that build  */}
    </>
  );
}
