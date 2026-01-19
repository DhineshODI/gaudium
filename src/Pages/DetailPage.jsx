import DetailPageBanner from "../Components/DetailPage/DetailPageBanner";
import EventsandTournaments from "../Components/DetailPage/EventsandTournaments";
import ExperTeamDetail from "../Components/DetailPage/ExpertTeamDetail";
import FacilitythatInspire from "../Components/DetailPage/FacilityDetail";
import FaqDetail from "../Components/DetailPage/Faq";
import JourneyDetail from "../Components/DetailPage/Journey";
import SecondSectionDetail from "../Components/DetailPage/SecondSectionDetail";
import SucessDetailSlider from "../Components/DetailPage/SucessDetailSlider";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import DetailsData from "../Components/DetailPage/DeatilPageData";

export default function DetailPage({ menuOnclick }) {
  const { slug } = useParams();
  const data = DetailsData[slug];

  if (!data) return <h2>Page Not Found</h2>;
  return (
    <>
      <Header  menuOnclick={menuOnclick}/>
      <DetailPageBanner data={data.DetailPageBanner} />
      <SecondSectionDetail data={data.SecondSectionDetail} />
      <ExperTeamDetail data={data.experTeamDetail} />
      <FacilitythatInspire data={data.facility} />
      <FaqDetail data={data.faq} />
      <EventsandTournaments data={data.eventsAndTournaments} />
      <JourneyDetail data={data.journey} />
      <SucessDetailSlider data={data.success} />
    </>
  );
}
