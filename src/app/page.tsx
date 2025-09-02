import Advantages from "@/components/Advantages";
import EventsActivities from "@/components/events-activities";
import Homepage from "@/components/Homepage";
import PhotoGallery from "@/components/photo-gallery";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div>
      <Homepage/>
      <Welcome/>
      <Advantages/>
      <PhotoGallery/>
      <EventsActivities/>
    </div>
  );
}
