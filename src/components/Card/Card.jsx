import PropTypes from 'prop-types';

function Card({ icon: Icon, title, description, onClick }) {
  return (
    <div className="rounded-md shadow-slate-300 shadow-2xl flex justify-between flex-col border-2 p-4 w-72">
      <div className="flex">
        <Icon className="mr-2 text-black" />
        <div style={{ fontFamily: 'Hanuman' }} className="font-bold">
          {title}
        </div>
      </div>
      <div className="mt-2 mb-2 basis-10 ">{description}</div>
      <button
        className="bg-black self-end mt-3 p-1 rounded-md"
        onClick={onClick}
      >
        <div className="text-white p-0.5 text-sm">View more</div>
      </button>
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
