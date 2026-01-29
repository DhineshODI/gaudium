export default function Eventcalender({ popupFunction }) {
  return (
    <>
      <div className="eventscalenderrow">
        <div className="flexeventscalenderrow">
          <div>
            <div className="videosectionmain">
              <div className="firstheading">
                <h2 className="stroke-fill-text mainheadingfont whitefontcolor">
                  Book A
                </h2>
              </div>

              <div className="secondheading">
                <h2 className="stroke-fill-text1 mainheadingfont whitecolortransperant">
                  Ground
                </h2>
              </div>
            </div>
            <div className="paravideosection">
              <p className="paragraphtext">
                Reserve world-class sports facilities easily and train on
                professional grounds built for peak performance.
              </p>
            </div>

            <div className="becomeachampion">
              <a
                className="buttonfont highlightedtextopposite"
                onClick={popupFunction}
              >
                Enquiry NOw
              </a>
            </div>
          </div>
          <div>
            <div className="videosectionmain">
              <div className="firstheading">
                <h2 className="stroke-fill-text mainheadingfont whitefontcolor">
                  news &
                </h2>
              </div>

              <div className="secondheading">
                <h2 className="stroke-fill-text1 mainheadingfont whitecolortransperant">
                  Events
                </h2>
              </div>
            </div>
            <div className="paravideosection">
              <p className="paragraphtext">
                Latest updates, achievements, tournaments and upcoming events
                from Gaudium Sportopia.
              </p>
            </div>
            <div className="becomeachampion">
              <a className="buttonfont highlightedtextopposite"  onClick={popupFunction}>Explore More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
