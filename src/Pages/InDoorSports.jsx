import Header from "../Components/Header";

export default function InDoorSportsPage() {
  const games = [
    {
      id: 1,
      gameImage: "/images/indoorsports/badminton.jpg",
      gameName: "Athletics",
      gameAboutContent:
        "Lorem ipsum dolor sit amet consectetur. Tristiq ue ornare dolor odio nulla. Id molestie tristi.",
      gameLinkL: "/badminton",
    },
    {
      id: 2,
      gameImage: "/images/indoorsports/basketball.jpg",
      gameName: "Badminton",
      gameAboutContent:
        "Lorem ipsum dolor sit amet consectetur. Tristiq ue ornare dolor odio nulla. Id molestie tristi.",
      gameLinkL: "/basketball",
    },
    {
      id: 3,
      gameImage: "/images/indoorsports/fenching.jpg",
      gameName: "Football",
      gameAboutContent:
        "Lorem ipsum dolor sit amet consectetur. Tristiq ue ornare dolor odio nulla. Id molestie tristi.",
      gameLinkL: "/fenching",
    },
    {
      id: 4,
      gameImage: "/images/indoorsports/gymastics.jpg",
      gameName: "Swimming",
      gameAboutContent:
        "Lorem ipsum dolor sit amet consectetur. Tristiq ue ornare dolor odio nulla. Id molestie tristi.",
      gameLinkL: "/gymastics",
    },
    {
      id: 5,
      gameImage: "/images/indoorsports/skating.jpg",
      gameName: "Skating",
      gameAboutContent:
        "Lorem ipsum dolor sit amet consectetur. Tristiq ue ornare dolor odio nulla. Id molestie tristi.",
      gameLinkL: "/skating",
    },
  ];
  return (
    <>
      <>
        <Header />

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
                  Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
                  pellentesq uescelerisque libero malesuada tristique Ultricies
                  leo viverra.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Banner-Image */}

        {/* card-section */}

        <div className="outdoorsportsmain">
          <div className="container max-w-7xl mx-auto px-4 ">
            <div className="cardssectionoutdoor">
              <div className="videosectionmain">
                <div className="firstheading">
                  <h2 className="stroke-fill-text mainheadingfont redcolorfont lineheight120">
                    Indoor Action,
                  </h2>
                </div>
                <div className="secondheading">
                  <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                    Endless Passion
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
