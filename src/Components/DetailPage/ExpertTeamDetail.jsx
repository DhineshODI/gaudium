export default function ExperTeamDetail({ data }) {
  const strengthData = data.members;

  return (
    <>
      <div className="aboutusstrengthsecmain">
        <div>
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
        </div>

        <div className="container max-w-7xl mx-auto px-4">
          <div className="strengthaboutusflex">
            {strengthData.map((item, index) => (
              <div key={index} className="strengthsectioncard">
                <div className="divsportsnamestregnth">
                  <div className="firststrengthsectioncard">
                    <p className="sportsnamestregnth">{item.sport}</p>
                    <h4 className="roleinstrength whitecolorfont">
                      {item.role}
                    </h4>
                  </div>
                </div>

                <div className="sportsnamestregnthimage">
                  <img src={item.img} alt={item.sport} />
                </div>

                <div className="divnameoftheplayer">
                  <p className="nameoftheplayer">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
