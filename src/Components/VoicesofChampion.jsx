import React, { useState, useEffect, useCallback } from "react";

const teamData = [
  {
    name: "Michael Steward",
    role: "Creative Director",
    img: "/images/bestperformer/sliderimage1.jpg",
  },
  {
    name: "Emma Rodriguez",
    role: "Lead Developer",
    img: "/images/bestperformer/sliderimage2.jpg",
  },
  {
    name: "Julia Gimmel",
    role: "UX Designer",
    img: "/images/bestperformer/sliderimage3.jpg",
  },
  {
    name: "Lisa Anderson",
    role: "Marketing Manager",
    img: "/images/bestperformer/sliderimage4.jpg",
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    img: "/images/bestperformer/sliderimage5.jpg",
  },
];

const TeamSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalSlides = teamData.length;

  const progress = ((currentIndex + 1) / totalSlides) * 100;

  const updateSlider = useCallback(
    (newIndex) => {
      if (isAnimating) return;
      setIsAnimating(true);

      const total = teamData.length;
      setCurrentIndex((newIndex + total) % total);

      // Matches the 0.8s transition in CSS
      setTimeout(() => {
        setIsAnimating(false);
      }, 800);
    },
    [isAnimating]
  );

  const getCardClass = (index) => {
    const total = teamData.length;
    const offset = (index - currentIndex + total) % total;

    if (offset === 0) return "ts-card ts-center";
    if (offset === 1) return "ts-card ts-right-1";
    if (offset === 2) return "ts-card ts-right-2";
    if (offset === total - 1) return "ts-card ts-left-1";
    if (offset === total - 2) return "ts-card ts-left-2";
    return "ts-card ts-hidden";
  };

  return (
    <div className="voiceofchampionshipbg">
      <div class="videosectionmain">
        <div class="firstheading">
          <h2 class="stroke-fill-text mainheadingfont whitefontcolor">
            Voices of
          </h2>
        </div>
        <div class="secondheading">
          <h2 class="stroke-fill-text1 mainheadingfont whitecolortransperant">
            our Champions
          </h2>
        </div>
      </div>

      <div class="paravideosection">
        <p class="paragraphtext">
          Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
          pellentesq uescelerisque libero malesuada tristique Ultricies leo
          viverra.
        </p>
      </div>

      <div className="container max-w-7xl mx-auto px-4 ">
        <div className="ts-section-container">
          <div className="ts-carousel-wrapper">
            <button
              className="ts-nav-btn ts-left"
              onClick={() => updateSlider(currentIndex - 1)}
            >
              ‹
            </button>

            <div className="ts-track">
              {teamData.map((member, i) => (
                <div
                  key={i}
                  className={`mainslidervoice ${getCardClass(i)}`}
                  onClick={() => updateSlider(i)}
                >
                  <img src={member.img} alt={member.name} className="ts-img" />

                  <div className="youtubevoiceicon">
                    <img src="/images/bestperformer/youtubeicon.svg" alt="" />
                  </div>
                </div>
              ))}
            </div>

            <button
              className="ts-nav-btn ts-right"
              onClick={() => updateSlider(currentIndex + 1)}
            >
              ›
            </button>
          </div>
        </div>

        <div className="buttonandarrowcontrol">
          {/* PROGRESS BAR */}
          <div className="progressflex">
            <div className="strength-progressbar">
              <div
                className="strength-progressbar-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="strength-controls">
            <button
              onClick={() => updateSlider(currentIndex - 1)}
              className="btn-prev"
            >
              <img src="/images/icons/arrow-left-circle-white.svg" alt="" />
            </button>
            <button
              onClick={() => updateSlider(currentIndex + 1)}
              className="btn-next"
            >
              <img src="/images/icons/arrow-right-circle-white.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;
