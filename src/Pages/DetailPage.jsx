import DetailPageBanner from "../Components/DetailPage/DetailPageBanner";
import EventsandTournaments from "../Components/DetailPage/EventsandTournaments";
import ExperTeamDetail from "../Components/DetailPage/ExpertTeamDetail";
import FacilitythatInspire from "../Components/DetailPage/FacilityDetail";
import FaqDetail from "../Components/DetailPage/Faq";
import JourneyDetail from "../Components/DetailPage/Journey";
import SecondSectionDetail from "../Components/DetailPage/SecondSectionDetail";
import Header from "../Components/Header";

export default function DetailPage() {
  return (
    <>
      <Header />
      <DetailPageBanner />
      <SecondSectionDetail />
      <ExperTeamDetail />
      <FacilitythatInspire/>
      <FaqDetail />
      <EventsandTournaments />
      <JourneyDetail />
    </>
  );
}
