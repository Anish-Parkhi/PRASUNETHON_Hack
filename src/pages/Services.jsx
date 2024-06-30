import Navbar from '../components/Navbar/Navbar';
import ServiceCard from '../components/ServiceCard';
import ServiceList from '../utils/ServiceList';
import styles from './styles.module.css';

function Services() {
  return (
    <div className={`pb-4`}>
      <div className={styles.servicesOuterDiv}>
        <Navbar />
        <div className={`${styles.serviceTopFont} m-auto self-center text-8xl font-bold`}>Services near you</div>
      </div>
      <div className={styles.servicesOuterContainer}>
        <div
          className={`${styles.serviesGradientDiv} w-full m-auto flex flex-col gap-8 justify-center`}
        >
          {ServiceList.map((service) => (
            <div key={service.id}>
              <ServiceCard
                servicename={service.servicename}
                serviceList={service.serviceList}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
