import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

export default function AllMeetupsPage() {
  const [isloading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    async function fetchMeetups() {
      const meetupsCollectionRef = collection(db, "meetups");
      const meetupsSnapshot = await getDocs(meetupsCollectionRef);

      const meetupsList = meetupsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setLoadedMeetups(meetupsList);
      setIsLoading(false);
    }

    fetchMeetups();
  }, []);

  if (isloading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups Page</h1>
      <ul>
        <MeetupList meetups={loadedMeetups} />
      </ul>
    </section>
  );
}
