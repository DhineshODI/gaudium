import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function InDoorSportsFacility() {
  const InsportsData = {
    Badminton: [
      { src: "/images/our-infrastructure/badminton/badminton-01.jpg" },
      { src: "/images/our-infrastructure/badminton/badminton-02.jpg" },
      { src: "/images/our-infrastructure/badminton/badminton-03.jpg" },
      { src: "/images/our-infrastructure/badminton/badminton-04.jpg" },
      { src: "/images/our-infrastructure/badminton/badminton-05.jpg" },
      { src: "/images/our-infrastructure/badminton/badminton-06.jpg" },
      { src: "/images/our-infrastructure/badminton/badminton-07.jpg" },
    ],
    Gymnastics: [
      { src: "/images/our-infrastructure/gymnastics/gymnastics-01.jpg" },
      { src: "/images/our-infrastructure/gymnastics/gymnastics-02.jpg" },
      { src: "/images/our-infrastructure/gymnastics/gymnastics-03.jpg" },
      { src: "/images/our-infrastructure/gymnastics/gymnastics-04.jpg" },
      { src: "/images/our-infrastructure/gymnastics/gymnastics-05.jpg" },
      { src: "/images/our-infrastructure/gymnastics/gymnastics-06.jpg" },
      { src: "/images/our-infrastructure/gymnastics/gymnastics-07.jpg" },
      { src: "/images/our-infrastructure/gymnastics/gymnastics-08.jpg" },
      { src: "/images/our-infrastructure/gymnastics/gymnastics-09.jpg" },
      { src: "/images/our-infrastructure/gymnastics/gymnastics-10.jpg" },
      { src: "/images/our-infrastructure/gymnastics/gymnastics-11.jpg" },
    ],
    "Table Tennis": [
      // { src: "/images/our-infrastructure/indoor-sports/table-tennis-1." },
      // { src: "/images/our-infrastructure/indoor-sports/table-tennis-2." },
      // { src: "/images/our-infrastructure/indoor-sports/table-tennis-3." },
      // { src: "/images/our-infrastructure/indoor-sports/table-tennis-3." },
    ],
    Chess: [
      { src: "/images/our-infrastructure/chess/chess-01.jpg" },
      { src: "/images/our-infrastructure/chess/chess-02.jpg" },
      { src: "/images/our-infrastructure/chess/chess-03.jpg" },
      { src: "/images/our-infrastructure/chess/chess-04.jpg" },
      { src: "/images/our-infrastructure/chess/chess-05.jpg" },
    ],
    Squash: [
      { src: "/images/our-infrastructure/squash/squash-01.jpg" },
      { src: "/images/our-infrastructure/squash/squash-02.jpg" },
      { src: "/images/our-infrastructure/squash/squash-03.jpg" },
      { src: "/images/our-infrastructure/squash/squash-02.jpg" },
    ],

    Fencing: [
      { src: "/images/our-infrastructure/fencing/fencing-01.jpg" },
      { src: "/images/our-infrastructure/fencing/fencing-02.jpg" },
      { src: "/images/our-infrastructure/fencing/fencing-03.jpg" },
      { src: "/images/our-infrastructure/fencing/fencing-04.jpg" },
      { src: "/images/our-infrastructure/fencing/fencing-05.jpg" },
    ],
    Taekwondo: [
      { src: "/images/our-infrastructure/taekwondo/taekwondo-01.jpg" },
      { src: "/images/our-infrastructure/taekwondo/taekwondo-02.jpg" },
      { src: "/images/our-infrastructure/taekwondo/taekwondo-03.jpg" },
      { src: "/images/our-infrastructure/taekwondo/taekwondo-04.jpg" },
      { src: "/images/our-infrastructure/taekwondo/taekwondo-05.jpg" },
      { src: "/images/our-infrastructure/taekwondo/taekwondo-06.jpg" },
      { src: "/images/our-infrastructure/taekwondo/taekwondo-07.jpg" },
      { src: "/images/our-infrastructure/taekwondo/taekwondo-08.jpg" },
      { src: "/images/our-infrastructure/taekwondo/taekwondo-09.jpg" },
      { src: "/images/our-infrastructure/taekwondo/taekwondo-10.jpg" },
      { src: "/images/our-infrastructure/taekwondo/taekwondo-11.jpg" },
    ],
  };

  const [activeTab, setActiveTab] = useState("Badminton");
  const [index, setIndex] = useState(-1);

  const categories = Object.keys(InsportsData);
  const currentImages = InsportsData[activeTab] || [];
  return (
    <>
      <div className="mainoutsportssectionouter">
        <ul className="outsportssectionouter">
          {categories.map((sport) => (
            <li
              key={sport}
              className={`paragraphtext ${activeTab === sport ? "activestate" : ""}`}
              onClick={() => setActiveTab(sport)}
              style={{ cursor: "pointer" }}
            >
              {sport}
            </li>
          ))}
        </ul>

        <div className="firstoutsportssectionouter">
          {currentImages.map((image, idx) => (
            <div
              className="lightboximagesec"
              key={`${activeTab}-${idx}`}
              onClick={() => setIndex(idx)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={image.src}
                alt={`${activeTab} ${idx + 1}`}
                onError={(e) => {
                  e.target.src =
                    "/images/our-infrastructure/outdoor-sports/football-img-1.jpg";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="lightboximagesports">
        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={currentImages}
          render={{
            slide: ({ slide }) => (
              <img
                src={slide.src}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                onError={(e) => {
                  e.target.src =
                    "/images/our-infrastructure/outdoor-sports/football-img-1.jpg";
                }}
                alt="Sport"
              />
            ),
          }}
        />
      </div>
    </>
  );
}
