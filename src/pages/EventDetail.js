import { useParams } from "react-router-dom";
function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Event Detail Page</h1>
      <p>Events ID: {params.id}</p>
    </>
  );
}
export default EventDetailPage;
