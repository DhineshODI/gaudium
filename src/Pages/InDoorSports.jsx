import Header from "../Components/Header";

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
  return (
    <>
      <>
        <Header  menuOnclick={menuOnclick}/>

        {/* Banner-Image */}

        <div className="aboutPage">
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

            <div className="outerdivcontainer indoorcardsconatinre">
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
