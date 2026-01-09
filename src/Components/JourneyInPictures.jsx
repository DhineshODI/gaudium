export default function JourneyInPictures() {
  const images = [
    "/images/bestperformer/marquee/marquee1.jpg",
    "/images/bestperformer/marquee/marquee2.jpg",
    "/images/bestperformer/marquee/marquee3.jpg",
    "/images/bestperformer/marquee/marquee4.jpg",
    "/images/bestperformer/marquee/marquee5.jpg",
  ];
  const images1 = [
    "/images/bestperformer/marquee/marquee6.jpg",
    "/images/bestperformer/marquee/marquee7.jpg",
    "/images/bestperformer/marquee/marquee8.jpg",
    "/images/bestperformer/marquee/marquee9.jpg",
    "/images/bestperformer/marquee/marquee10.jpg",
  ];
  return (
    <>
      <div className="marqueesectionmain journeyinpictures">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="videosectionmain">
            <div className="firstheading">
              <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                Journey
              </h2>
            </div>
            <div className="secondheading">
              <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                in Pictures
              </h2>
            </div>
          </div>
        </div>

        <div className="paravideosection">
          <p className="paragraphtext">
          A glance of our athletes’ growth, training and memorable moments on their path to excellence at Gaudium Sportopia.
          </p>
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
