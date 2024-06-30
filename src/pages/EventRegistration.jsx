import Navbar from '../components/Navbar/Navbar';
import styles from './styles.module.css';

function EventRegistration() {
  return (
    <div className={styles.eventRegistraionContainer}>
      <Navbar />
      <div>
        <form className="mt-0 mb-20 container border-2 w-2/3 rounded-lg shadow-lg mx-auto bg-white">
          <div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-center mt-10">
                Online Event Registration Form
              </h1>
              <div className="mt-4">
                If you would like to take part in our event, please fill the
                following form. You will be registered instantly.
              </div>
              <div className="w-1/2 mt-4 flex justify-between">
                <div className="w-2/5">
                  <label className="block text-lg font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-2/5">
                  <label className="block text-lg font-medium text-gray-700">
                    Flat No.
                  </label>
                  <input
                    type="text"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="w-1/2 mt-5">
                <label className="block text-lg font-medium text-gray-700">
                  Society name
                </label>
                <input
                  type="text"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-1/2 mt-5">
                <label className="block text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-between w-1/2 mt-5">
                <div className="w-2/5">
                  <label className="block text-lg font-medium text-gray-700">
                    Phone no.
                  </label>
                  <input
                    type="text"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-2/5">
                  <label className="block text-lg font-medium text-gray-700">
                    No of members
                  </label>
                  <input
                    type="text"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="w-28 mb-4 mt-5">
                <button className="w-full p-2 bg-blue-500 text-white rounded-md">
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventRegistration;
