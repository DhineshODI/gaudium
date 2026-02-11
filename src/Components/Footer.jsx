import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Footer({ popupFunction }) {
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.utils.toArray(".footerendd").forEach((section) => {
  //       const first = section.querySelector(".footerfirstdiv h2");
  //       const second = section.querySelector(".footerfirstdiv h2");

  //       if (!first || !second) return;

  //       gsap
  //         .timeline({
  //           scrollTrigger: {
  //             trigger: section,
  //             start: "top bottom", // section enters viewport
  //             end: "bottom top+=40%", // 🔥 finish earlier
  //             scrub: true, // exact scroll sync
  //             invalidateOnRefresh: true,
  //           },
  //         })
  //         .fromTo(
  //           first,
  //           { x: -250, opacity: 1 },
  //           { x: 0, opacity: 1, ease: "none" },
  //         )
  //         .fromTo(
  //           second,
  //           { x: 250, opacity: 1 },
  //           { x: 0, opacity: 1, ease: "none" },
  //           "<",
  //         );
  //     });
  //   });

  //   ScrollTrigger.refresh();
  //   return () => ctx.revert();
  // }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".footerendd").forEach((section) => {
        const firstLine = section.querySelector(".footerfirstfont");
        const secondLine = section.querySelector(".footersecondfont");

        if (!firstLine || !secondLine) return;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 95%", // Footer screen-oda bottom-la nuzhaiyum pothu start aagum
              end: "bottom bottom", // Footer full-ah screen-kulla vandhu settle aagumbothu mudiyum
              scrub: 1.5, // Scroll panna panna mella position-ku varum
              invalidateOnRefresh: true,
            },
          })
          .fromTo(
            firstLine,
            { x: -500, opacity: 0 }, // Romba thoorathula irundhu start aagum
            { x: 0, opacity: 1, ease: "none" },
          )
          .fromTo(
            secondLine,
            { x: 500, opacity: 0 }, // Right side thoorathula irundhu start aagum
            { x: 0, opacity: 1, ease: "none" },
            "<", // Rendu line-um ore nerathula meet aagum
          );
      });
    });

    return () => ctx.revert();
  }, []);

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
            {/* Step into excellence. Join the champions and elevate your game at
            Gaudium Sportopia. */}
            Train with purpose, compete with confidence, and grow with Gaudium
            Sportopia.
          </p>
        </div>

        <div className="becomeachampion">
          <a
            onClick={popupFunction}
            className="buttonfont highlightedtextwhite"
          >
            Become a Champion
          </a>
        </div>

        <div className="footerendd">
          <div className="footerfirstdiv">
            <h2 className="mainheadingfont stroke-fill-text footerfirstfont">
              Chasing Goals,
            </h2>
          </div>

          <div className="footerfirstdiv">
            <h2 className="mainheadingfont stroke-fill-text1 footersecondfont ">
              {/* Breaking Limits */}
              Raising Standards
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
              {/* <li className="highlightedtextwhite">Best performer</li> */}
              <li className="highlightedtextwhite">Excellence Awardees</li>
              
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
            © 2026 gaudium sportopia. all rights reserved.
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
