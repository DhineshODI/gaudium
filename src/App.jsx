import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUsPage from "./Pages/AboutUsPage";
import Homepage from "./Pages/HomePage";
import OurPrograms from "./Pages/OurPrograms";
import OutDoorSportsPage from "./Pages/OutDoorSports";
import InDoorSportsPage from "./Pages/InDoorSports";
import BestPerformerPage from "./Pages/BestPerformer";
import DetailPage from "./Pages/DetailPage";
import TestimonialPage from "./Pages/TestimonialPage";
import OurInfraStructure from "./Pages/OurInfraStructure";
import ContactPage from "./Pages/ContactPage";
import NewsandEvents from "./Pages/NewsandEvents";
import Menubar from "./Components/MenuBar";
import { useContext, useEffect, useState } from "react";
import { MenuProvider } from "./Components/MenuContext";
import { MenuContext } from "./Components/MenuContext";
import { AnimatePresence, motion } from "framer-motion";
import ContactForm from "./Components/ContactUsForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [menushow, setMenuShow] = useState(false);
  const [popupshow, setPopupShow] = useState(false);

  const menuOnclick = () => {
    setMenuShow((oldData) => !oldData);
  };

  // console.log(menushow);

  const popupFunction = () => {
    setPopupShow((popupshow) => !popupshow);
  };

  console.log("popupshow", popupshow);

  useEffect(() => {
    if (menushow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup (important)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menushow]);

  useEffect(() => {
    if (popupshow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [popupshow]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".videosectionmain").forEach((section) => {
        const first = section.querySelector(".firstheading h2");
        const second = section.querySelector(".secondheading h2");

        if (!first || !second) return;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: "top bottom", // section enters viewport
              end: "bottom top+=40%", // 🔥 finish earlier
              scrub: true, // exact scroll sync
              invalidateOnRefresh: true,
            },
          })
          .fromTo(
            first,
            { x: -250, opacity: 1 },
            { x: 0, opacity: 1, ease: "none" },
          )
          .fromTo(
            second,
            { x: 250, opacity: 1 },
            { x: 0, opacity: 1, ease: "none" },
            "<",
          );
      });
    });

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <>
      <MenuProvider>
        <AnimatePresence>
          {menushow && (
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="menubarWrapper smoothMenu"
            >
              <Menubar menuOnclick={menuOnclick} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* {menushow && <Menubar menuOnclick={menuOnclick} />} */}

        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                menuOnclick={menuOnclick}
                popupFunction={popupFunction}
              />
            }
          />

          <Route
            path="/about"
            element={<AboutUsPage menuOnclick={menuOnclick} />}
          />
          <Route
            path="/our-programs"
            element={<OurPrograms menuOnclick={menuOnclick} />}
          />
          <Route
            path="/outdoor-sports"
            element={<OutDoorSportsPage menuOnclick={menuOnclick} />}
          />
          <Route
            path="/indoor-sports"
            element={<InDoorSportsPage menuOnclick={menuOnclick} />}
          />
          <Route
            path="/best-performer"
            element={<BestPerformerPage menuOnclick={menuOnclick} />}
          />
          <Route
            path="/sport/:slug"
            element={<DetailPage menuOnclick={menuOnclick} />}
          />
          <Route
            path="/student-testimonial"
            element={<TestimonialPage menuOnclick={menuOnclick} />}
          />
          <Route
            path="/our-infrastructure"
            element={<OurInfraStructure menuOnclick={menuOnclick} />}
          />
          <Route
            path="/contact"
            element={<ContactPage menuOnclick={menuOnclick} />}
          />
          <Route
            path="/newsandevents"
            element={<NewsandEvents menuOnclick={menuOnclick} />}
          />
        </Routes>

        <Footer    popupFunction={popupFunction} />
      </MenuProvider>

      {popupshow && (
        <div className="formPopup">
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 transition-opacity duration-300"
              // onClick={onClose}
            />

            {/* Modal */}
            <div
              className="
          relative z-10 w-[90%] max-w-lg rounded-2xl bg-white p-6
          transform transition-all duration-300
          animate-modalIn
        "
            >
              <ContactForm />

              <button
                onClick={popupFunction}
                className="absolute top-3 right-3 text-xl font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
