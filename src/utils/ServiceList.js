import service1 from '../assets/services/service1.svg';
import service2 from '../assets/services/service2.svg';
import service3 from '../assets/services/service3.svg';

const ServiceList = [
  {
    id: 1,
    servicename: 'Housekeeping service',
    serviceList: [
      'First Quality Cleaning Service (099404 98547)',
      'Reflection cleaning Service (073585 77739)',
      'Grace Services (070105 06397)',
      'Masterkey Home services (090433 65444)',
    ],
    icon: service1,
  },
  {
    id: 2,
    servicename: 'Laundry services',
    serviceList: [
      'Star Laundry&Dry Cleaners (084287 17282)',
      'Dhobi G (074287 43582)',
      'SriSai laundry (089654 63789)',
      'Dumbo (098567 46378)',
    ],
    icon: service2,
  },
  {
    id: 3,
    servicename: 'Pest control',
    serviceList: [
      'Sri Balaji Pest Control (099404 98547)',
      'Sri Sai Pest Control (073585 77739)',
      'Grace Pest Control (070105 06397)',
      'Masterkey Pest Control (090433 65444)',
    ],
    icon: service3,
  },
];

export default ServiceList;
