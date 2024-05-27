import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage() {
  return <EventForm />;
}
export default NewEventPage;
export async function action({ request }) {
  const data = request.formData();
  const eventData = {
    title: data.get("title"),
    description: data.get("description"),
    date: data.get("date"),
    image: data.get("image"),
  };

  const response = await fetch("http://localhost:3000/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw json({ message: "Could not create the event" }, { status: 500 });
  }

  return redirect("/events");
}
