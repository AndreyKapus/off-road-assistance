import styles from "../styles/services.module.css";
import Image from "next/image";
import carStuckInSnow from "../../images/stuck_in_snow.jpg";

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <h2 className={styles.servisesTitle}>Наші сервіси</h2>
        <div className="servicesWrapper">
          <Image
            src={carStuckInSnow}
            alt="car stuck in snow"
            className={styles.servicesImage}
          />
          <h2>Витягування машини</h2>
          <p>Витягнемо авто із снігу, болота або піску</p>
        </div>
        <div className="servicesWrapper">
          <h2>Title</h2>
          <p>Text</p>
          <p>Image</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
