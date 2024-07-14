import styles from "../styles/services.module.css";
import Image from "next/image";
import carStuckInSnow from "../../images/stuck_in_snow.jpg";

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <h2 className={styles.servisesTitle}>Наші сервіси</h2>
        <div className={styles.servicesWrapper}>
          <Image
            src={carStuckInSnow}
            alt="car stuck in snow"
            className={styles.servicesImage}
          />
          <h2 className={styles.servicesTitle}>Витягування машини</h2>
          <p className={styles.servicesText}>
            Витягнемо авто із снігу, болота або піску
          </p>
          <button className={styles.servicesOrderBtn}>Замовити</button>
        </div>
        <div className="servicesWrapper">
          <Image
            src={carStuckInSnow}
            alt="car stuck in snow"
            className={styles.servicesImage}
          />
          <h2>Аварійне відкривання замків</h2>
          <p className={styles.servicesText}>відкриємо ваше авто</p>
          <button className={styles.servicesOrderBtn}>Замовити</button>
        </div>
        <div className="servicesWrapper">
          <Image
            src={carStuckInSnow}
            alt="car stuck in snow"
            className={styles.servicesImage}
          />
          <h2>Аварійне відкривання замків</h2>
          <p className={styles.servicesText}>
            Відкриємо вашу квартиру, будинок, офіс
          </p>
          <button className={styles.servicesOrderBtn}>Замовити</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
