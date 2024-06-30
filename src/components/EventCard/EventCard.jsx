import propTypes from 'prop-types';
import event1 from '../../assets/event2.jpg';
import { useNavigate } from 'react-router-dom';

function EventCard({ eventName, venue, date, description, imageURL }) {
  const navigate = useNavigate();
  return (
    <div
      style={{ fontFamily: 'poppins' }}
      className="flex p-4 gap-3 self-center shadow-lg border-2 rounded-md w-4/6 "
    >
      <img className="w-1/3 rounded-md object-cover" src={imageURL} />
      <div className="flex flex-col text-left gap-2">
        <div className="flex flex-row justify-between">
          <h2 className="text-lg font-bold ">{eventName}</h2>
          <div>{date}</div>
        </div>
        <div>Venue: {venue}</div>
        <div className='text-sm' >{description}</div>
        <button onClick={() => navigate('/event-registration', {})} className='bg-black rounded-md self-end p-1 w-1/5 '>
          <div className='text-white text-sm' >View more</div>
        </button>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  eventName: propTypes.string,
  venue: propTypes.string,
  date: propTypes.string,
  description: propTypes.string,
};

export default EventCard;
