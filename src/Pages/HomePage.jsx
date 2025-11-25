import Header from "../Components/Header";

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

        <div className="homevideosection">
          <div className="container max-w-7xl mx-auto px-4 ">
            <div className="videosectionmain">
              <div>
                <h2
                  className="mainheadingfont topleftheading"
                  data-text="Success You"
                >
                  Success You
                </h2>
              </div>

              <div>
                <h2
                  className="mainheadingfont bottomrightheading"
                  data-text="Can Measure"
                >
                  Can Measure
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* video-section */}
      </div>
    </>
  );
}
