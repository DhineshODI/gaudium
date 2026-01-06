export default function SecondSectionDetail({ data }) {
  return (
    <>
      <div className={`detailpagebg ${data.backgoundclass}`}>
        <div>
          <div className="container max-w-7xl mx-auto px-4">
            <div className="videosectionmain">
              <div className="firstheading detaipagefirstheading">
                <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                  {data.secondsportstitlefirst}
                </h2>
              </div>
              <div className="secondheading detaipagesecondheading">
                <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                  {data.secondsportstitlesecond}
                </h2>
              </div>
            </div>
          </div>

          <div className="paravideosection">
            <p className="paragraphtext">{data.firstparagraphtext}</p>
          </div>
          <div className="paravideosection">
            <p className="paragraphtext">{data.secondparagraphtext}</p>
          </div>
        </div>
      </div>
    </>
  );
}
