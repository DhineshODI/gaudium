import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const strengthData = [
  {
    sport: "Tennis ",
    role: "mentor ",
    img: "/images/homepage/thestrengthimageone.png",
    name: "Vijaykumar",
  },
  {
    sport: "Swimming ",
    role: "coach ",
    img: "/images/homepage/thestrengthimagetwo.png",
    name: "C. JACOB VIJAY KUMAR",
  },
  {
    sport: "Cricket ",
    role: "coach ",
    img: "/images/homepage/thestrengthimageone.png",
    name: "Omer",
  },

  {
    sport: "Football  ",
    role: "coach  ",
    img: "/images/homepage/thestrengthimageone.png",
    name: "CHINTHA GURUPRASAD",
  },
];

export default function AboutusTheStrengthSection() {
  const coachContainer = useRef();

  useGSAP(
    () => {
      // Select all coach cards
      const cards = gsap.utils.toArray(".strengthsectioncard");

      gsap.from(cards, {
        y: 150, // 150px bottom-la irundhu varum
        opacity: 0, // Mella reveal aagum
        scale: 0.9, // Konjam chinathula irundhu perusaagum
        duration: 1.2,
        ease: "power4.out", // Smooth ending
        stagger: {
          amount: 0.5, // Total time for all cards to start
          from: "start", // Left to right order-la varum
        },
        scrollTrigger: {
          trigger: coachContainer.current,
          start: "top 80%", // Screen center varadhuku munnadiye start aagum
        },
      });
    },
    { scope: coachContainer },
  );
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
              A dedicated team of elite coaches and support staff driving
              performance, discipline and excellence behind every athlete.
            </p>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4" ref={coachContainer}>
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

          {/* <div className="discovermorebutton">
            <a className="buttonfont highlightedtextred">Discover More</a>
          </div> */}
        </div>
      </div>
    </>
  );
}
