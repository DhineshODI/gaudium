export default function JourneyDetail() {
  const images = [
    "/images/detail-page/badminton/marquee/marquee-1.jpg",
    "/images/detail-page/badminton/marquee/marquee-2.jpg",
    "/images/detail-page/badminton/marquee/marquee-3.jpg",
    "/images/detail-page/badminton/marquee/marquee-4.jpg",
    "/images/detail-page/badminton/marquee/marquee-5.jpg",
  ];
  const images1 = [
    "/images/detail-page/badminton/marquee/marquee-6.jpg",

    "/images/detail-page/badminton/marquee/marquee-8.jpg",
    "/images/detail-page/badminton/marquee/marquee-7.jpg",

    "/images/detail-page/badminton/marquee/marquee-10.jpg",
    "/images/detail-page/badminton/marquee/marquee-9.jpg",
  ];
  return (
    <>
      <div className="marqueesectionmain">
        <div className="videosectionmain">
          <div className="firstheading">
            <h2 className="stroke-fill-text mainheadingfont redcolorfont">
              The Strength
            </h2>
          </div>
          <div className="secondheading">
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
