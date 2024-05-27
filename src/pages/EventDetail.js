import { useLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";
function EventDetailPage() {
  const data = useLoaderData();
  const event = data.event;
  return <EventItem event={event} />;
}
export default EventDetailPage;
export async function loader({ params }) {
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/` + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for the selected event" },
      { status: 500 }
    );
  } else {
    return response;
  }
}
