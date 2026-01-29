import Header from "../Components/Header";
import JourneyInPictures from "../Components/JourneyInPictures";
import SucessYouMore from "../Components/SucessYouMore";
import VoicesofChampion from "../Components/VoicesofChampion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function BestPerformerPage({ menuOnclick }) {
  const bestPerformers = [
    {
      id: 1,
      nameLine1: "Saachi",
      nameLine2: "Dang",
      image: "/images/bestperformer/swara-kyatham.jpg",
      para1:
        "Saachi Dang has consistently demonstrated outstanding discipline, focus, and commitment across training sessions, setting a strong example for her peers.",
      para2:
        "Her ability to balance skill development with teamwork reflects the core values of Gaudium Sportopia, making her a standout performer this season.",
      type: "info",
    },
    {
      id: 2,
      nameLine1: "Swara",
      nameLine2: "Kyatham",
      image: "/images/bestperformer/swara-kyatham.jpg",
      para1:
        "Swara Kyatham has shown remarkable consistency and technical growth through dedicated practice and competitive participation.",
      para2:
        "Her positive attitude, resilience, and passion for excellence continue to inspire young athletes within the academy.",
    },
    {
      id: 3,
      nameLine1: "Kavish",
      nameLine2: "Aryan Lanka",
      image: "/images/bestperformer/kavish-aryan-lanka.png",
      para1:
        "Kavish Aryan Lanka has displayed exceptional strategic awareness and adaptability during training and match situations.",
      para2:
        "His leadership qualities and commitment to continuous improvement make him a valuable asset to the Gaudium Sportopia community.",
    },
    {
      id: 4,
      nameLine1: "Arya",
      nameLine2: "Marda",
      image: "/images/bestperformer/arya-marda.png",
      para1:
        "Arya Marda has impressed coaches with her agility, confidence, and strong understanding of game fundamentals.",
      para2:
        "Her dedication to consistent performance and learning reflects the high standards encouraged at Gaudium Sportopia.",
    },
    {
      id: 5,
      nameLine1: "Arya",
      nameLine2: "Marda",
      image: "/images/bestperformer/arya-marda.png",
      para1:
        "Arya Marda continues to deliver strong performances through focused training and a disciplined approach to skill development.",
      para2:
        "Her consistent effort and positive mindset contribute significantly to the competitive spirit of the academy.",
    },
    {
      id: 6,
      nameLine1: "Swara",
      nameLine2: "Kyatham",
      image: "/images/bestperformer/swara-kyatham.jpg",
      para1:
        "Swara Kyatham maintains high performance standards by combining technical precision with a strong work ethic.",
      para2:
        "Her dedication to growth and team collaboration highlights her role as a dependable and motivated athlete.",
    },
    {
      id: 7,
      nameLine1: "Kavish",
      nameLine2: "Aryan Lanka",
      image: "/images/bestperformer/kavish-aryan-lanka.png",
      para1:
        "Kavish Aryan Lanka demonstrates maturity and composure in high-pressure scenarios during training and competitions.",
      para2:
        "His ability to learn quickly and apply feedback showcases his commitment to excellence at Gaudium Sportopia.",
    },
    {
      id: 8,
      nameLine1: "Swara",
      nameLine2: "Kyatham",
      image: "/images/bestperformer/swara-kyatham.jpg",
      para1:
        "Swara Kyatham consistently raises performance benchmarks through disciplined preparation and focused execution.",
      para2:
        "Her enthusiasm for learning and continuous improvement strengthens the culture of excellence within the academy.",
    },
  ];

  const sectionRef = useRef();
  const sectionRef1 = useRef();

  useGSAP(
    () => {
      gsap.to(".bannercontentflex", {
        // Position-ah mela thalla
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".bannercontentflex",
          // MUKKIYAM: "top top" kudutha dhaan neenga scroll panna aarambikkum pothu
          // adhu irukira idathula irundhe start aagum.
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef },
  );


  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".cardHoverLink");

      cards.forEach((card, index) => {
        gsap.fromTo(card, 
          { 
            y: 200,             // Keela irundhu start aagum
            opacity: 1, 
            rotateX: -20,       // 3D tilt start
            scale: 0.8          // Chinna size
          },
          {
            y: 0,               // Original position
            opacity: 1,
            rotateX: 0,         // Settle aagumbodhu straight aagum
            scale: 1,           // Full size
            ease: "none",       // Scrub-ku "none" dhaan smooth-ah irukkum
            scrollTrigger: {
              trigger: card,
              start: "top 95%",  // Card bottom-la varumbodhu start aagum
              end: "top 50%",    // Screen center-ku varumbodhu animation mudiyum
              scrub: 1.5,        // Scroll speed-ah nalla smooth-ah follow pannum
            },
          }
        );
      });
    },
    { scope: sectionRef1 }
  );

  return (
    <>
      <Header menuOnclick={menuOnclick} />

      {/* Banner-Image */}

      <div className="aboutPage" ref={sectionRef}>
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
          <p className="mainheadingfont banneroverlaytextall">
            Best Performers
          </p>
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
              Take a glance at the champions whose achievements define
              excellence at Gaudium Sportopia.
            </p>
          </div>

          <div className="hoveredimagesectionbg" ref={sectionRef1}>
            <div className="hovermaindid">
              {bestPerformers.map((item) => (
                <a href={item.link} className="cardHoverLink" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cardHoverImage"
                  />

                  <div className="cardHoverOverlay">
                    <h1 className="cardHoverTitle">
                      {item.nameLine1}
                      <br />
                      {item.nameLine2}
                    </h1>

                    <p className="cardHoverText paragraphtext">{item.para1}</p>

                    <p className="cardHoverText paragraphtext para2hover">
                      {item.para2}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <VoicesofChampion />

      <JourneyInPictures />
    </>
  );
}
