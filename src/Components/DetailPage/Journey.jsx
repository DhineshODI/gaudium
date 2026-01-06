export default function JourneyDetail({ data }) {
  const images = data.marqueeRow1;
  const images1 = data.marqueeRow2;
  return (
    <>
      <div className="marqueesectionmain">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="videosectionmain">
            <div className="firstheading lengthfirstHeading">
              <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                {data.headingFirst}
              </h2>
            </div>
            <div className="secondheading lengthsecondHeading">
              <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                {data.headingSecond}
              </h2>
            </div>
          </div>
        </div>
        <div className="paravideosection">
          <p className="paragraphtext">{data.description}</p>
        </div>

        <div className="marquee">
          <div className="marquee-track">
            {[...images, ...images].map((img, index) => (
              <img src={img} key={index} alt="marquee" />
            ))}
          </div>
        </div>
        <div className="marquee1" style={{ marginTop: "8px" }}>
          <div className="marquee1-track">
            {[...images1, ...images1].map((img, index) => (
              <img src={img} key={index} alt="marquee" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
