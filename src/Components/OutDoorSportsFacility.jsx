import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function OutDoorSportsFacility() {
  const InsportsData = {
    football: [
      { src: "/images/our-infrastructure/indoor-sports/badminton-1.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/badminton-2.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/badminton-3.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/badminton-3.jpg" },
    ],
    Cricket: [
      { src: "/images/our-infrastructure/indoor-sports/gymnastics-1.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/gymnastics-2.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/gymnastics-2.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/gymnastics-2.jpg" },
    ],
    Athletics: [
      { src: "/images/our-infrastructure/indoor-sports/table-tennis-1.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/table-tennis-2.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/table-tennis-3.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/table-tennis-3.jpg" },
    ],
    Basketball: [
      { src: "/images/our-infrastructure/indoor-sports/chess-1.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/chess-2.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/chess-2.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/chess-2.jpg" },
    ],
    Tennis: [
      { src: "/images/our-infrastructure/indoor-sports/squash-1.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/squash-2.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/squash-2.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/squash-2.jpg" },
    ],
    Skating: [
      { src: "/images/our-infrastructure/indoor-sports/taekwondo-1.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/taekwondo-2.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/taekwondo-2.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/taekwondo-2.jpg" },
    ],
    Swimming: [
      { src: "/images/our-infrastructure/indoor-sports/taekwondo-1.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/taekwondo-2.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/taekwondo-2.jpg" },
      { src: "/images/our-infrastructure/indoor-sports/taekwondo-2.jpg" },
    ],
  };

  const [activeTab, setActiveTab] = useState("football");
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
