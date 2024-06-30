import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import EventCard from '../components/EventCard/EventCard';
import Navbar from '../components/Navbar/Navbar';
import styles from './styles.module.css';

function Events() {

  const eventsData = useQuery({
    queryKey:[ 'events'],
    queryFn: () => {
      return axios.get('http://localhost:3000/event');
    },
  });

  const events = eventsData?.data?.data;

  console.log(events)

  return (
    <div>
      <Navbar />
      <div className={`${styles.backgroundContainer} flex flex-col`}>
        <div className={`${styles.heading}`}>Events near you</div>
      </div>
      <div
        className={`pt-0 flex flex-col gap-6 ${styles.eventsBottomContainer}`}
      >
        {events?.map((event) => (
          <EventCard
            key={event._id}
            eventName={event.eventName}
            venue={event.venue}
            date={event.date}
            description="Our society will soon celebrate Diwali with a vibrant event featuring traditional dance performances, a rangoli competition, and a spectacular fireworks display. Residents will enjoy festive treats, fun games, and craft workshops, making it a joyous and memorable occasion for all."
            imageURL={event.imageURL}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
