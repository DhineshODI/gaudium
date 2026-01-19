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

function App() {
  const [menushow, setMenuShow] = useState(false);

  const menuOnclick = () => {
    setMenuShow((oldData) => !oldData);
  };

  console.log(menushow);

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
            path="/about"
            element={<AboutUsPage menuOnclick={menuOnclick} />}
          />

          <Route path="/" element={<Homepage menuOnclick={menuOnclick} />} />
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

        <Footer />
      </MenuProvider>
    </>
  );
}

export default App;
