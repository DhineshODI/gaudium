export default function Menubar({menuOnclick}) {
  return (
    <div className="menuhamfull">
      <div className="mainhamsec">
        <div className="firsthamhalf"></div>
        <div className="secondhamhalf">
          <div className="hamclosebutton">
            <li className="menubarhamlist menunamee">Menu</li>
            <img 

            onClick={menuOnclick}
              className="menubarclosebuttons"
              src="/images/icons/menu-close-icon.svg"
              alt=""
            />
          </div>

          <div>
            <ul className="menubarul">
              <li className="menubarhamlist menustyles">Home</li>
              <li className="menubarhamlist menustyles">About Us</li>
              <li className="menubarhamlist menustyles">our Programs</li>
              <li className="menubarhamlist menustyles">indoor sports</li>
              <li className="menubarhamlist menustyles">outdoor sports</li>
              <li className="menubarhamlist menustyles">our team</li>
              <li className="menubarhamlist menustyles">our team</li>
              <li className="menubarhamlist menustyles">our team</li>
              <li className="menubarhamlist menustyles">contact us</li>
            </ul>

            <div>
              <ul className="menubarul menubarletstalks">
                <li className="menubarhamlist letstalktext">let’s talk</li>
                <li className="menubarhamlist bordernonetext">
                  +91 91006 84477
                </li>
                <li className="menubarhamlist bordernonetext">
                  +91 75699 41977
                </li>
              </ul>
            </div>

            <div>
              <ul className="menubarul menubarletstalks">
                <li className="menubarhamlist letstalktext">
                  general enquiry's
                </li>

                <li
                  className="menubarhamlist bordernonetext"
                  style={{ borderBottom: "none", textTransform: "lowercase" }}
                >
                  sportopia@thegaudium.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
