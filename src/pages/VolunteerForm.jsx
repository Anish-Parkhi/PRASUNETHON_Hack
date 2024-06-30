import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import styles from './styles.module.css';

function VolunteerForm() {
  const [eventRegistration, setEventRegistration] = useState({
    email: '',
    fullname: '',
    phone: '',
    noOfPeople: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      setEventRegistration({
        fullname: user.fullname || '',
        email: user.email || '',
        phone: user.phone || '',
      });
    }
  }, []);

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setEventRegistration((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:3000/eventRegistration',
        eventRegistration
      );
      if (res) {
        navigate('/done');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.eventRegistraionContainer}>
        <form className="mt-0 mb-20 container border-2 w-2/3 rounded-lg shadow-lg mx-auto bg-white">
          <div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-center mt-10">
                Online Volunteer Registration Form
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
                    onChange={handleValueChange}
                    name="fullname"
                    value={eventRegistration.fullname}
                    type="text"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-2/5">
                  <label className="block text-lg font-medium text-gray-700">
                    Flat No.
                  </label>
                  <input
                    onChange={handleValueChange}
                    name="flatNo"
                    value={eventRegistration.flatNo}
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
                  onChange={handleValueChange}
                  name="societyName"
                  value={eventRegistration.societyName}
                  type="text"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-1/2 mt-5">
                <label className="block text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  onChange={handleValueChange}
                  name="email"
                  value={eventRegistration.email}
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
                    onChange={handleValueChange}
                    name="phone"
                    value={eventRegistration.phone}
                    type="text"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-2/5">
                  <label className="block text-lg font-medium text-gray-700">
                    Age
                  </label>
                  <input
                    onChange={handleValueChange}
                    name="noOfPeople"
                    value={eventRegistration.members}
                    type="text"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="w-28 mb-4 mt-5">
                <button
                  onClick={handleSubmit}
                  className="w-full p-2 bg-blue-500 text-white rounded-md"
                >
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

export default VolunteerForm;
