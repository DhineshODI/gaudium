import ContactForm from "../Components/ContactUsForm";
import Header from "../Components/Header";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage({ menuOnclick }) {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".scroll-box", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".scroll-box",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Section coming from Left to Right
      gsap.from(".left-to-right", {
        scrollTrigger: {
          trigger: ".left-to-right",
          start: "top 80%", // Element screen-oda 80% height varumbo start aagum
          toggleActions: "play none none reverse",
        },
        x: -200, // Left side-la 200px thalli irunthu start aagum
        opacity: 0, // Light-ah fade-in aagum
        duration: 1.5, // Animation speed
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <Header menuOnclick={menuOnclick} />

      {/* Banner-Image */}

      <div className="aboutPage">
        <div className="bannerimagesection contactusbg ">
          <div className="container max-w-7xl mx-auto px-4 aboutusbannersection">
            <div className="bannercontentflex">
              <p className="breadcrumbstext">
                <span>Home</span> &gt; contact us
              </p>
              <h2 className="mainheadingfont"> contact us</h2>
              <hr />

              <p className="paragraphtext contentbanner">
                Reach out to Gaudium Sportopia for admissions, program details
                or any inquiries about our sports academy.
              </p>
            </div>
          </div>

          <p className="mainheadingfont banneroverlaytextall">contact us</p>
        </div>
      </div>
      {/* Banner-Image */}

      {/* Contact-Us Details */}

      <div className="contactboxsection">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="videosectionmain">
            <div className="firstheading lengthfirstHeading">
              <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                Contact &
              </h2>
            </div>
            <div className="secondheading lengthsecondHeading">
              <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                Join together
              </h2>
            </div>
          </div>

          <div className="paravideosection">
            <p className="paragraphtext">
              Connect with Gaudium Sportopia to join our programs, explore
              opportunities and start your champion’s journey today.
            </p>
          </div>

          <div className="cardsfelxcontainer">
            <div className="scroll-box cardscontactus ">
              <img src="/images/icons/locationicon.svg" alt="" />
              <div>
                <h3 className="paragraphtext">LOCATION</h3>
                <p className="visitus">Visit Us At</p>
                <p className="addreesstext">
                  Survey No, 25/A, Velimela Village, Ramchandra Puram Mandal,
                  Hyderabad, Telangana 502300
                </p>
              </div>
            </div>
            <div className="scroll-box cardscontactus">
              <img src="/images/icons/callicon.svg" alt="" />
              <div>
                <h3 className="paragraphtext">24*7 SERVICE</h3>
                <p className="visitus">Call Us On</p>
                <p className="addreesstext">
                  <a href="">Mob : +91 91006 84477</a> <br />
                  <a href="">Mob : +91 75699 41977</a>
                </p>
              </div>
            </div>
            <div className="scroll-box cardscontactus">
              <img src="/images/icons/mailicon.svg" alt="" />
              <div>
                <h3 className="paragraphtext">DROP A MAIL</h3>
                <p className="visitus">Mail Address</p>
                <p className="addreesstext">
                  <a href="sportopia@thegaudium.com">
                    sportopia@thegaudium.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact-Us Details */}

      {/* Form  */}

      <div>
        <div>
          <div className="mainbgcontactbg">
            <div className="formcontactbgfirst">
              <div className="formmainss left-to-right">
                <img
                  className="headphoenecontact"
                  src="/images/icons/contact-phone-icon.svg"
                  alt=""
                />
                <p className="paragraphtext">Chat with Live !</p>
                <p className="textcontntcontact">
                  Chat live with our team for instant support for your queries.
                </p>

                <div className="whatsappcontact">
                  <div className="whastappseccontact">
                    <img
                      className="whatsappiconsvg"
                      src="/images/icons/whatsapp-icon.svg"
                      alt=""
                    />
                  </div>
                  <div className="discovermorebutton">
                    <a className="buttonfont highlightedtextred">whatsapp</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="formcontactbgsecond">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Form  */}

      {/* maps */}

      <iframe
        className="gaudiumlocationmap"
        id="idgaudiumlocationmap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.475195381003!2d78.2422107!3d17.4848152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbed0423f11d1f%3A0xa3bdd1b9b928c05f!2sSportopia%20Sports%20Academy!5e0!3m2!1sen!2sin!4v1767782337062!5m2!1sen!2sin"
        width="600"
        height="450"
        // style="border:0;"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* maps */}
    </div>
  );
}
