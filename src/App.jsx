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
        {menushow && <Menubar menuOnclick={menuOnclick} />}

        <Routes>
          <Route path="/" element={<Homepage menuOnclick={menuOnclick} />} />
          <Route
            path="/about"
            element={<AboutUsPage onClick={menuOnclick} />}
          />
          <Route
            path="/our-programs"
            element={<OurPrograms onClick={menuOnclick} />}
          />
          <Route
            path="/outdoor-sports"
            element={<OutDoorSportsPage onClick={menuOnclick} />}
          />
          <Route
            path="/indoor-sports"
            element={<InDoorSportsPage onClick={menuOnclick} />}
          />
          <Route
            path="/best-performer"
            element={<BestPerformerPage onClick={menuOnclick} />}
          />
          <Route
            path="/sport/:slug"
            element={<DetailPage onClick={menuOnclick} />}
          />
          <Route
            path="/student-testimonial"
            element={<TestimonialPage onClick={menuOnclick} />}
          />
          <Route
            path="/our-infrastructure"
            element={<OurInfraStructure onClick={menuOnclick} />}
          />
          <Route
            path="/contact"
            element={<ContactPage onClick={menuOnclick} />}
          />
          <Route
            path="/newsandevents"
            element={<NewsandEvents onClick={menuOnclick} />}
          />
        </Routes>

        <Footer />
      </MenuProvider>
    </>
  );
}

export default App;
