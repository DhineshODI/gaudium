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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/our-programs" element={<OurPrograms />} />
        <Route path="/outdoor-sports" element={<OutDoorSportsPage />} />
        <Route path="/indoor-sports" element={<InDoorSportsPage />} />
        <Route path="/best-performer" element={<BestPerformerPage />} />
        <Route path="/sport/:slug" element={<DetailPage />} />
        <Route path="/student-testimonial" element={<TestimonialPage />} />
        <Route path="/our-infrastructure" element={<OurInfraStructure />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
