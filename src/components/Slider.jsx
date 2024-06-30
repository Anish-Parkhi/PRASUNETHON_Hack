import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import comm from '../assets/comm.svg';
import event1 from '../assets/event1.jpg';
import event3 from '../assets/event3.jpg';
import event4 from '../assets/event4.jpg';

function Slider() {
  return (
    <div className="flex items-center">
      <img src={comm} />
      <Carousel
        showArrows={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
        className="m-auto w-4/12 align-middle rounded-md"
      >
        <div>
          <img className="rounded-md" src={event1} />
        </div>
        <div>
          <img className="rounded-md" src={event3} />
        </div>
        <div>
          <img className="rounded-md" src={event4} />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
