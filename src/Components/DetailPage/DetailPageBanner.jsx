export default function DetailPageBanner({ data }) {
  return (
    <>
      <div className="aboutPage">
        <div className="bannerimagesection badmintonbannerdetail">
          <div className="container max-w-7xl mx-auto px-4 aboutusbannersection">
            <div className="bannercontentflex">
              <p className="breadcrumbstext">
                <span>{data.breadcrumbstextfirst}</span> &gt; {data.breadcrumbstextSecond}
              </p>

              <h2 className="mainheadingfont">{data.bannertitle}</h2>
              <hr />

              <p className="paragraphtext contentbanner">
                {data.bannerContent}
              </p>
            </div>
          </div>

          <p className="mainheadingfont banneroverlaytextall">{data.banneroverlaycontent}</p>
        </div>
      </div>
    </>
  );
}
