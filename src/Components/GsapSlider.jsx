import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const HorizontalSlider = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    // Calculate how far to move: (Number of slides - 1) * 100vw
    const totalSlides = 4;
    const scrollWidth = (totalSlides - 1) * 100;

    gsap.fromTo(
      sectionRef.current,
      { x: 0 },
      {
        x: `-${scrollWidth}vw`,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${totalSlides * 1000}`, // Duration of the scroll
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      }
    );
  }, { scope: triggerRef });

  const slides = [
    { title: "Mountain High", img: "https://picsum.photos/id/10/1200/800", color: "bg-blue-100" },
    { title: "Ocean Deep", img: "https://picsum.photos/id/11/1200/800", color: "bg-teal-100" },
    { title: "Desert Sun", img: "https://picsum.photos/id/12/1200/800", color: "bg-orange-100" },
    { title: "Forest Green", img: "https://picsum.photos/id/13/1200/800", color: "bg-green-100" },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Spacer Header */}
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <h1 className="text-5xl font-bold italic">Scroll Down ↓</h1>
      </div>

      {/* GSAP Wrapper */}
      <div ref={triggerRef} className="overflow-hidden">
        <div 
          ref={sectionRef} 
          className="flex flex-row w-[400vw] h-screen items-center"
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`w-[100vw] h-screen flex flex-col items-center justify-center p-20 ${slide.color}`}
            >
              <div className="relative w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden group">
                <img 
                  src={slide.img} 
                  alt={slide.title} 
                  className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h2 className="text-white text-7xl font-black uppercase tracking-tighter">
                    {slide.title}
                  </h2>
                </div>
              </div>
              <p className="mt-8 text-gray-600 max-w-lg text-center font-medium">
                Experience the beauty of {slide.title.toLowerCase()} through our immersive vertical-to-horizontal scrolling engine.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer Footer */}
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <h2 className="text-4xl">Back to Vertical Scroll</h2>
      </div>
    </div>
  );
};

export default HorizontalSlider;