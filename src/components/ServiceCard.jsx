import propTypes from 'prop-types';

function ServiceCard({ servicename, serviceList, icon }) {
  return (
    <div className="flex bg-white m-auto shadow-md w-2/4 drop-shadow-lg p-3 gap-8 justify-center rounded-lg border-2 ">
      <img className='self-center' src={icon} />
      <div className='w-2/3 flex text-left flex-col gap-2' >
        <div className='text-2xl font-medium'>{servicename}</div>
        <ul className='list-disc'>
          {serviceList.map((service, index) => (
            <li className='text-lg ml-5' key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  servicename: propTypes.string.isRequired,
  serviceList: propTypes.array.isRequired,
  icon: propTypes.string.isRequired,
};

export default ServiceCard;
