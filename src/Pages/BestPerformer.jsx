import Header from "../Components/Header";
import JourneyInPictures from "../Components/JourneyInPictures";
import SucessYouMore from "../Components/SucessYouMore";
import VoicesofChampion from "../Components/VoicesofChampion";

export default function BestPerformerPage() {
  return (
    <>
      <Header />

      {/* Banner-Image */}

      <div className="aboutPage">
        <div className="bannerimagesection bestperformer">
          <div className="container max-w-7xl mx-auto px-4 aboutusbannersection">
            <div className="bannercontentflex">
              <p className="breadcrumbstext">
                <span>Home</span> &gt; Best Performers
              </p>

              <h2 className="mainheadingfont">Best Performers</h2>
              <hr />

              <p className="paragraphtext contentbanner">
                Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
                pellentesq uescelerisque libero malesuada tristique Ultricies
                leo viverra.
              </p>
            </div>
          </div>
           <p className="mainheadingfont banneroverlaytextall">Best Performers</p>
        </div>
      </div>
      {/* Banner-Image */}

      <div className="bestperformersucessmore">
        <SucessYouMore />
      </div>

      <div className="showcasingpeak">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="videosectionmain">
            <div className="firstheading">
              <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                Showcasing Our
              </h2>
            </div>
            <div className="secondheading">
              <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                Peak Performance
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

          <div>
            <div className="bestperformercard">
              <img
                className="cardimageperformersec"
                src="/images/bestperformer/swarna.jpg"
                alt=""
              />

              <section className="gradientlayerdiv">
                <p className="nameofthebestformercard">swara kyatham</p>
                <div className="hovercontent">
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur. Leo a enim phasellus
                    lectus tellus vitae mauris lacus. Ipsum interdum id orci
                    eros amet mattis consequat. Dapibus.
                  </p>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur. Leo a enim phasellus
                    lectus tellus vitae mauris lacus. Ipsum interdum id orci
                    eros amet mattis consequat. Dapibus.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <VoicesofChampion />

      <JourneyInPictures />
    </>
  );
}
