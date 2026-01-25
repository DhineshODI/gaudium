import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function OutDoorSportsFacility() {
  const InsportsData = {
    football: [
      { src: "/images/our-infrastructure/football/football-01.jpg" },
      { src: "/images/our-infrastructure/football/football-02.jpg" },
      { src: "/images/our-infrastructure/football/football-03.jpg" },
      { src: "/images/our-infrastructure/football/football-04.jpg" },
      { src: "/images/our-infrastructure/football/football-05.jpg" },
      { src: "/images/our-infrastructure/football/football-06.jpg" },
      { src: "/images/our-infrastructure/football/football-07.jpg" },
      { src: "/images/our-infrastructure/football/football-08.jpg" },
    ],
    Cricket: [
      { src: "/images/our-infrastructure/cricket/cricket-01.jpg" },
      { src: "/images/our-infrastructure/cricket/cricket-02.jpg" },
      { src: "/images/our-infrastructure/cricket/cricket-03.jpg" },
      { src: "/images/our-infrastructure/cricket/cricket-04.jpg" },
      { src: "/images/our-infrastructure/cricket/cricket-05.jpg" },
    ],
    Athletics: [
      { src: "/images/our-infrastructure/athletics/athletics-01.jpg" },
      { src: "/images/our-infrastructure/athletics/athletics-02.jpg" },
      { src: "/images/our-infrastructure/athletics/athletics-03.jpg" },
      { src: "/images/our-infrastructure/athletics/athletics-04.jpg" },
      { src: "/images/our-infrastructure/athletics/athletics-05.jpg" },
      { src: "/images/our-infrastructure/athletics/athletics-06.jpg" },
      { src: "/images/our-infrastructure/athletics/athletics-07.jpg" },
      { src: "/images/our-infrastructure/athletics/athletics-08.jpg" },
      { src: "/images/our-infrastructure/athletics/athletics-09.jpg" },
    ],
    Basketball: [
      { src: "/images/our-infrastructure/basketball/basketball-01.jpg" },
      { src: "/images/our-infrastructure/basketball/basketball-02.jpg" },
      { src: "/images/our-infrastructure/basketball/basketball-03.jpg" },
      { src: "/images/our-infrastructure/basketball/basketball-04.jpg" },
      { src: "/images/our-infrastructure/basketball/basketball-05.jpg" },
      { src: "/images/our-infrastructure/basketball/basketball-06.jpg" },
      { src: "/images/our-infrastructure/basketball/basketball-07.jpg" },
      { src: "/images/our-infrastructure/basketball/basketball-08.jpg" },
      { src: "/images/our-infrastructure/basketball/basketball-09.jpg" },
    ],
    Tennis: [
      { src: "/images/our-infrastructure/tennis/tennis-01.jpg" },
      { src: "/images/our-infrastructure/tennis/tennis-02.jpg" },
      { src: "/images/our-infrastructure/tennis/tennis-03.jpg" },
      { src: "/images/our-infrastructure/tennis/tennis-04.jpg" },
      { src: "/images/our-infrastructure/tennis/tennis-05.jpg" },
      { src: "/images/our-infrastructure/tennis/tennis-06.jpg" },
      { src: "/images/our-infrastructure/tennis/tennis-07.jpg" },
      { src: "/images/our-infrastructure/tennis/tennis-08.jpg" },
    ],
    Skating: [
      { src: "/images/our-infrastructure/skating/skating-01.jpg" },
      { src: "/images/our-infrastructure/skating/skating-02.jpg" },
      { src: "/images/our-infrastructure/skating/skating-03.jpg" },
      { src: "/images/our-infrastructure/skating/skating-02.jpg" },
    ],
    Swimming: [
      { src: "/images/our-infrastructure/swimming/swimming-01.jpg" },
      { src: "/images/our-infrastructure/swimming/swimming-02.jpg" },
      { src: "/images/our-infrastructure/swimming/swimming-03.jpg" },
      { src: "/images/our-infrastructure/swimming/swimming-04.jpg" },
      { src: "/images/our-infrastructure/swimming/swimming-05.jpg" },
      { src: "/images/our-infrastructure/swimming/swimming-06.jpg" },
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
