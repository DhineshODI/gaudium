import Header from "../Components/Header";

export default function NewsandEvents() {
  const games = [
    {
      id: 1,
      gameImage: "/images/ourprograms/athletics.jpg",
      gameName: "Athletics",
      gameAboutContent:
        "Lorem ipsum dolor sit amet consectetur. Tristiq ue ornare dolor odio nulla. Id molestie tristi.",
      gameLinkL: "/athletics",
    },
    {
      id: 2,
      gameImage: "/images/ourprograms/cricket.jpg",
      gameName: "Cricket",
      gameAboutContent:
        "Lorem ipsum dolor sit amet consectetur. Tristiq ue ornare dolor odio nulla. Id molestie tristi.",
      gameLinkL: "/athletics",
    },
    {
      id: 3,
      gameImage: "/images/ourprograms/football.jpg",
      gameName: "Football",
      gameAboutContent:
        "Lorem ipsum dolor sit amet consectetur. Tristiq ue ornare dolor odio nulla. Id molestie tristi.",
      gameLinkL: "/athletics",
    },
    {
      id: 4,
      gameImage: "/images/ourprograms/swimming.png",
      gameName: "Swimming",
      gameAboutContent:
        "Lorem ipsum dolor sit amet consectetur. Tristiq ue ornare dolor odio nulla. Id molestie tristi.",
      gameLinkL: "/athletics",
    },
    {
      id: 5,
      gameImage: "/images/ourprograms/tennis.png",
      gameName: "Tennis",
      gameAboutContent:
        "Lorem ipsum dolor sit amet consectetur. Tristiq ue ornare dolor odio nulla. Id molestie tristi.",
      gameLinkL: "/athletics",
    },
  ];
  return (
    <>
      <>
        <Header />

        {/* Banner-Image */}

        <div className="aboutPage">
          <div className="bannerimagesection newsandeventsbanner">
            <div className="container max-w-7xl mx-auto px-4 aboutusbannersection">
              <div className="bannercontentflex">
                <p className="breadcrumbstext">
                  <span>Home</span> &gt; News & Events
                </p>

                <h2 className="mainheadingfont">News & Events</h2>
                <hr />

                <p className="paragraphtext contentbanner">
                  Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
                  pellentesq uescelerisque libero malesuada tristique Ultricies
                  leo viverra.
                </p>
              </div>
            </div>
            <p className="mainheadingfont banneroverlaytextall">
              News & Events
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
                    News & 
                  </h2>
                </div>
                <div className="secondheading lengthsecondHeading">
                  <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                   Events
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
