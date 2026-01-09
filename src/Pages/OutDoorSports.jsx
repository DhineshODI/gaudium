import Header from "../Components/Header";

export default function OutDoorSportsPage() {
  const games = [
    {
      id: 1,
      gameImage: "/images/ourprograms/athletics.jpg",
      gameName: "Athletics",
      gameAboutContent:
        "A track-and-field sport enhancing speed, endurance, strength, agility, coordination and competitive performance across multiple events.",
      gameLinkL: "/athletics",
    },
    {
      id: 2,
      gameImage: "/images/ourprograms/cricket.jpg",
      gameName: "Cricket",
      gameAboutContent:
        "A strategic team sport developing batting, bowling, fielding skills, teamwork, focus and match awareness consistently.",
      gameLinkL: "/athletics",
    },
    {
      id: 3,
      gameImage: "/images/ourprograms/football.jpg",
      gameName: "Football",
      gameAboutContent:
        "A high-intensity team sport improving stamina, coordination, tactical understanding, ball control, teamwork and competitive spirit.",
      gameLinkL: "/athletics",
    },
    {
      id: 4,
      gameImage: "/images/ourprograms/swimming.png",
      gameName: "Swimming",
      gameAboutContent:
        "A full-body water sport building strength, endurance, technique, flexibility, speed and aquatic confidence for all levels.",
      gameLinkL: "/athletics",
    },
    {
      id: 5,
      gameImage: "/images/ourprograms/tennis.png",
      gameName: "Tennis",
      gameAboutContent:
        "A fast-paced racquet sport developing agility, precision, strategy, reflexes, stamina and competitive match readiness effectively.",
      gameLinkL: "/athletics",
    },
  ];
  return (
    <>
      <>
        <Header />

        {/* Banner-Image */}

        <div className="aboutPage">
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

            <div className="outerdivcontainer">
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

                      <a className="exploremorebutton buttonfont">
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
