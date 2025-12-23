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
        <Route path="/detail-page" element={<DetailPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
