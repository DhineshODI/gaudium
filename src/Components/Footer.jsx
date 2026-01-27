export default function Footer() {
  return (
    <>
      <div className="footerrow">
        <div>
          <h2 className="mainheadingfont firsttextfooter">Join</h2>
          <h2 className="mainheadingfont secondtextfooter">the Champions’ </h2>
          <h2 className="mainheadingfont firsttextfooter">League!</h2>
        </div>
        <div className="paravideosection">
          <p className="paragraphtext">
            Step into excellence. Join the champions and elevate your game at
            Gaudium Sportopia.
          </p>
        </div>

        <div className="becomeachampion">
          <a className="buttonfont highlightedtextwhite">Become a Champion</a>
        </div>

        <div className="footerendd">
          <div className="footerfirstdiv">
            <h2 className="mainheadingfont stroke-fill-text footerfirstfont">
              Chasing Goals,
            </h2>
          </div>

          <div className="footerfirstdiv">
            <h2 className="mainheadingfont stroke-fill-text1 footersecondfont ">
              Breaking Limits
            </h2>
          </div>
        </div>

        <div className="footerwithlogo">
          <div className="footerlogoimageflex">
            <img
              className="footerimagesize"
              src="/images/footer-logo.svg"
              alt=""
            />
          </div>

          <div className="iconsline"></div>

          <ul className="footerlistpages">
            {/* <a href="">
              <li className="highlightedtextwhite">about us</li>{" "}
            </a>
            <li>our Programs</li>
            <li>indoor sports</li>
            <li>outdoor sports</li>
            <li>our team</li>
            <li>news & events</li>
            <li>contact us</li> */}
            <a href="/about">
              <li className="highlightedtextwhite">about us</li>
            </a>
            <a href="/our-programs">
              <li className="highlightedtextwhite">our Programs</li>
            </a>
            <a href="/indoor-sports">
              <li className="highlightedtextwhite">indoor sports</li>
            </a>
            <a href="/outdoor-sports">
              <li className="highlightedtextwhite">outdoor sports</li>
            </a>
            <a href="/best-performer">
              <li className="highlightedtextwhite">Best performer</li>
            </a>
            {/* <a href="/news">
              <li className="highlightedtextwhite">news & events</li>
            </a> */}
            <a href="/contact">
              <li className="highlightedtextwhite">contact us</li>
            </a>
          </ul>
          <div className="iconsline"></div>
          <ul className="footericonsflex">
            <a
              href="https://www.instagram.com/thesportopia/?hl=en"
              target="_blank"
            >
              <img src="/images/icons/instagram.svg" alt="" />
            </a>

            <a href="https://www.facebook.com/thesportopia/" target="_blank">
              <img src="/images/icons/fb-icon.svg" alt="" />
            </a>
            <a href="https://x.com/thesportopia" target="_blank">
              <img src="/images/icons/x-twitter.svg" alt="" />
            </a>

            <a
              href="https://in.linkedin.com/company/thegaudium"
              target="_blank"
            >
              <img src="/images/icons/likedin.svg" alt="" />
            </a>
          </ul>
        </div>

        <div className="footercopyrights">
          <p className="paragraphtext">
            © 2025 gaudium sportopia. all rights reserved.
          </p>

          <div className="opendesignsflex">
            <a className="paragraphtext" href="">
              designed by
            </a>
            <img src="/images/icons/opendesignslogo.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
