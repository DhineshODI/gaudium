import { useEffect, useState } from "react";

export default function Menubar({ menuOnclick }) {
  const [isBelow600, setIsBelow600] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Programs", path: "/our-programs" },
    { label: "Indoor Sports", path: "/indoor-sports" },
    { label: "Outdoor Sports", path: "/outdoor-sports" },
    { label: "Best Performer", path: "/best-performer" },
    { label: "Student Testimonial", path: "/student-testimonial" },
    { label: "Our Infrastructure", path: "/our-infrastructure" },
    // { label: "News & Events", path: "/newsandevents" },
    { label: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const checkHeight = () => {
      setIsBelow600(window.innerHeight < 700);
    };

    checkHeight(); // run on load
    window.addEventListener("resize", checkHeight);

    return () => window.removeEventListener("resize", checkHeight);
  }, []);

  return (
    <div
      // className="menuhamfull">
      className={`menuhamfull ${isBelow600 ? "overflowclass" : ""}`}
    >
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
              {menuItems.map((item, index) => (
                <a
                  href={item.path}
                  className={({ isActive }) =>
                    `menubarhamlist menustyles ${isActive ? "active-menu" : ""}`
                  }
                >
                  <li key={index} className="menubarhamlist menustyles">
                    {item.label}
                  </li>
                </a>
              ))}
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
