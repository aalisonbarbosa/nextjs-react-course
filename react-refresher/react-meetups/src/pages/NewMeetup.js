import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function NewMeetupPage() {
  const navigate = useNavigate();

  async function addMeetupHandler(meetupData) {
    try {
      await addDoc(collection(db, "meetups"), meetupData);

      console.log("Meeting added successfully!");

      navigate("/");
    } catch (error) {
      console.error("Error adding meeting", error);
    }
  }

  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
