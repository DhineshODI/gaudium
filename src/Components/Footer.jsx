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
            Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
            pellentesq uescelerisque libero malesuada tristique Ultricies leo
            viverra.
          </p>
        </div>

        <div className="becomeachampion">
          <button className="buttonfont">Become a Champion</button>
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
          <div>
            <img src="/images/footer-logo.svg" alt="" />
          </div>

          <div className="iconsline"></div>

          <ul className="footerlistpages">
            <li>about us</li>
            <li>our Programs</li>
            <li>indoor sports</li>
            <li>outdoor sports</li>
            <li>our team</li>
            <li>news & events</li>
            <li>contact us</li>
          </ul>
          <div className="iconsline"></div>
          <ul className="footericonsflex">
            <img src="/images/icons/instagram.svg" alt="" />
            <img src="/images/icons/fb-icon.svg" alt="" />
            <img src="/images/icons/x-twitter.svg" alt="" />
            <img src="/images/icons/likedin.svg" alt="" />
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
