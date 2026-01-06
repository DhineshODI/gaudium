const strengthData = [
  {
    sport: "BADMINTON",
    role: "chief advisor",
    img: "/images/homepage/thestrengthimageone.png",
    name: "pullela gopichand",
  },
  {
    sport: "GYMNASTICS",
    role: "mentor",
    img: "/images/homepage/thestrengthimagetwo.png",
    name: "Bharathi Dasan",
  },
  {
    sport: "BADMINTON",
    role: "chief advisor",
    img: "/images/homepage/thestrengthimageone.png",
    name: "pullela gopichand",
  },
  {
    sport: "BADMINTON",
    role: "chief advisor",
    img: "/images/homepage/thestrengthimageone.png",
    name: "pullela gopichand",
  },
  {
    sport: "BADMINTON",
    role: "chief advisor",
    img: "/images/homepage/thestrengthimageone.png",
    name: "pullela gopichand",
  },
  {
    sport: "BADMINTON",
    role: "chief advisor",
    img: "/images/homepage/thestrengthimageone.png",
    name: "pullela gopichand",
  },
];
export default function AboutusTheStrengthSection() {
  return (
    <>
      <div className="aboutusstrengthsecmain">
        <div>
          <div className="videosectionmain">
            <div className="firstheading lengthfirstHeading">
              <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                The Strength
              </h2>
            </div>

            <div className="secondheading lengthsecondHeading">
              <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                Behind the Squad
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
        </div>

        <div className="container max-w-7xl mx-auto px-4">
          <div className="strengthaboutusflex">
            {strengthData.map((item) => (
              <div className="strengthsectioncard">
                <div className="divsportsnamestregnth">
                  <div className="firststrengthsectioncard">
                    <p className="sportsnamestregnth">{item.sport}</p>
                    <h4 className="roleinstrength whitecolorfont">
                      {item.role}
                    </h4>
                  </div>
                </div>

                <div className="sportsnamestregnthimage">
                  <img src={item.img} alt={item.sport} />
                </div>

                <div className="divnameoftheplayer">
                  <p className="nameoftheplayer">{item.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="discovermorebutton">
            <a className="buttonfont highlightedtextred">Discover More</a>
          </div>
        </div>
      </div>
    </>
  );
}
