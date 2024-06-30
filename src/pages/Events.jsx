import EventCard from '../components/EventCard/EventCard';
import Navbar from '../components/Navbar/Navbar';
import styles from './styles.module.css';

function Events() {
  const data = [1, 2];

  return (
    <div>
      <Navbar />
      <div className={`${styles.backgroundContainer} flex flex-col`}>
        <div className={`${styles.heading}`}>Events near you</div>
      </div>
      <div
        className={`pt-0 flex flex-col gap-6 ${styles.eventsBottomContainer}`}
      >
        {data.map((item) => (
          <EventCard
            key={item}
            eventName="Diwali celebration"
            venue="54-A, Lodhi gardens, Ahmednagar, Pin-414020"
            date="25/06/24"
            description="Our society will soon celebrate Diwali with a vibrant event featuring traditional dance performances, a rangoli competition, and a spectacular fireworks display. Residents will enjoy festive treats, fun games, and craft workshops, making it a joyous and memorable occasion for all."
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
