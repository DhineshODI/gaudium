import { useRef } from "react";
import AboutusTheStrengthSection from "../Components/AboutUsTheStrengthBehind";
import Header from "../Components/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsPage({ menuOnclick }) {
  const container = useRef();
  const sectionRef = useRef();

  const sectionRef1 = useRef();
  const coachContainer = useRef();
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top center", // Section center-ku varum pothu start aagum
          end: "bottom center+=50%",
          scrub: 1, // Scroll speed-ku etha maathiri animation move aagum
        },
      });

      // Vision slide in
      tl.from(".firstsecheart", { x: -100, opacity: 0 })
        // Image scale up
        .from(".secondsecheart", { scale: 0.5, opacity: 0 }, "<") // "<" potta mela iruka animation koodave nadakkum
        // Mission slide in
        .from(".thirdsecheart", { x: 100, opacity: 0 }, "<");
    },
    { scope: container },
  );

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
    { scope: sectionRef1 },
  );

  useGSAP(
    () => {
      // Card-gal ovvonnum oru gap-la ulla vara 'stagger' use pandrom
      gsap.from(".firstcardhighlights", {
        y: 100, // 100px keela irundhu start aagum
        opacity: 0, // Transparent-ah irukkum
        duration: 0.8,
        stagger: 0.2, // Ovvoru card-kum 0.2s gap irukkum
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Section screen-oda 75%-ku varum pothu trigger aagum
          toggleActions: "play none none reverse", // Scroll back pannuna thirumba animate aagum
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <>
      <Header menuOnclick={menuOnclick} />

      {/* Banner-Image */}

      <div className="aboutPage" ref={sectionRef1}>
        <div className="bannerimagesection">
          <div className="container max-w-7xl mx-auto px-4 aboutusbannersection">
            <div className="bannercontentflex">
              <p className="breadcrumbstext">
                <span>Home</span> &gt; About us
              </p>
              <h2 className="mainheadingfont">About us</h2>
              <hr />

              <p className="paragraphtext contentbanner">
                Know about India’s first integrated residential sports school
                shaping champions through world-class coaching, academics and
                elite infrastructure.
              </p>
            </div>
          </div>

          <p className="mainheadingfont banneroverlaytextall">About Us</p>
        </div>
      </div>
      {/* Banner-Image */}

      {/* The Heart Of Section */}

      <div className="heartofsection">
        <div className="videosectionmain">
          <div className="firstheading">
            <h2 className="stroke-fill-text mainheadingfont redcolorfont">
              The Heart of
            </h2>
          </div>

          <div className="secondheading">
            <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
              Our Academy
            </h2>
          </div>
        </div>
        <div>
          <div
            className="container max-w-7xl mx-auto px-4 theheartcontent"
            ref={container}
          >
            <div className="theheartcontentflex">
              <div className="firstsecheart">
                <h4 className="oursection">Our</h4>
                <h2 className="visionsection">Vision</h2>
                <p className="paragraphtext">
                  To provide India’s best integrated sports training ecosystem
                  that nurtures athletic excellence alongside academic growth,
                  creating future-ready champions through world-class
                  infrastructure, expert coaching, holistic development and a
                  lifelong commitment to sport and learning.
                </p>
              </div>
              <img
                className="secondsecheart"
                src="/images/abouts/theheartsectionimage.png"
                alt=""
              />
              <div className="thirdsecheart">
                <h4 className="oursection">Our</h4>
                <h2 className="visionsection">Mission</h2>
                <p className="paragraphtext">
                  Provide an end-to-end sports training ecosystem for all
                  stakeholders that enables champions to be consistently
                  excellent and make sport as an integral part of life.
                </p>
              </div>
              <div className="thirdsecheart newaddedsection">
                {/* <h4 className="oursection">Our</h4> */}
                <h2 className="visionsection">Philosophy</h2>
                <p className="paragraphtext">
                  There is a dream. A dream that brings together the most
                  important aspects of life for a child. Education without
                  pressure. Sports without regret. Arts without boundaries. How
                  far will the factory conveyor belt go? How long before we stop
                  mass producing ‘beings’? What does it take for children to
                  know their dreams? And more importantly what will it take for
                  them to realise it? The daily grind of studies. The peer
                  pressure to perform. The societal norms to look ‘enriched’. Is
                  the goal of education only for a career? Are sports just
                  hobbies? Are arts deemed too hifi? It takes more than a dream.
                  It is much more than a vision. And definitely the most
                  important of all missions. A place where education means
                  knowledge, sports is more than a hobby and arts is more than
                  an emotional expression. A place where all come together. Why?
                  Because there is a bit of everything in everything else. It is
                  the true amalgamation that creates that well-rounded
                  personality. A place that enables the true champions to
                  blossom at one end and builds a healthy lifestyle at the
                  other. A place where the sports training infrastructure can be
                  rivaled only by the best in the world. A place that attracts
                  the best coaches and trainers. A place that will be
                  one-of-a-kind for its sporting curriculum. A place where
                  sports training is supported by complete pre and post care. A
                  place that does not have an equal. A place called Gaudium
                  Sportopia.
                </p>
              </div>
              <div className="thirdsecheart newaddedsection">
                {/* <h4 className="oursection">Our</h4> */}
                <h2 className="visionsection">Director Details </h2>
                <p className="paragraphtext">
                  Sports wasn’t looked upon as a career option a decade ago.
                  Today, youngsters across the length and breadth of the country
                  have actively taken up sports and are shining at the
                  international level. And any sport is easy to learn when
                  young. Unfortunately, most schools focus only on academics,
                  and a kid who aspires to become a sport star has to seek the
                  help on small scale Private sports academies that either offer
                  training during the weekends or during the holidays. Which is
                  certainly not enough for a talented child to become a
                  champion. And that’s exactly where the Gaudium Sportopia can
                  help. Sportopia provides every child the best possible sports
                  eco system inside the school campus so that each child can
                  pursue his/ her game of choice in a seamless way and become
                  champions if they have the talent. With the potential of
                  offering more than 20+ world class sport academies, Gaudium
                  Sportopia in its first phase is ready to launch 15 different
                  sports academies run by champion coaches who are still
                  actively coaching current champions, Sportopia offers three
                  level of courses for children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Heart Of Section */}

      {/* Highlights That Inspire */}

      <div className="highlightssection">
        <div className="videosectionmain">
          <div className="firstheading">
            <h2 className="stroke-fill-text mainheadingfont whitefontcolor">
              Highlights
            </h2>
          </div>

          <div className="secondheading">
            <h2 className="stroke-fill-text1 mainheadingfont whitecolortransperant">
              That Inspire
            </h2>
          </div>
        </div>

        <div className="paravideosection">
          <p className="paragraphtext">
            World-class sports facilities built to international standards,
            offering students the infrastructure, coaching and environment to
            achieve peak performance across multiple disciplines.
          </p>
        </div>

        <div className="container max-w-7xl mx-auto px-4" ref={sectionRef}>
          <div className="eachcardsection">
            <div className="firstcardhighlights">
              <img src="/images/abouts/aboutus-icon.svg" alt="" />
              <h4 className="headingtexthighlights paragraphtext">
                FIG-Standard Facilities
              </h4>
              <p className="contenthightlights secondheadingtext">
                State-of-the-art gymnastics facilities built to FIG standards,
                supporting technical precision, safe training, skill
                progression, and competitive readiness for athletes.
              </p>
            </div>
            <div className="firstcardhighlights">
              <img src="/images/abouts/aboutus-icon.svg" alt="" />
              <h4 className="headingtexthighlights paragraphtext">
                FIFA-standard fields
              </h4>
              <p className="contenthightlights secondheadingtext">
                Professional soccer fields built to FIFA standards, enabling
                skill development, tactical training, competitive matches, and
                nurturing future football champions.
              </p>
            </div>
            <div className="firstcardhighlights">
              <img src="/images/abouts/aboutus-icon.svg" alt="" />
              <h4 className="headingtexthighlights paragraphtext">
                ITF-compliant courts
              </h4>
              <p className="contenthightlights secondheadingtext">
                World-class tennis courts designed to ITF specifications,
                providing ideal conditions for coaching, practice, tournaments,
                and athlete growth.
              </p>
            </div>
            <div className="firstcardhighlights">
              <img src="/images/abouts/aboutus-icon.svg" alt="" />
              <h4 className="headingtexthighlights paragraphtext">
                IAAF-approved tracks
              </h4>
              <p className="contenthightlights secondheadingtext">
                Premium athletics tracks certified by IAAF, supporting
                sprinting, long-distance, and field events with precision
                training and performance monitoring.
              </p>
            </div>
            <div className="firstcardhighlights">
              <img src="/images/abouts/aboutus-icon.svg" alt="" />
              <h4 className="headingtexthighlights paragraphtext">
                BWF-standard courts
              </h4>
              <p className="contenthightlights secondheadingtext">
                Badminton courts built to BWF standards, ensuring high-quality
                training, competitive practice, and development of elite
                players.
              </p>
            </div>
            <div className="firstcardhighlights">
              <img src="/images/abouts/aboutus-icon.svg" alt="" />
              <h4 className="headingtexthighlights paragraphtext">
                FIBA-certified courts
              </h4>
              <p className="contenthightlights secondheadingtext">
                Basketball courts meeting FIBA regulations, offering optimal
                space for drills, gameplay and honing professional-level skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights That Inspire */}

      {/* The Strength Slider */}

      <AboutusTheStrengthSection />

      {/* The Strength Slider */}
    </>
  );
}
